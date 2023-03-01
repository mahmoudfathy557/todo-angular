import { LoggerMiddleware } from './middlewares/logger.middleware';
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DepartmentModule } from './departments/department.module';
import { EmployeesModule } from './employees/employees.module';
 

@Module({
  imports: [
    DepartmentModule,
    MongooseModule.forRoot('mongodb://localhost:27017/se'),
    EmployeesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
      consumer
        .apply(LoggerMiddleware)
        .forRoutes({ path: 'departments', method: RequestMethod.GET });
  }
}
