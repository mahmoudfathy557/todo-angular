import mongoose from 'mongoose'
 

const DepartmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide name'],
  },
  manager: {
    type: String,
    required: [true, 'Please provide manager'],
  },
 
  emps_no: {
    type: Number,
    required: [true, 'Please provide password'],
    
  },
})

 
 

export default mongoose.model('Department', DepartmentSchema)
