var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use('/', express.static(path.join(__dirname, './')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/data-cart.json', function(req, res) {
  fs.readFile('data-cart.json', function(err, data) {
    res.setHeader('Content-Type', 'application/json');
    res.send(data);
  });
});

app.post('/data-cart.json', function(req, res) {
  fs.readFile('data-cart.json', function(err, data) {
    var comments = JSON.parse(data);
    //comments.push(req.body);
    fs.writeFile('data-cart.json', JSON.stringify(comments, null, 4), function(err) {
      res.setHeader('Content-Type', 'application/json');
      res.setHeader('Cache-Control', 'no-cache');
      res.send(JSON.stringify(comments));
    });
  });
});

app.post('/data-topcart.json', function(req, res) {
  fs.readFile('data-topcart.json', function(err, data) {
    var comments = JSON.parse(data);
    //comments.push(req.body);
    fs.writeFile('data-topcart.json', JSON.stringify(comments, null, 4), function(err) {
      res.setHeader('Content-Type', 'application/json');
      res.setHeader('Cache-Control', 'no-cache');
      res.send(JSON.stringify(comments));
    });
  });
});

app.post('/data-updateCheckout.json', function(req, res) {
  fs.readFile('data-updateCheckout.json', function(err, data) {
    var comments = JSON.parse(data);
    //comments.push(req.body);
    fs.writeFile('data-updateCheckout.json', JSON.stringify(comments, null, 4), function(err) {
      res.setHeader('Content-Type', 'application/json');
      res.setHeader('Cache-Control', 'no-cache');
      res.send(JSON.stringify(comments));
    });
  });
});

app.post('/data-saveCheckout.json', function(req, res) {
  fs.readFile('data-saveCheckout.json', function(err, data) {
    var comments = JSON.parse(data);
    //comments.push(req.body);
    fs.writeFile('data-saveCheckout.json', JSON.stringify(comments, null, 4), function(err) {
      res.setHeader('Content-Type', 'application/json');
      res.setHeader('Cache-Control', 'no-cache');
      res.send(JSON.stringify(comments));
    });
  });
});

app.listen(9000);

console.log('Server started: http://localhost:9000/');