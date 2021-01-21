var express = require('express')
var mongoose = require('mongoose')

var todoController = require('./controllers/todoController')
var app = express();

//set up template engine
app.set('view engine','ejs')

//static files
app.use(express.static("./public/assets")) //middleware  // making public folder global
// app.use('/assets', express.static('assets'))

//fire controllers
todoController(app);


app.listen(3000)
console.log('You are listening to port 3000');