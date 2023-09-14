
const express = require('express');
const connection = require('./config/connection');

const app = express();

app.use(express.json())

const newEntry = {
    user_id: 1,
    username: 'John Doe-TEST',
    email: 'johndoe@example-1.com',
    age: 31
  };
  
  const sql = 'INSERT INTO orders SET ?';
  
  connection.query(sql, newEntry, (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      return;
    }
    console.log('Data inserted successfully');
  });
  

app.listen(4800, async(req,res)=>{
    try {  
        await connection
        
        console.log("database is connected")
    } catch (error) {
        console.log(error.message)
    }
  
    
    console.log('listening on port 4800')
    
})