var PORT = process.env.PORT || 8888;
var express = require('express');
var app = express();
//create HTTP server
//start mot server dung express lam mau
// anything the Express listents to the http server should also listents to
var http = require('http').Server(app);
app.use(express.static(__dirname + '/public'));
http.listen(PORT, function(){
  console.log('Server started'); // handle when start server
});
