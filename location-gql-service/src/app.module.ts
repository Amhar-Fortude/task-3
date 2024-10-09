import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { join } from 'path';
import { ApolloDriver , ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocationModule } from './location/location.module';



@Module({
  imports: [LocationModule ,GraphQLModule.forRoot<ApolloDriverConfig>({
  driver: ApolloDriver,
  autoSchemaFile: join(process.cwd(), 'src/graphql-schema.gql'),
  }) , TypeOrmModule.forRoot({
    type:'postgres'
    ,host:'localhost'
    ,port:5432
    ,username:'postgres'
    ,password:'Amhar20011016a@'
    ,database:'taskDB2'
    ,entities: [join(__dirname, '**', '*.entity.{ts,js}')],
    synchronize: true
  })],
  controllers: [],
  providers: [],
})
export class AppModule {}
