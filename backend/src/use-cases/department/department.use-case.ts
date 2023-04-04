import { Injectable } from '@nestjs/common';
import { Department } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';
import { CreateDepartmentDto, UpdateDepartmentDto } from '../../core/dtos';
import { DepartmentFactoryService } from './department-factory.service';
import { DepartmentGraphqlModel } from 'src/frameworks/data-services/mongo/model';

@Injectable()
export class DepartmentUseCases {
  constructor(
    private dataServices: IDataServices,
    private departmentFactoryService: DepartmentFactoryService,
  ) {}

  getAllDepartments(): Promise<DepartmentGraphqlModel[]> {
    return this.dataServices.departments.getAll();
  }

  getDepartmentById(id: any): Promise<DepartmentGraphqlModel> {
    return this.dataServices.departments.get(id);
  }

  createDepartment(
    createDepartmentDto: CreateDepartmentDto,
  ): Promise<DepartmentGraphqlModel> {
    const department =
      this.departmentFactoryService.createNewDepartment(createDepartmentDto);
    return this.dataServices.departments.create(department);
  }

  remove(id: any): Promise<DepartmentGraphqlModel>{
    return this.dataServices.departments.remove(id);

  }

  updateDepartment(
    departmentId: string,
    updateDepartmentDto: UpdateDepartmentDto,
  ): Promise<DepartmentGraphqlModel> {
    const department =
      this.departmentFactoryService.updateDepartment(updateDepartmentDto);
    return this.dataServices.departments.update(departmentId, department);
  }
}
