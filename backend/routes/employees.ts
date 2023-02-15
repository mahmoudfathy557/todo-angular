import express from 'express'
 const router = express.Router()
import EmployeeController from '../controllers/employees'


router.route('/').get(EmployeeController.getAllEmployees).post(EmployeeController.addEmployee)
router.route('/:id').delete(EmployeeController.deleteEmployee).put(EmployeeController.updateEmployee)

export default router
