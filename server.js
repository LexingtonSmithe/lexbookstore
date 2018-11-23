const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();
const api = require('./server/routes/api');

//https://mlab.com/databases/lexbookstore

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// Serve static file
app.use(express.static(path.join(__dirname, 'dist/lexbookstore')));

// Set our api routes
app.use('/api', api);

// Return other route to angular index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/lexbookstore/index.html'));
})

// Set port
const port = process.env.PORT || '3000';
app.set('port', port);

// Create the HTTP server
const server = http.createServer(app);
server.listen(port, () => console.log('Running on localhost:3000'));
