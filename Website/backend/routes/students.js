const express = require('express');
const{
    createStudent,
    getAllStudents,
    getStudentById,
    updateStudent,
    deleteStudent
}
= require('../controllers/studentController');


const router = express.Router();

// GET all Students
router.get('/', getAllStudents);

// GET a Student by id
router.get('/:id', getStudentById);

// POST a Student
router.post('/', createStudent);

// PATCH a Student
router.patch('/:id', updateStudent);

// DELETE a Student
router.delete('/:id', deleteStudent);


module.exports = router;