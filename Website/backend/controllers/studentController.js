const Student = require('../models/Student');

// Get all students
const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get student by ID
const getStudentById = async (req, res) => {
  try {
    const { studentId } = req.params;
    const student = await Student.findById(studentId);
    
    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }
    
    res.json(student);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Create a new student
const createStudent = async (req, res) => {
  try {
    const { name, age, grade, allergies } = req.body;
    const student = new Student({ name, age, grade, allergies });
    const newStudent = await student.save();
    
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update a student by ID
const updateStudent = async (req, res) => {
  try {
    const { studentId } = req.params;
    const { name, age, grade, allergies } = req.body;
    
    const student = await Student.findOneAndUpdate(studentId, { name, age, grade, allergies });
    
    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }
    
    res.json(student);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete a student by ID
const deleteStudent = async (req, res) => {
  try {
    const { studentId } = req.params;
    
    const student = await Student.findOneAndDelete(studentId);
    
    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }
    
    res.sendStatus(200);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};


module.exports = {
    getAllStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent
};