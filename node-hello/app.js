var express = require('express')
var app = express()
var fs = require("fs");

app.get('/', function (req, res) {
  res.send('Hello World!')
})


app.get('/sample', function (req, res) {
	fs.readFile("sample.html", function(err, data){
	  res.writeHead(200, {'Content-Type': 'text/html'});
	  res.write(data);
	  res.end();
	});
})


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

