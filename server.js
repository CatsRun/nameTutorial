// // express web server
// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//     res.send("Hello world");
// });

// const myPort = 3000;

// app.listen(process.env.PORT || myPort, () => {
//     console.log('Web Server is listening at port ' + (process.env.PORT || myPort));
// });

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Rachel Ray");
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Web Server is listening at port ' + (process.env.PORT || 3000));
});