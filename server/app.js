const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const connectDB = require('./config/connectDB');


const app = express();
connectDB();
// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes);

// Kết nối MongoDB


// Chạy server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server đang chạy trên cổng ${PORT}`);
});
