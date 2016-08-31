module.exports  = {
          requireAuth:function(req,res,next) {
             console.log('private route hit');

              next();
          },
          logger:function(req,res,next) {
            var log = new Date().toString();
            console.log(`Request: ${req.method} ${req.originalUrl} created ${log}`);
            next();
          }
        }
