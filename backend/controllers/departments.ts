import { Request,Response } from 'express'
  
  import Department from '../models/Department'
 
 

class DepartmentController {

   getAllDepartments = async (req:Request, res:Response) => {
    try {
      const deps = await Department.find({})
  
      res.status(200).json(deps)
    } catch (error) {
      console.log(error)
    }
  }
  
   addDepartment = async (req:Request, res:Response) => {
    const newDep = req.body
    try {
       
      const dep = await Department.create(newDep)
      res.status(200).json({ status: 'ok', msg: 'new dep is added',dep })
    } catch (error) {
      console.log(error)
    }
  }
  
   deleteDepartment = async (req:Request, res:Response) => {
    const { id } = req.params
    
    
    try {
      const dep = await Department.findByIdAndRemove(id)
      if(!dep){
     return   res.status(404).json({ status: 'bad', msg: `No job with id ${id}` })

      }

      res.status(200).json({ status: 'ok', msg: 'dep is deleted' })
    } catch (err) {
      console.log(err)
    }
  }
  
   updateDepartment = async (req:Request, res:Response) => {
    const { id } = req.params
    const updatedDep = req.body
  
    try {
   
      const dep = await Department.findByIdAndUpdate(id, updatedDep, { new: true, runValidators: true })
      if (!dep) {
        return res.status(404).json({ status: 'bad', msg: `No job with id ${id}` })

      }
      res.status(200).json({ status: 'ok', msg: '  dep is updated' })
    } catch (err) {
      console.log(err)
    }
  }
}

 

export default new DepartmentController()