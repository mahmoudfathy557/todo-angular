import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { IDataServices } from '../../../core';
import { DATA_BASE_CONFIGURATION } from '../../../configuration';
import {
  Department,
  DepartmentSchema,
  // Book,
  // BookSchema,
  // Genre,
  // GenreSchema,
} from './model';
import { MongoDataServices } from './mongo-data-services.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule,
    MongooseModule.forFeature([
      { name: Department.name, schema: DepartmentSchema },
      // { name: Book.name, schema: BookSchema },
      // { name: Genre.name, schema: GenreSchema },
    ]),

    MongooseModule.forRoot('mongodb://localhost:27017/se'),
    // MongooseModule.forRoot(DATA_BASE_CONFIGURATION.mongoConnectionString),
  ],
  providers: [
    {
      provide: IDataServices,
      useClass: MongoDataServices,
    },
  ],
  exports: [IDataServices],
})
export class MongoDataServicesModule {}
