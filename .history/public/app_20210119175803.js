var express = require('express')
var todoController = require('./controllers/todoController')
var app = express();

//set up template engine
app.set('view engine','ejs')

//fire controllers
todoController(app);

//static files
app.use(express.static("./public")) //middleware

app.listen(3000)
console.log('You are listening to port 3000');