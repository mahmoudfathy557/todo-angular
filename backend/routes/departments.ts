import express from 'express'
import DepartmentController from '../controllers/departments'
const router = express.Router()
 
  
 
router.route('/').get(DepartmentController.getAllDepartments).post(DepartmentController.addDepartment)
router.route('/:id').delete(DepartmentController.deleteDepartment).put(DepartmentController.updateDepartment)

export default router
