import { Injectable } from '@nestjs/common';
import { CreateProjectInput } from './dto/create-project.input';
import { UpdateProjectInput } from './dto/update-project.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProjectsService {


  constructor(@InjectRepository(Project) private projectRepository:Repository<Project>) {}

  async create(project: CreateProjectInput): Promise<Project> {
    let proj = this.projectRepository.create(project);
    return this.projectRepository.save(proj);

  }

  async findAll(): Promise<Project[]> {
    return this.projectRepository.find(
      {relations: ['Employees']}
    );
  }

  async findOne(id:string): Promise<Project> {
    return this.projectRepository.findOne({ where: { id }});
  }

  async update(id: string, Project: UpdateProjectInput): Promise<Project> {
    await this.projectRepository.update(id, Project);
    return this.projectRepository.findOne({ where: { id }, relations: ['Employees'] });
  }

  async remove(id: string): Promise<Project> {
    const project = await this.projectRepository.findOne({ where: { id } });
    if (!project) return null;
    return this.projectRepository.remove(project);
  }
}
