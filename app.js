const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const cors = require('cors');
app.use(cors());

// confirm the current directory
console.log("__dirname: ", __dirname);

// load the data from the JSON file
const data = require('./data/cars.json');

// set up the middleware to serve static files from the public directory
app.use('/site', express.static(path.join(__dirname, 'public')));

// error handling middleware function
app.use((err, req, res, next) => {
    res.status(404).send("<h1>Error 404, Cannot find your request!<h1>");
    console.error(err.stack);
    res.status(500).send('Something broke!');
})

// set up the route to serve the json data on te browser
app.get('/api/cars', (req, res) => {
    res.json(data);
});

// listen on port 3000
app.listen(port, () => {
    console.log(`APP ROOT URL: http://localhost:${port}`)
});
