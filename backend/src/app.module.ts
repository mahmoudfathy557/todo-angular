import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController, DepartmentController } from './controllers';

import { DataServicesModule } from './services/data-services/data-services.module';
import { DepartmentUseCasesModule } from './use-cases/department/department-use-cases.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { DepartmentResolver } from './resolvers/department.resolver';
@Module({
  imports: [
    DataServicesModule,
    DepartmentUseCasesModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      autoSchemaFile: true,
      sortSchema: true,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
  ],
  controllers: [AppController, 
    
    DepartmentController
  
  ],
  providers: [DepartmentResolver],
})
export class AppModule {}
