import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Department } from './department.model';

@Injectable()
export class DepartmentService {
  constructor(
    @InjectModel('Department')
    private readonly departmentModel: Model<Department>,
  ) {}

  async insertDepartment(depDTO: Department) {
    const newDepartment = await this.departmentModel.create(depDTO);
    return newDepartment.id as string;
  }

  async getDepartments() {
    const departments = await this.departmentModel.find().exec();
    return departments.map((dep) => ({
      id: dep.id,
      name: dep.name,
      manager: dep.manager,
      emps_no: dep.emps_no,
    }));
  }

  async getSingleDepartment(departmentId: string) {
    const department = await this.findDepartment(departmentId);
    return {
      id: department.id,
      name: department.name,
      manager: department.manager,
      emps_no: department.emps_no,
    };
  }

  async updateDepartment(departmentId: string, depDTO) {
    const updatedDepartment = await this.findDepartment(departmentId);
    if (updatedDepartment) {
      await this.departmentModel.findByIdAndUpdate(departmentId, depDTO);
    }
  }

  async deleteDepartment(depId: string) {
    const deletedDepartment = await this.findDepartment(depId);
    if (deletedDepartment) {
      await this.departmentModel.findByIdAndDelete(depId);
    }
  }

  private async findDepartment(id: string): Promise<Department> {
    let department;
    try {
      department = await this.departmentModel.findById(id).exec();
    } catch (error) {
      throw new NotFoundException('Could not find department.');
    }
    if (!department) {
      throw new NotFoundException('Could not find department.');
    }
    return department;
  }
}
