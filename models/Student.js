const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  enrollment_code: {
    type: String,
    required: true,
    unique: true
  },
  student_name: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  class: {
    type: String,
    required: true
  },
  section: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  father_name: {
    type: String,
    required: true
  },
  father_mobile_no: {
    type: String,
    required: true
  },
  enrollment_code_hash: {
    type: String,
    required: true,
    unique: true
  }
});

module.exports = mongoose.model('Student', studentSchema, 'Students');
