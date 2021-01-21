var data = [{item:'get milk'},{item:'walk dog'},{item:'kick some coding ass'}]

module.exports = function(app){
   
    app.get('/todo',function(res,req,next){
      console.log('suprabhat');
      next();
    }, function(req,res){
      res.render('todo',{todos:data});
    });

    app.post('/todo', function(req,res){

    });
 
    app.delete('/todo', function(req,res){

    });
};