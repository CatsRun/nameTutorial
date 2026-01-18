const express = require('express');
const connectdb = require('./db/connection');
const app = express();

app.use('/', require('./routes'));

// This will connect to the MongoDB database using first the connection function from db/connection.js, mongoose
// disable it if using the other code. 
// connectdb();

const port = 3000;

// when the server starts it will print a msg to the console of what port it is listening on
app.listen(process.env.PORT || port, () => {
    console.log('Web Server is listening at port ' + (process.env.PORT || port));
});