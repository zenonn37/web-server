var express = require('express');
 var app = express();
 var middleware = require('./middleware');


app.use(middleware.logger);
 app.get('/about',middleware.requireAuth,function(req,res) {
    res.send('About me!');
 })
app.use(express.static(__dirname + '/public'));
 var port = process.env.PORT || 4000;
 app.listen(port,function() {
   console.log("Running",port);
 });
