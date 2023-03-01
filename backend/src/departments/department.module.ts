import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

 import { DepartmentService } from './department.service';
  import { DepartmentSchema } from './department.model';
import { DepartmentResolver } from './department.resolver';
 
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Department', schema: DepartmentSchema },
    ]),
  ],
  controllers: [],
  providers: [DepartmentService, DepartmentResolver],
})
export class DepartmentModule {}
