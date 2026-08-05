const express = require('express');
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('cloudinary').v2;
const JobSheet = require('../models/JobSheet');
const router = express.Router();

// Configure Cloudinary (requires environment variables set)
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// Configure Multer Storage for Cloudinary
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'job_sheets',
    allowed_formats: ['jpg', 'jpeg', 'png', 'pdf'],
  },
});

const upload = multer({ storage: storage });

// POST endpoint to create a new job sheet with an uploaded image
router.post('/', upload.single('receiptImage'), async (req, res) => {
  try {
    const data = req.body;
    let receiptUrl = '';
    
    // If a file was uploaded, the Cloudinary URL will be in req.file.path
    if (req.file && req.file.path) {
      receiptUrl = req.file.path;
    }
    
    // Generate Registration Number: SSE/todaydate/ClientFirstName
    // date format: DDMMYYYY
    const dateObj = new Date();
    const formattedDate = 
      String(dateObj.getDate()).padStart(2, '0') + 
      String(dateObj.getMonth() + 1).padStart(2, '0') + 
      dateObj.getFullYear();
    const firstName = data.customerName ? data.customerName.split(' ')[0] : 'Unknown';
    const registrationNumber = `SSE/${formattedDate}/${firstName}`;
    
    const newJob = new JobSheet({
      ...data,
      registrationNumber,
      receiptUrl
    });
    
    await newJob.save();
    res.status(201).json({ message: 'Job Sheet saved successfully', job: newJob });
  } catch (error) {
    console.error("Error creating job sheet:", error);
    res.status(500).json({ message: 'Failed to create Job Sheet', error: error.message });
  }
});

// GET all job sheets (Admin view)
router.get('/', async (req, res) => {
  try {
    const jobs = await JobSheet.find().sort({ createdAt: -1 });
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch Job Sheets', error: error.message });
  }
});

// GET single job sheet by ID
router.get('/:id', async (req, res) => {
  try {
    const job = await JobSheet.findById(req.params.id);
    if (!job) {
      return res.status(404).json({ message: 'Job Sheet not found' });
    }
    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch Job Sheet', error: error.message });
  }
});

module.exports = router;
