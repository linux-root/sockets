var PORT = process.env.PORT || 8888;
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
//create HTTP server
//start mot server dung express lam mau
// anything the Express listents to the http server should also listents to

app.use(express.static(__dirname + '/public'));

io.on('connection', function(){
   console.log('User connected via socket.io');
}); //listen to envents
http.listen(PORT, function(){
  console.log('Server started'); // handle when start server
});
