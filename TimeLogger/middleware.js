const express = require('express');
const app = express();

// Custom middleware function to log the time
const timelogger = (req, res, next) => {
  const excludedRoutes = ['/path1', '/path2']; // Array of excluded routes or paths

  if (excludedRoutes.includes(req.path)) {
    // Skip logging for excluded routes
    next();
  } else {
    // Log the time for other routes
    console.log(`Time: ${new Date().toISOString()} - Route: ${req.path}`);
    next();
  }
};

// Apply the timelogger middleware to all routes
app.use(timelogger);

// Define your routes
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/path1', (req, res) => {
  res.send('This route is excluded from logging.');
});

app.get('/path2', (req, res) => {
  res.send('This route is also excluded from logging.');
});

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
