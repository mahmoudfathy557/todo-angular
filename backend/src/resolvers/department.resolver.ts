 import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
  
 
import { DepartmentGraphqlModel } from 'src/frameworks/data-services/mongo/model';
import { DepartmentUseCases } from 'src/use-cases/department/department.use-case';
import { CreateDepartmentDto, UpdateDepartmentDto } from 'src/core/dtos';

 
@Resolver((of) => DepartmentGraphqlModel)
export class DepartmentResolver {
  constructor(private departmentUseCases: DepartmentUseCases) {}

  @Query((returns) => DepartmentGraphqlModel)
  async department(@Args('id') id: string): Promise<DepartmentGraphqlModel> {
    const department = await this.departmentUseCases.getDepartmentById(id);
    if (!department) {
      throw new NotFoundException(id);
    }
    return department;
  }

  @Query((returns) => [DepartmentGraphqlModel])
  async departments(): Promise<DepartmentGraphqlModel[]> {
    const departments = await this.departmentUseCases.getAllDepartments();
    if (!departments) {
      throw new NotFoundException();
    }
    return departments;
  }

  @Mutation((returns) => DepartmentGraphqlModel)
  async addDepartment(
    @Args('newDepartmentData') createDepartmentDto: CreateDepartmentDto,
  ): Promise<DepartmentGraphqlModel> {
    const department = await this.departmentUseCases.createDepartment(
      createDepartmentDto,
    );
    return department;
  }

  @Mutation((returns) => DepartmentGraphqlModel)
  async removeDepartment(@Args('id') id: string) {
    return this.departmentUseCases.remove(id);
  }

  @Mutation((returns) => DepartmentGraphqlModel)
  async updateDepartment(
    @Args('id') departmentId: string,
    @Args('updatedDepartmentData') updateDepartmentDto: UpdateDepartmentDto,
  ) {
    return this.departmentUseCases.updateDepartment(
      departmentId,
      updateDepartmentDto,
    );
  }
}
