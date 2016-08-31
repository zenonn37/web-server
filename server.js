var express = require('express');
 var app = express();

var  middleware = {
  requireAuth:function(req,res,next) {
     console.log('private route hit');

      next();
  },
  logger:function(req,res,next) {
    let log = new Date().toString();
    console.log(`Request: ${req.method} ${req.originalUrl} created ${log}`);
    next();
  }
}
app.use(middleware.logger);
 app.get('/about',middleware.requireAuth,function(req,res) {
    res.send('About us');
 })
app.use(express.static(__dirname + '/public'));
 var port = process.env.PORT || 4000;
 app.listen(port,function() {
   console.log("Running",port);
 });
