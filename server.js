const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const mongodb = require('./data/database');
const app = express();

const port = process.env.PORT || 3000;

app.use('/', require('./routes'));
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Z-Key'
    );
    res.setHeader('Acces-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});
app.use(bodyParser.json());


mongodb.initDb((err) => {
    if (err) {
        console.log('There is an error',err);
    }
     else {
        app.listen(port, () =>
             { console.log(`Database is listening and node Running on port ${port}`);
        });
    }
});