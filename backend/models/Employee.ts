import mongoose from 'mongoose'

const EmployeeSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'firstName must be provided'],
  },
  lastName: {
    type: String,
    required: [true, 'lastName must be provided'],
  },
  email: {
    type: String,
    required: [true, 'Please provide e-mail'],
    unique: true,
  },
  age: {
    type: Number,
    required: [true, 'age must be provided'],
  },
  hiredAt: {
    type: String,
    required: [true, 'hiredAt must be provided'],
  },
})

export default mongoose.model('Employee', EmployeeSchema);
