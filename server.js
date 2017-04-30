var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Beer = require('./models/beer');

// connect to the beerlocker MongoDB
mongoose.connect('mongodb://localhost:27017/beerlocker');

var app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));

var port = process.env.PORT || 3000;

var router = express.Router();

router.get('/', function(req, res) {
    res.json({message: 'You are running dangerously low on beer!'})
});

app.use('/api', router);

app.listen(port);
console.log('Insert beer on port ' + port);