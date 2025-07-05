const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const dotenv = require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;

//middleware 
app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes") );
app.use(errorHandler)

// ================get request
// app.get('/api/contacts' , (req, res)=>{
//   res.json({message: "GET all Contacts"});
// })


app.listen(port, ()=>{
  console.log(`Server running on port ${port}`);
  
});