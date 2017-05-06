var mongoose = require('mongoose');

var BeerSchema = new mongoose.Schema({
    name: String,
    type: String,
    quantity: Number,
    userId: String
});

// export the Mongoose model
module.exports = mongoose.model('Beer', BeerSchema);