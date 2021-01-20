module.exports = function(app){
   
    app.get('/todo',function(){
      console.log('suprabhat')
    }, function(req,res,next){
      res.render('todo');
    });

    app.post('/todo', function(req,res){

    });
 
    app.delete('/todo', function(req,res){

    });
};