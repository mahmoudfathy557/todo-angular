import { Request,Response } from 'express'
 import path = require('node:path')
 
import manipulateData from '../helpers/manipulate-data'
import { DB, Department } from '../interfaces/Interfaces'

const dbPath = path.join(__dirname, '../db') + '/db.json'

class DepartmentController {

   getAllDepartments = async (req:Request, res:Response) => {
    try {
      const deps = await manipulateData.readSpecificDbData<string,Department>(dbPath, 'departments')
  
      res.status(200).json(deps)
    } catch (error) {
      console.log(error)
    }
  }
  
   addDepartment = async (req:Request, res:Response) => {
    const newDep = req.body
    try {
      const db = await manipulateData.readAllDbData<DB>(dbPath)
      const deps = await manipulateData.readSpecificDbData<string,Department>(dbPath, 'departments')
  
      deps.push(newDep)
  
      await manipulateData.writeDbData(dbPath, { ...db, departments: deps })
  
      res.status(200).json({ status: 'ok', msg: 'new dep is added' })
    } catch (error) {
      console.log(error)
    }
  }
  
   deleteDepartment = async (req:Request, res:Response) => {
    const { id } = req.params
  
    try {
      const db = await manipulateData.readAllDbData<DB>(dbPath)
       const deps = await manipulateData.readSpecificDbData<string,Department>(dbPath, 'departments')
  
      let newDeps = deps.filter((dep) => Number(dep.id) !== Number(id))
      await manipulateData.writeDbData(dbPath, { ...db, departments: newDeps })
  
      res.status(200).json({ status: 'ok', msg: 'new dep is added' })
    } catch (err) {
      console.log(err)
    }
  }
  
   updateDepartment = async (req:Request, res:Response) => {
    const { id } = req.params
    const updatedDep = req.body
  
    try {
      const db = await manipulateData.readAllDbData<DB>(dbPath)
      let deps = await manipulateData.readSpecificDbData<string,Department>(dbPath, 'departments')
  
      let prevDep = deps.findIndex((obj) => Number(obj.id) === Number(id))
      deps[prevDep] = updatedDep
      await manipulateData.writeDbData(dbPath, { ...db, departments: deps })
  
      res.status(200).json({ status: 'ok', msg: '  dep is updated' })
    } catch (err) {
      console.log(err)
    }
  }
}

 

export default new DepartmentController()