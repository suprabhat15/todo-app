module.exports = function(app){
   
    app.get('/todo',function(res,req,next){
      console.log('suprabhat');
      next();
    }, function(req,res){
      res.render('todo');
    });

    app.post('/todo', function(req,res){

    });
 
    app.delete('/todo', function(req,res){

    });
};