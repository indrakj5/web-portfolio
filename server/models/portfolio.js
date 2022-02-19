const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const portfolioSchema = new Schema({
  name: String,
  description: String,
  github: String,
  thumbnail: String
});

module.exports = mongoose.model('portfolio',portfolioSchema);