import { Injectable } from '@nestjs/common';
import { Department } from '../../core/entities';
import { CreateDepartmentDto, UpdateDepartmentDto } from '../../core/dtos';
import { DepartmentGraphqlModel } from 'src/frameworks/data-services/mongo/model';

@Injectable()
export class DepartmentFactoryService {
  createNewDepartment(createDepartmentDto: CreateDepartmentDto) {
    const newDepartment = new DepartmentGraphqlModel();
    newDepartment.name = createDepartmentDto.name;
    newDepartment.manager = createDepartmentDto.manager;
    newDepartment.emps_no = createDepartmentDto.emps_no;

    return newDepartment;
  }

  updateDepartment(updateDepartmentDto: UpdateDepartmentDto) {
    const newDepartment = new DepartmentGraphqlModel();
    newDepartment.name = updateDepartmentDto.name;
    newDepartment.manager = updateDepartmentDto.manager;
    newDepartment.emps_no = updateDepartmentDto.emps_no;

    return newDepartment;
  }
}
