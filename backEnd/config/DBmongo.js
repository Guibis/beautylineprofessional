const mongoose = require('mongoose');
const dns = require('dns');

// Fix for ECONNREFUSED on some Windows systems with Node v17+
if (dns.setDefaultResultOrder) {
    dns.setDefaultResultOrder('ipv4first');
}

// Case the system DNS fails to resolve SRV records (common in some networks)
dns.setServers(['8.8.8.8', '8.8.4.4']);

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI, {
            serverSelectionTimeoutMS: 5000,
            connectTimeoutMS: 10000,
            family: 4 // Try to force IPv4
        });

        console.log(`MongoDB Connected: ${conn.connection.host}`);

    } catch (error) {

        if (mongoose?.Error?.MongooseError && error instanceof mongoose.Error.MongooseError) {
            console.error(`Mongoose Error: ${error.message}`);
            if (process.env.NODE_ENV !== 'test') process.exit(1);
            throw error;
        }

        console.error(`Error: ${error.message}`);
        if (process.env.NODE_ENV !== 'test') process.exit(1);
        throw error;
    }
};

module.exports = connectDB;
