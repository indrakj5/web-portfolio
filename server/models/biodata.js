const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const biodataSchema = new Schema({
  nickname: String,
  nama: String,
  tanggal_lahir: Date,
  umur: Number,
  email: String,
  phone: Number,
  about: String,
  title : String,
  foto: String,
  linkedin: String,
  github: String,
  gitlab: String
});

module.exports = mongoose.model('biodata',biodataSchema);