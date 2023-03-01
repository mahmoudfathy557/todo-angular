import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

 import { DepartmentService } from './department.service';
 import { DepartmentController } from './department.controller';
 import { DepartmentSchema } from './department.model';
 
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Department', schema: DepartmentSchema },
    ]),
  ],
  controllers: [DepartmentController],
  providers: [DepartmentService],
})
export class DepartmentModule {}
