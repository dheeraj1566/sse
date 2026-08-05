require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Admin = require('./models/Admin');

const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/shree_shyam';

async function addAdmin() {
  try {
    await mongoose.connect(mongoURI);
    
    const username = "example";
    const password = "example@123";
    
    try {
      await mongoose.connection.collection('admins').dropIndex('email_1');
    } catch(e) {
      // ignore if it doesn't exist
    }
    
    // Check if already exists
    const existing = await Admin.findOne({ username });
    if (existing) {
      console.log('Admin user already exists!');
      process.exit(0);
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);
    const newAdmin = new Admin({ username, password: hashedPassword });
    await newAdmin.save();
    
    console.log('Admin user successfully created!');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

addAdmin();
