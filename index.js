const express = require('express');
const app = express();
const { logger } = require('./startup/logging');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});


const corsOptions = {
    origin: ["*"],
    credentials: true,
    methods: "POST, PUT, OPTIONS, DELETE, GET",
    allowedHeaders: "X-Requested-With, Content-Type, jwtAuthToken"
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.get('/', async (req, res) => {
    res.send({ "msg": "main server is working" })
});

require('./startup/routes.v1')(app);
require('./startup/db')();
require('./startup/config')();
require('./startup/prod')(app);


// port 80 or 5000
const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
    console.log(`http://server:${port}`);
    console.log('main server is working...');
});

module.exports = server;