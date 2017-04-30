var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var beerController = require('./controllers/beer');

// connect to the beerlocker MongoDB
mongoose.connect('mongodb://localhost:27017/beerlocker');

var app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));

var port = process.env.PORT || 3000;

var router = express.Router();

router.route('/beers')
    .post(beerController.postBeers)
    .get(beerController.getBeers);

router.route('/beers/:beer_id')
    .get(beerController.getBeer)
    .put(beerController.putBeer)
    .delete(beerController.deleteBeer);

app.use('/api', router);

app.listen(port);
console.log('Insert beer on port ' + port);