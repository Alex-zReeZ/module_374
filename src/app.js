const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/index');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/', routes());

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});