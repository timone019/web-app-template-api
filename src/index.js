require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const { handleError } = require('./utils/errorHandler');

const app = express();
const PORT = process.env.PORT || 5000;

// Database connection
require('./database/prisma');

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the React app in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../../client/build')));
}

// API Routes
app.use('/api/users', require('./routes/users'));

// Global error handling middleware
app.use(handleError);

// Handle React routing in production
if (process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/build/index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
