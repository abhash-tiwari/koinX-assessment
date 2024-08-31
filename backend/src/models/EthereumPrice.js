const mongoose = require('mongoose');

const EthereumPriceSchema = new mongoose.Schema({
  price: {
    type: Number,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('EthereumPrice', EthereumPriceSchema);