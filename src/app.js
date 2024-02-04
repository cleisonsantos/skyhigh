require('dotenv').config();
const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use('/api', routes);

//require('./db');

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
})