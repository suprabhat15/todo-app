var express = require('express')

var app = express();

//set up template engine
app.set('view engine','ejs')

//static files
app.use(express.static("./public"))//middleware