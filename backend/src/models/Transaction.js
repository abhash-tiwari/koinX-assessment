const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
  address: {
    type: String,
    required: true,
    index: true,
  },
  hash: {
    type: String,
    required: true,
    unique: true,
  },
  from: String,
  to: String,
  value: String,
  gasUsed: String,
  gasPrice: String,
  timestamp: Number,
});

module.exports = mongoose.model('Transaction', TransactionSchema);