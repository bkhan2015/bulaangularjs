var express = require('express'),
    app = express(),
    api = require('./api');

app
    .use(express.static(__dirname + '/public'))
    .use('./api', api)
    .get('*', function(req, res){
      res.sendFile(__dirname + '/public/index.html')
    })
    .listen(3000);
console.log('running at http://localhost:3000');
