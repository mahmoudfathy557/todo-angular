const express = require('express')
const router = express.Router()

 
const { getAllDepartments, addDepartment, deleteDepartment, updateDepartment } = require('../controllers/departments')

router.route('/').get(getAllDepartments).post(addDepartment)
router.route('/:id').delete(deleteDepartment).put(updateDepartment)
 
module.exports = router
