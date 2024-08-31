const cron = require('node-cron');
const EthereumPrice = require('../models/EthereumPrice');
const { fetchEthereumPrice } = require('../services/coingeckoService');

const updateEthereumPrice = async () => {
  try {
    const price = await fetchEthereumPrice();
    await EthereumPrice.create({ price });
    console.log('Ethereum price updated:', price);
  } catch (error) {
    console.error('Error updating Ethereum price:', error);
  }
};

const startPriceUpdateScheduler = () => {
  cron.schedule('*/10 * * * *', updateEthereumPrice);
  console.log('Price update scheduler started');
};

module.exports = { startPriceUpdateScheduler };