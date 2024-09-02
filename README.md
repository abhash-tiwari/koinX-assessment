Crypto Transactions Application
This project is a full-stack application developed as a take-home assignment for a Backend Intern position. It includes a Node.js-based backend and a React frontend, allowing users to fetch their crypto transactions, retrieve Ethereum prices periodically, and calculate expenses based on gas usage.

Features
Backend
Fetch Crypto Transactions: An API to fetch "Normal" crypto transactions for a given Ethereum address using the Etherscan API.
Ethereum Price Tracking: The system fetches and stores the current Ethereum price every 10 minutes using the CoinGecko API.
Expense Calculation: A GET API that calculates the total expenses for a user's transactions and provides the current Ethereum price.
Frontend
User Interface: A React-based UI to interact with the backend APIs, allowing users to input their Ethereum address and view their transactions, expenses, and the current Ethereum price.
Tech Stack
Backend:

Node.js: Backend framework
Express.js: Web framework for Node.js
MongoDB: Database to store transactions and Ethereum prices
Mongoose: ODM for MongoDB
Etherscan API: To fetch Ethereum transactions
CoinGecko API: To fetch Ethereum prices
Frontend:

React: Frontend library for building user interfaces
Axios: For making API requests to the backend
Installation and Setup
Backend
Clone the repository:

bash
Copy code
git clone https://github.com/abhash-tiwari/koinX-assessment
cd https://github.com/abhash-tiwari/koinX-assessment/backend
Install dependencies:

bash
Copy code
npm install
Environment Variables: The .env file has been included in the repository for local testing. It contains the necessary environment variables:

makefile
Copy code
PORT=3001
ETHERSCAN_API_KEY=api_key
MONGODB_URI=mongodv_uri
Run the backend application:

bash
Copy code
npm start
Frontend
Navigate to the frontend directory:

bash
Copy code
cd ../frontend
Install dependencies:

bash
Copy code
npm install
Run the frontend application:

bash
Copy code
npm start
Access the frontend: Open your browser and go to http://localhost:3000.

Usage
Fetch Transactions: Use the React frontend to input the Ethereum address and fetch transaction details.
View Expenses: The frontend displays total expenses and the current Ethereum price.
Database Schema
Transactions Collection: Stores transaction data for each user.
Prices Collection: Stores Ethereum prices fetched every 10 minutes.
Best Practices
Code Structure: Organized code with clear separation of concerns.
Version Control: Meaningful and concise commit messages following a consistent format.
Error Handling: Robust error handling to manage API failures and data validation.
Contact
For any queries, please reach out to me at abhashhtiwary7610@gmail.com
