import { Module } from '@nestjs/common';
import { DataServicesModule } from '../../services/data-services/data-services.module';
import { DepartmentFactoryService } from './department-factory.service';
import { DepartmentUseCases } from './department.use-case';

@Module({
  imports: [DataServicesModule],
  providers: [DepartmentFactoryService, DepartmentUseCases],
  exports: [DepartmentFactoryService, DepartmentUseCases],
})
export class DepartmentUseCasesModule {}
