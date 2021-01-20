module.exports = function(app){
   
    app.get('/todo', function(req,res){
      res.send('todo');
    });

    app.post('/todo', function(req,res){

    });
 
    app.delete('/todo', function(req,res){

    });
};