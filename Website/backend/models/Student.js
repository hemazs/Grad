const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  grade: {
    type: String,
    required: true,
  },
  allergies: {
    type: [String]
  },
}, { timestamps: true });


module.exports = mongoose.model('Student', studentSchema);
