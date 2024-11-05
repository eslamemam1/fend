// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes

const express = require('express');

// Start up an instance of app

const app = express();

const bodyParser =require('body-parser')

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance

const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server

// port 
const port = 8080 ;

// get method 
app.get('/all',(req,res)=>{
    res.send(projectData)
})

// post method
app.post('/add' , (req,res)=>{
    const {temperature , date , userResponse} = req.body;
    projectData = {temperature , date , userResponse};
    req.send(projectData)
})

app.listen(port , ()=>{
    console.log(`server running on port : ${port}`)
})


/**
 * const iOp = {}
const newOp = {
    id: 1,
  name: "John Doe",
  age: 30
}

app.get('/data' , function(req,res){
    res.send(req.body)
})

function addData(req,res){
    Object.assign(iOp ,newOp)
    res.send(req.body)
    console.log(req.body)
    app.post('/data' , addData)
}
 */

