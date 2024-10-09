import { Directive, Field, ID, ObjectType } from "@nestjs/graphql";

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Project } from "./project.entity";

@ObjectType()
@Directive('@key(fields: "id")')
@Entity('public.Employee')
export class Employee {

    @Field((type) => ID)
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Field()
    @Column()
    name:string;

    @Field()
    @Column()
    city:string;

    @Field({nullable: true})
    @Column({nullable: true})
    salary:string;

    @Field(()=> Project)
    project: Project;

    @Column()
    @Field()
    projectId: string;

}