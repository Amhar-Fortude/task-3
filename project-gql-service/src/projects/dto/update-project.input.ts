import { CreateProjectInput } from './create-project.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateProjectInput extends PartialType(CreateProjectInput) {
  @Field()
  id: string;
  @Field()
  name: string;
  @Field(()=> Int)
  code: number;
}