import React, { useState } from 'react';
import axios from 'axios';
import styles from './ViewExpenses.module.css';


const API_BASE_URL = 'https://koinx-assessment.onrender.com';

function ViewExpenses() {
  const [address, setAddress] = useState('');
  const [expenses, setExpenses] = useState(null);
  const [etherPrice, setEtherPrice] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`${API_BASE_URL}/api/user-expenses/${address}`);
      setExpenses(response.data.totalExpenses);
      setEtherPrice(response.data.currentEthPrice);
    } catch (error) {
      console.error('Error fetching expenses:', error);
    }
  };

  return (
    <div>
      <h2 style={{textTransform:"uppercase"}}>View Expenses</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter Ethereum address"
          className={styles.input}
        />
        <button type="submit" className={styles.button}>Get Expenses</button>
      </form>
      {expenses !== null && (
        <div className={styles.expensesInfo}>
          <p><strong>Total Expenses:</strong> {expenses} ETH</p>
          <p><strong>Current Ether Price:</strong> ₹{etherPrice}</p>
        </div>
      )}
    </div>
  );
}

export default ViewExpenses;