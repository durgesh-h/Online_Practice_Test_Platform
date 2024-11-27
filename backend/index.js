require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

// Initialize the app
const app = express();
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN; // Used for development & production

// Connect to the database
connectDB();

// Middleware
app.use(cors({ 
    origin: CLIENT_ORIGIN, // Replace with your frontend domains
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
    credentials: true // Enable cookies, authorization headers, etc.
}));
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/quiz', require('./routes/quiz'));

// Handle invalid routes
app.use((req, res, next) => {
    res.status(404).json({ error: 'Route not found' });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
