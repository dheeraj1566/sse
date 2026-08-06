const mongoose = require('mongoose');

const jobSheetSchema = new mongoose.Schema({
  registrationNumber: { type: String, required: true, unique: true },
  callStatus: { type: String },
  callNo: { type: String },
  date: { type: String },
  inTime: { type: String },
  outTime: { type: String },
  customerName: { type: String, required: true },
  customerMobile: { type: String, required: true },
  customerAddress: { type: String },
  product: { type: String },
  workDetails: { type: String },
  brand: { type: String },
  serialNo: { type: String },
  problemReported: { type: String },
  detectedByEngineer: { type: String },
  repairByEngineer: { type: String },
  serviceAmount: { type: Number },
  partAmount: { type: Number },
  totalAmount: { type: Number },
  modeOfPayment: { type: String },
  receiptUrl: { type: String },
  customerSuggestions: { type: String },
  customerRating: { type: Number },
  recommendService: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('JobSheet', jobSheetSchema);
