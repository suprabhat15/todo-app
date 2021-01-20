var express = require('express')
var todoController = require('./controllers/todoController')
var app = express();

//set up template engine
app.set('view engine','ejs')

//static files
//app.use(express.static("./public")) //middleware
app.use('/assets', express.static('assets'))

//fire controllers
todoController(app);


app.listen(4000)
console.log('You are listening to port 4000');