import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { EmployeesService } from './employees.service';
 import { EmployeeSchema } from './employee.model';
import { EmployeeResolver } from './employee.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Employee', schema: EmployeeSchema }]),
  ],
  controllers: [ ],
  providers: [EmployeesService, EmployeeResolver],
})
export class EmployeesModule {}
