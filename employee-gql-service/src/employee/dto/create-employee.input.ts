import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class EmployeeCreateDTO{
    
    @Field()
    name:string;
    @Field()
    city:string;
    @Field({nullable: true})
    salary:string;
    @Field()
    projectId: string;
}