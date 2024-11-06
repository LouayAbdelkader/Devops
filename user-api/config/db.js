const mongoose = require('mongoose');
MONGO_URL="mongodb://mongodb:secret@98.66.180.183:27017/?retryWrites=true&w=majority"
const connectDB = async () => {
    try {
        mongoose.connect(process.env.MONGO_URL, err => {
            if (err) throw err;
            console.log('connected to MongoDB')
        });
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit();
    }
};

module.exports = connectDB;