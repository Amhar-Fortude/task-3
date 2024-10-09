import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';

import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectsModule } from './projects/projects.module';


@Module({
  imports: [GraphQLModule.forRoot<ApolloFederationDriverConfig>({
    driver: ApolloFederationDriver,
    autoSchemaFile: { path: "src/projects-schema.gql", federation: 2 },
    
  }) , TypeOrmModule.forRoot({
    type:'postgres'
    ,host:'localhost'
    ,port:5432
    ,username:'postgres'
    ,password:'Amhar20011016a@'
    ,database:'taskDB'
    ,entities: [join(__dirname, '**', '*.entity.{ts,js}')],
    synchronize: true
  }), ProjectsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
