const mongoose = require('mongoose');
const dns = require('dns');

if (process.env.NODE_ENV !== 'production') {
    if (dns.setDefaultResultOrder) {
        dns.setDefaultResultOrder('ipv4first');
    }
    dns.setServers(['8.8.8.8', '8.8.4.4']);
}

const connectDB = async () => {
    try {
        const options = {
            serverSelectionTimeoutMS: 5000,
            connectTimeoutMS: 10000,
        };
        
        if (process.env.NODE_ENV !== 'production') {
            options.family = 4;
        }

        const conn = await mongoose.connect(process.env.MONGODB_URI, options);

        console.log(`MongoDB Connected: ${conn.connection.host}`);

    } catch (error) {
        console.error(`MongoDB Connection Error: ${error.message}`);
        throw error;
    }
};

module.exports = connectDB;
