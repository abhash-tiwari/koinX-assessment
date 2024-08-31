import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import FetchTransactions from './components/FetchTransactions/FetchTransactions';
import ViewExpenses from './components/ViewExpenses/ViewExpenses';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Fetch Transactions</Link>
            </li>
            <li>
              <Link to="/expenses">View Expenses</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<FetchTransactions />} />
          <Route path="/expenses" element={<ViewExpenses />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
