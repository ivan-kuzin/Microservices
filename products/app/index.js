const express = require('express');
const { PORT } = require('./config');
const { databaseConnection } = require('./database');
const cors  = require('cors');
const { products } = require('./api');

const StartServer = async() => {

    const app = express();
    
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cors());

    databaseConnection();
    //api
    products(app);

    app.listen(PORT, () => {
        console.log(`listening to port ${PORT}`);
    })
    .on('error', (err) => {
        console.log(err);
        process.exit();
    })
}

StartServer();