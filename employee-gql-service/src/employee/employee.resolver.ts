import { Resolver ,  Query, Mutation, Args, ResolveField, Parent  } from '@nestjs/graphql';
import { Employee } from './entities/employee.entity';
import { EmployeeService } from './employee.service';
import { EmployeeCreateDTO } from './dto/create-employee.input';
import { Project } from './entities/project.entity';

@Resolver( ()=>Employee )
export class EmployeeResolver {


    constructor(private employeeService?:EmployeeService){}

    @Query(()=>[Employee], {name:"getAllEmployees"})
    findAll(){  
        return this.employeeService.findAll();
    }

    @Mutation(()=>Employee, {name:"createEmployee"})
    create(@Args('employee') employee: EmployeeCreateDTO){
        return this.employeeService.create(employee);
    }

    @ResolveField((of) => Project)
    project (@Parent() employee: Employee){
      return {__typename: "Project" , id:employee.projectId }
    }
}
