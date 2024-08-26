const express = require('express');
const Student = require('../models/Student');
const crypto = require('crypto');

const router = express.Router();


// Create a new student
router.post('/CreateStudents', async (req, res) => {
  try {
    const hash = crypto.createHash('sha256').update(req.body.enrollment_code).digest('hex');

    const studentData = {
      ...req.body,
      enrollment_code_hash: hash,
    };

    const student = new Student(studentData);
    await student.save();
    res.status(201).send(student);
  } catch (error) {
    res.status(400).send({ message: 'Error creating student', error });
  }
});


// Search student by enrollment_code
router.get('/students/:enrollment_code', async (req, res) => {
  try {
    const student = await Student.findOne({ enrollment_code_hash: req.params.enrollment_code });
    if (!student) {
      return res.status(404).send({ message: 'Student not found' });
    }
    res.send(student);
  } catch (error) {
    res.status(500).send({ message: 'Error retrieving student', error });
  }
});

// Get all students
router.get('/students', async (req, res) => {
  try {
    const students = await Student.find({});
    res.send(students);
  } catch (error) {
    res.status(500).send({ message: 'Error retrieving students', error });
  }
});

module.exports = router;
