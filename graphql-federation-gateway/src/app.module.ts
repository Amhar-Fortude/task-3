import { IntrospectAndCompose } from '@apollo/gateway';
import { ApolloGatewayDriver, ApolloGatewayDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloGatewayDriverConfig>({
      driver: ApolloGatewayDriver,
      
      gateway: {
        supergraphSdl: new IntrospectAndCompose({
          subgraphs: [
            { name: "employees", url: "http://localhost:3001/graphql" },
            { name: "projects", url: "http://localhost:3000/graphql" },
          ],
        }),
      },
    }),
  ],
})
export class AppModule {}