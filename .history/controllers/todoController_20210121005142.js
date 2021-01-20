module.exports = function(app){
   
    app.get('/todo.ejs', function(req,res){
      res.render('todo');
    });

    app.post('/todo', function(req,res){

    });
 
    app.delete('/todo', function(req,res){

    });
};