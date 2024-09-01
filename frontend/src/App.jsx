import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import FetchTransactions from './components/FetchTransactions/FetchTransactions';
import ViewExpenses from './components/ViewExpenses/ViewExpenses';
import styles from './App.module.css';

function App() {
  return (
    <>
    <Router>
      <div className={styles.app}>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link to="/" className={styles.navLink}>Fetch Transactions</Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/expenses" className={styles.navLink}>View Expenses</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<FetchTransactions />} />
          <Route path="/expenses" element={<ViewExpenses />} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
