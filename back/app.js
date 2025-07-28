const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Example route
const exampleRoutes = require('./routes/exampleRoutes');
app.use('/api', exampleRoutes);

// Simple test route
app.get('/', (req, res) => {
	res.json({ message: 'Welcome to our API!' });
});

// Error handling middleware
app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).json({ error: 'Something went wrong!' });
});

module.exports = app;
