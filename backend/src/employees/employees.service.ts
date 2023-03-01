import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Employee } from './employee.model';
import { NewEmployeeInput } from './dto/create-employee.dto';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectModel('Employee')
    private readonly employeeModel: Model<Employee>,
  ) {}

  async create(data: NewEmployeeInput): Promise<Employee> {
    return await this.employeeModel.create(data);
  }

  async findOneById(id: string): Promise<Employee> {
    return await this.employeeModel.findById(id);
  }

  async findAll(): Promise<Employee[]> {
    return await this.employeeModel.find();
  }

  async remove(id: string): Promise<Employee> {
    return await this.employeeModel.findByIdAndDelete(id);
  }
  async update(id: string, updatedEmployeeData): Promise<Employee> {
    return await this.employeeModel.findByIdAndUpdate(
      id,
      updatedEmployeeData,
    );
  }
}
