/*
 * Module dependencies
 */
var express = require('express'),
    nib = require('nib');

var app = express();

function compile(str, path) {
  return str
    .set('filename', path)
    .use(nib());
}

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.logger('dev'));

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.render('index', { title : 'Home' });
});

app.get('/about', function (req, res) {
  res.render('about', { title : 'About' });
});

app.listen(process.env.PORT || 5000);
