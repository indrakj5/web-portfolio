const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const skillSchema = new Schema({
  name: String,
  level: String
});

module.exports = mongoose.model('skill',skillSchema);