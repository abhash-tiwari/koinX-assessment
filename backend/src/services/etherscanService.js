const axios = require('axios');

const ETHERSCAN_API_URL = 'https://api.etherscan.io/api';
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

const fetchTransactions = async (address) => {
  try {
    const response = await axios.get(ETHERSCAN_API_URL, {
      params: {
        module: 'account',
        action: 'txlist',
        address,
        startblock: 0,
        endblock: 99999999,
        sort: 'desc',
        apikey: ETHERSCAN_API_KEY,
      },
    });

    if (response.data.status === '1') {
      return response.data.result;
    } else {
      throw new Error(response.data.message);
    }
  } catch (error) {
    console.error('Error fetching transactions:', error);
    throw error;
  }
};

module.exports = { fetchTransactions };