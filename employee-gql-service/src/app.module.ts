import { Module } from '@nestjs/common';
import { EmployeeModule } from './employee/employee.module';
import { GraphQLModule } from '@nestjs/graphql';
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { join } from 'path';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './employee/entities/project.entity';


@Module({
  imports: [GraphQLModule.forRoot<ApolloFederationDriverConfig>({
    driver: ApolloFederationDriver,
    autoSchemaFile: { path: "src/schema.gql", federation: 2 },
  buildSchemaOptions: {
    orphanedTypes: [Project],
  },
  }) , TypeOrmModule.forRoot({
    type:'postgres'
    ,host:'localhost'
    ,port:5432
    ,username:'postgres'
    ,password:'Amhar20011016a@'
    ,database:'taskDB1'
    ,entities: [join(__dirname, '**', '*.entity.{ts,js}')],
    synchronize: true
  }) ,EmployeeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
