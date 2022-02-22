const express = require('express')
const app = express();
const mysql2 = require('mysql2');
const cors = require('cors')

// Allow frontend to connect with backend
app.use(cors());
app.use(express.json()); 

// Mysql credential
const db = mysql2.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'password',
    database: ''
})

app.listen(5000, () => {
    console.log("Server is running")
})