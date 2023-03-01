import * as mongoose from 'mongoose';

export const EmployeeSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  hiredAt: { type: String, required: true },
  age: { type: Number, required: true },
});

export interface Employee extends mongoose.Document {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  hiredAt: string;
}
