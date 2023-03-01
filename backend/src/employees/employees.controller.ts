import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { EmployeesService } from './employees.service';
 
import { Employee } from './employee.model';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Post()
 async create(@Body() createEmployeeDto: Employee) {
     const generatedId = await this.employeesService.create(createEmployeeDto);
    return { id: generatedId };

  }

  @Get()
 async findAll() {
    return this.employeesService.findAll();
  }

  @Get(':id')
 async findOne(@Param('id') id: string) {
    return this.employeesService.findOne(id);
  }

  @Put(':id')
async  update(@Param('id') id: string, @Body() updateEmployeeDto: Employee) {
    return this.employeesService.update(id, updateEmployeeDto);
  }

  @Delete(':id')
 async remove(@Param('id') id: string) {
    return this.employeesService.remove(id);
  }
}
