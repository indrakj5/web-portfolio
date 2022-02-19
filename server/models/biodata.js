const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const biodataSchema = new Schema({
  nama: String,
  umur: Number,
  email: String,
  phone: Number,
  about: String,
  title : String,
  foto: String
});

module.exports = mongoose.model('biodata',biodataSchema);