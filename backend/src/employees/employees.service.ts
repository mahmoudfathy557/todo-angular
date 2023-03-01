import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Employee } from './employee.model';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectModel('Employee')
    private readonly employeeModel: Model<Employee>,
  ) {}

  async create(createEmployeeDto: Employee) {
    const newEmp = await this.employeeModel.create(createEmployeeDto);
    return newEmp.id as string;
  }

  async findAll() {
    try {
      return await this.employeeModel.find({});
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  async findOne(id: string) {
    return `This action returns a #${id} employee`;
  }

  async update(id: string, updateEmployeeDto: Employee) {
    try {
      await this.employeeModel.findByIdAndUpdate(id, updateEmployeeDto);
    } catch (error) {
      throw new NotFoundException('Could not find employee.');
    }
  }

  async remove(id: string) {
    try {
      await this.employeeModel.findByIdAndDelete(id);
    } catch (error) {
      throw new NotFoundException('Could not find employee.');
    }
  }
}
