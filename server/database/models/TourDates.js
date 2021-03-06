const mongoose = require('mongoose');
const db = require('../index.js');
mongoose.Promise = global.Promise;


const tourDateSchema = new mongoose.Schema({
  artist: String,
  date: String,
  location: String,
  venue: String,
  picture: String,
}
);

const TourDates = mongoose.model('TourDates', tourDateSchema);
module.exports = TourDates;