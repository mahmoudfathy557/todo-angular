import * as mongoose from 'mongoose';

export const DepartmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  manager: { type: String, required: true },
  emps_no: { type: Number, required: true },
});

export interface Department extends mongoose.Document {
  id?: string;
  name: string;
  manager: string;
  emps_no: number;
}
