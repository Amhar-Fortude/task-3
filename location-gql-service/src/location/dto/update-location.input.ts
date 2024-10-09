import { CreateLocationInput } from './create-location.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateLocationInput extends PartialType(CreateLocationInput) {
  @Field()
  id: string;
  @Field()
  name: string;
  @Field(()=> Int)
  code: number;
}
