import { Controller, Get, Param, Post, Body, Put } from '@nestjs/common';
import { CreateDepartmentDto, UpdateDepartmentDto } from '../core/dtos';
import { DepartmentUseCases } from '../use-cases/department/department.use-case';

@Controller('api/department')
export class DepartmentController {
  constructor(private departmentUseCases: DepartmentUseCases) {}

  @Get()
  async getAll() {
    return this.departmentUseCases.getAllDepartments();
  }

  @Get(':id')
  async getById(@Param('id') id: any) {
    return this.departmentUseCases.getDepartmentById(id);
  }

  @Post()
  createDepartment(@Body() departmentDto: CreateDepartmentDto) {
    return this.departmentUseCases.createDepartment(departmentDto);
  }

  @Put(':id')
  updateDepartment(
    @Param('id') departmentId: string,
    @Body() updateDepartmentDto: UpdateDepartmentDto,
  ) {
    return this.departmentUseCases.updateDepartment(departmentId, updateDepartmentDto);
  }
}
