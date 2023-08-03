const fs = require('fs');

// Function to get the current normal date and time
function getNormalDate() {
  const currentDate = new Date();
  return currentDate.toISOString().slice(0, 10); // Extract only the date part in "YYYY-MM-DD" format
}

// Function to log the normal date and time to a text file
function logTimeToFile() {
  const logFilePath = 'timelog.txt';
  const normalDate = getNormalDate();
  const logMessage = `Logged at: ${normalDate}\n`;

  fs.appendFile(logFilePath, logMessage, (err) => {
    if (err) {
      console.error('Error writing to the log file:', err);
    } else {
      console.log('Time logged successfully!');
    }
  });
}

// Call the function to log the time when needed
logTimeToFile();
