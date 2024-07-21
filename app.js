const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const mongoSanitize = require('express-mongo-sanitize');

const app = express();
const routes = require(`./src/modules/api`);

//security middlewares
app.use(helmet());
app.use(cors({ origin: '*' }));
app.use(mongoSanitize());

//body parsing middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Routes
app.use('/api', routes);

//Url not found
app.all('*', (req, res, next) => {
    return res.status(404).json({
        status: 404,
        message: `Can't find ${req.originalUrl} on this server!`,
    });
});

app.use((err, req, res, next) => {
    console.error(err.message);
    console.error(err.stack); 
    res.status(500).json({
        status: 500,
        message: 'Oops something went wrong!'
    });
});

//Export
module.exports = app;