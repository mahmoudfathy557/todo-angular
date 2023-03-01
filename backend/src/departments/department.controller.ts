import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
  Put,
} from '@nestjs/common';
import { DepartmentService } from './department.service';
import { Department } from './department.model';

 

@Controller('departments')
export class DepartmentController {
  constructor(private readonly departmentService: DepartmentService) {}

  @Post()
  async addDepartment(@Body() depDTO: Department) {
    const generatedId = await this.departmentService.insertDepartment(depDTO);
    return { id: generatedId };
  }

  @Get()
  async getAllDepartments() {
    const Departments = await this.departmentService.getDepartments();
    return Departments;
  }

  @Get(':id')
  getDepartment(@Param('id') depId: string) {
    return this.departmentService.getSingleDepartment(depId);
  }

  @Put(':id')
  async updateDepartment(
    @Param('id') depId: string,
    @Body() depDTO: Department,
  ) {
    await this.departmentService.updateDepartment(depId, depDTO);
    return null;
  }

  @Delete(':id')
  async removeDepartment(@Param('id') depId: string) {
    await this.departmentService.deleteDepartment(depId);
    return null;
  }
}
