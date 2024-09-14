// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const Route = require('./Routes/Route');
// const authRoutes = require('./routes/auth');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

// Middleware 
app.use(express.json());
app.use(cors()); 

app.use("/api/v1",Route) ; 

mongoose.connect(process.env.MONGO_URL)
.then(() =>{
    console.log("Database succsessfully connected")
    app.listen(PORT , ()=>{
        console.log(`Server is live at PORT ${PORT}`)
    }) 
})
.catch((error) =>{  
    console.log(error)
    console.log("DataBase Not Connected") ;
})
