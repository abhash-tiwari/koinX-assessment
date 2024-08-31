import React, { useState } from 'react';
import axios from 'axios';
import styles from './FetchTransactions.module.css';


const API_BASE_URL = 'http://localhost:3001';

function FetchTransactions() {
  const [address, setAddress] = useState('');
  const [transactions, setTransactions] = useState([]);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await axios.get(`${API_BASE_URL}/api/transactions/${address}`);
      setTransactions(response.data);
    } catch (error) {
      console.error('Error fetching transactions:', error);
      setError('Failed to fetch transactions. Please check the address and try again.');
    }
  };

  return (
    <div>
      <h2 style={{textTransform:"uppercase"}}>Fetch Transactions</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter Ethereum address"
          className={styles.input}
        />
        <button type="submit" className={styles.button}>Fetch Transactions</button>
      </form>
      {error && <p className={styles.error}>{error}</p>}
      <ul className={styles.transactionList}>
        {transactions.map((tx, index) => (
          <li key={index} className={styles.transactionItem}>
            <strong>From:</strong> {tx.from}<br />
            <strong>To:</strong> {tx.to}<br />
            <strong>Value:</strong> {tx.value} ETH
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FetchTransactions;