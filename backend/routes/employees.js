const express = require('express')
const { getAllEmps, addEmp, deleteEmp, updateEmp } = require('../controllers/employees')
const router = express.Router()

 

router.route('/').get(getAllEmps).post(addEmp)
router.route('/:id').delete(deleteEmp).put(updateEmp)

module.exports = router
