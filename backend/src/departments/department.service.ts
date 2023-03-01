import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Department } from './department.model';
import { NewDepartmentInput } from './dto/new-department.input';

@Injectable()
export class DepartmentService {
  constructor(
    @InjectModel('Department')
    private readonly departmentModel: Model<Department>,
  ) {}

  async create(data: NewDepartmentInput): Promise<Department> {
    return await this.departmentModel.create(data);
  }

  async findOneById(id: string): Promise<Department> {
    return await this.departmentModel.findById(id);
  }

  async findAll(): Promise<Department[]> {
    return await this.departmentModel.find();
  }

  async remove(id: string): Promise<Department> {
    return await this.departmentModel.findByIdAndDelete(id);
  }
  async update(id: string, updatedDepartmentData): Promise<Department> {
    return await this.departmentModel.findByIdAndUpdate(
      id,
      updatedDepartmentData,
    );
  }


}
