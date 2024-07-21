const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = require('./app');
const http = require('http').Server(app);

//setting up the config for the project
dotenv.config({ path: './.env' });

const mongoDB = process.env.DB_CONNECTION
//connect local database 
mongoose.connect(mongoDB)
    .then(() => console.log('Database Connected...'))
    .catch(err => console.log('Error connecting database',err));

//assigning the port
const port = process.env.PORT || 8001;
const host = process.env.HOST || "127.0.0.1"

//server
const server= http.listen(port, host, () => {
    console.log('Backend Server listing at PORT:', port);
})

// error handling for uncaught Exceptions
process.on('uncaughtException', (err) => {
    console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
    console.log(err);
    server.close(() => {
        process.exit(1);
    });
});

//error handling for the rejected promises
process.on('unhandledRejection', (err) => {
    console.log('UNHANDLED REJECTION! 💥 Shutting down...');
    console.log(err.name, err.message);
    server.close(() => {
      process.exit(1);
    });
});