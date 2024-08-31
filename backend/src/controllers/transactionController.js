const Transaction = require('../models/Transaction');
const EthereumPrice = require('../models/EthereumPrice');
const { fetchTransactions } = require('../services/etherscanService');

const getTransactions = async (req, res) => {
  try {
    const { address } = req.params;
    
    let transactions = await Transaction.find({ address });
    
    if (transactions.length === 0) {
      const etherscanTransactions = await fetchTransactions(address);
      
      transactions = await Transaction.insertMany(
        etherscanTransactions.map(tx => ({
          address,
          hash: tx.hash,
          from: tx.from,
          to: tx.to,
          value: tx.value,
          gasUsed: tx.gasUsed,
          gasPrice: tx.gasPrice,
          timestamp: tx.timeStamp,
        }))
      );
    }
    
    res.json(transactions);
  } catch (error) {
    console.error('Error in getTransactions:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getUserExpensesAndEthPrice = async (req, res) => {
  try {
    const { address } = req.params;
    
    const transactions = await Transaction.find({ address });
    
    const totalExpenses = transactions.reduce((sum, tx) => {
      const expense = (BigInt(tx.gasUsed) * BigInt(tx.gasPrice)) / BigInt(1e18);
      return sum + Number(expense);
    }, 0);
    
    const latestPrice = await EthereumPrice.findOne().sort({ timestamp: -1 });
    
    res.json({
      address,
      totalExpenses,
      currentEthPrice: latestPrice ? latestPrice.price : null,
    });
  } catch (error) {
    console.error('Error in getUserExpensesAndEthPrice:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { getTransactions, getUserExpensesAndEthPrice };