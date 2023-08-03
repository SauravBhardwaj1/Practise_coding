// timelogger.js
const mongoose = require('mongoose');

// Replace 'your_database_url' with your actual MongoDB connection string
const mongoURI = 'mongodb://localhost:27017/your_database_name';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Create a Mongoose schema for the time log entries
const timeLogSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now }
});

// Create a Mongoose model for the time log entries
const TimeLog = mongoose.model('TimeLog', timeLogSchema);

// Function to log the normal date and insert it into MongoDB
function logTimeToMongoDB() {
  const normalDate = new Date();
  const logEntry = new TimeLog({ date: normalDate });

  logEntry.save()
    .then(() => console.log('Time logged and saved to MongoDB successfully!'))
    .catch((err) => console.error('Error saving time log to MongoDB:', err));
}

// Call the function to log the time and insert it into MongoDB
logTimeToMongoDB();
