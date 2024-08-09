const mongoose = require('mongoose');

async function connectDB() {
    try {
        await mongoose.connect('mongodb://localhost:27017/webProduct', 
        {  serverSelectionTimeoutMS: 5000,
        socketTimeoutMS: 45000,
        family: 4 });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

module.exports = connectDB;