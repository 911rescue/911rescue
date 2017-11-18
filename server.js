let express = require('express');
let path = require('path');
let logger = require('morgan');
let bodyParser = require('body-parser');
let debug = require('debug')('app:http');
let PORT = process.env.PORT || 5000;
let routes = require("./config/routes");
let app = express();
let server = require('http').Server(app);

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger('dev'));
app.use(debugReq);
app.use('/', express.static(path.join(__dirname, "public")))
app.use('/api', routes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

function debugReq(req, res, next){
  debug("params:", req.params);
  debug("query:", req.query);
  debug("body:", req.body);
  next();
};

server.listen(PORT, '0.0.0.0', (err) => {
  if(err) {
    return err;
  } else {
    console.log("SRC_DIR IS: ", path.resolve(__dirname, 'public/src'));
    console.log("Server Listening On %s", PORT);
  }
});


if(process.env.NODE_ENV !== 'production') {
  process.once('uncaughtException', function(err) {
    console.error('FATAL: Uncaught exception.');
    console.error(err.stack||err);
    setTimeout(function(){
      process.exit(1);
    }, 100);
  });
}
