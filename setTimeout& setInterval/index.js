// setInterval example
const intervalId = setInterval(() => {
    console.log('This message will be logged every 1 second.');
  }, 1000);
  
  // Stop the interval after 5 seconds
  setTimeout(() => {
    clearInterval(intervalId);
    console.log('Interval stopped.');
  }, 5000);
  
  // setTimeout example
  setTimeout(() => {
    console.log('This message will be logged after 2 seconds.');
  }, 2000);
  