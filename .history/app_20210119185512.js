var express = require('express')
var todoController = require('./controllers/todoController')
var app = express();

//set up template engine
app.set('view engine','ejs')

//static files
//app.use(express.static("./public")) //middleware
app.use('/assets', express.static('assets'))
app.use(express.static(_dirname + '/public'));
//fire controllers
todoController(app);


app.listen(3000)
console.log('You are listening to port 3000');