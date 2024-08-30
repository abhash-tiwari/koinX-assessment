require('dotenv').config();
const express = require('express');
const connectDB = require('./config/database');
const apiRoutes = require('./src/routes/api');
const { startPriceUpdateScheduler } = require('./controllers/priceController');

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(express.json());
app.use('/api', apiRoutes);

startPriceUpdateScheduler();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});