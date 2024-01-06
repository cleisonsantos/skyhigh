const mongoose = require('mongoose');

require('dotenv').config();

mongoose.set('strictQuery', false);

async function connect() {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('MongoDB connected');
    mongoose.connection.on('error', (err) => {
        console.log(err);
    });
    mongoose.connection.on('disconnected', () => {
        console.log('MongoDB disconnected');
    });
    mongoose.connection.on('connected', () => {
        console.log('MongoDB connected');
    });
}

connect().catch((err) => console.log(err));

module.exports = connect;