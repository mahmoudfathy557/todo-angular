import { EmployeesService } from './employees.service';
 import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
  
 
  
 import { Employee } from './employee.model';
import { NewEmployeeInput } from './dto/create-employee.dto';
 

 
@Resolver((of) => Employee)
export class EmployeeResolver {
  constructor(private readonly employeesService: EmployeesService) {}

  @Query((returns) => Employee)
  async employee(@Args('id') id: string): Promise<Employee> {
    const employee = await this.employeesService.findOneById(id);
    if (!employee) {
      throw new NotFoundException(id);
    }
    return employee;
  }

  @Query((returns) => [Employee])
  async employees(): Promise<Employee[]> {
    const employees = await this.employeesService.findAll();
    if (!employees) {
      throw new NotFoundException();
    }
    return employees;
  }

  @Mutation((returns) => Employee)
  async addEmployee(
    @Args('newEmployeeData') newEmployeeData: NewEmployeeInput,
  ): Promise<Employee> {
    const employee = await this.employeesService.create(newEmployeeData);
    return employee;
  }

  @Mutation((returns) => Employee)
  async removeEmployee(@Args('id') id: string) {
    return this.employeesService.remove(id);
  }

  @Mutation((returns) => Employee)
  async updateEmployee(
    @Args('id') id: string,
    @Args('updatedEmployeeData') updatedEmployeeData: NewEmployeeInput,
  ) {
    return this.employeesService.update(id, updatedEmployeeData);
  }
}
