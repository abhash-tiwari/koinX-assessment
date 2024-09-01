require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');
const apiRoutes = require('./routes/api');
const { startPriceUpdateScheduler } = require('./controllers/priceController');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors({
  origin: ['http://localhost:3000', 'https://koinx-assignment-self.vercel.app/'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

connectDB();

app.use(express.json());
app.use('/api', apiRoutes);

startPriceUpdateScheduler();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});