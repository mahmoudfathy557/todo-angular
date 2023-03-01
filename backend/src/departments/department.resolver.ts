 import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
  
 import { Department } from './department.model';
import { DepartmentService } from './department.service';
import { NewDepartmentInput } from './dto/new-department.input';

 
@Resolver((of) => Department)
export class DepartmentResolver {
  constructor(private readonly departmentService: DepartmentService) {}

  @Query((returns) => Department)
  async department(@Args('id') id: string): Promise<Department> {
    const department = await this.departmentService.findOneById(id);
    if (!department) {
      throw new NotFoundException(id);
    }
    return department;
  }

  @Query((returns) => [Department])
  async departments(): Promise<Department[]> {
    const departments = await this.departmentService.findAll();
    if (!departments) {
      throw new NotFoundException();
    }
    return departments;
  }

  @Mutation((returns) => Department)
  async addDepartment(
    @Args('newDepartmentData') newDepartmentData: NewDepartmentInput,
  ): Promise<Department> {
    const department = await this.departmentService.create(newDepartmentData);
    return department;
  }

  @Mutation((returns) => Department)
  async removeDepartment(@Args('id') id: string) {
    return this.departmentService.remove(id);
  }

  @Mutation((returns) => Department)
  async updateDepartment(
    @Args('id') id: string,
    @Args('updatedDepartmentData')updatedDepartmentData: NewDepartmentInput,
  ) {
    return this.departmentService.update(id, updatedDepartmentData);
  }
}
