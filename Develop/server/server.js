const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'client/dist' directory
app.use(express.static(path.join(__dirname, '../client/dist')));

// Middleware for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Middleware for parsing application/json
app.use(express.json());

// Import and use routes
require('./routes/htmlRoutes')(app);

app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
