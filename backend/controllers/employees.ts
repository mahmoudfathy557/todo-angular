import { Request, Response } from 'express'
import Employee from '../models/Employee'

class EmployeeController {
  getAllEmployees = async (req: Request, res: Response) => {
    try {
      const emps = await Employee.find({})

      res.status(200).json(emps)
    } catch (error) {
      console.log(error)
    }
  }

  addEmployee = async (req: Request, res: Response) => {
    const newEmp = req.body
    try {
      const emp = await Employee.create(newEmp)
      res.status(200).json({ status: 'ok', msg: 'new emp is added', emp })
    } catch (error) {
      console.log(error)
    }
  }

  deleteEmployee = async (req: Request, res: Response) => {
    const { id } = req.params

    try {
      const emp = await Employee.findByIdAndRemove(id)
      if (!emp) {
        return res
          .status(404)
          .json({ status: 'bad', msg: `No emp with id ${id}` })
      }

      res.status(200).json({ status: 'ok', msg: 'emp is deleted' })
    } catch (err) {
      console.log(err)
    }
  }

  updateEmployee = async (req: Request, res: Response) => {
    const { id } = req.params
    const updatedEmp = req.body

    try {
      const emp = await Employee.findByIdAndUpdate(id, updatedEmp, {
        new: true,
        runValidators: true,
      })
      if (!emp) {
        return res
          .status(404)
          .json({ status: 'bad', msg: `No emp with id ${id}` })
      }
      res.status(200).json({ status: 'ok', msg: '  emp is updated' })
    } catch (err) {
      console.log(err)
    }
  }
}

export default new EmployeeController()
