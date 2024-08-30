const express = require('express');
const router = express.Router();
const { getTransactions, getUserExpensesAndEthPrice } = require('../controllers/transactionController');

router.get('/transactions/:address', getTransactions);
router.get('/user-expenses/:address', getUserExpensesAndEthPrice);

module.exports = router;