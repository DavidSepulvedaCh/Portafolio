import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [ProjectService],
})
export class ProjectsComponent implements OnInit {
  public titulo: string = "Proyectos";
  public descripcion: string = "A continuación algunos de mis proyectos realizados a lo largo de mi formación academica";
  public projects: Array<Project> | undefined;
  constructor(
    private _projectService: ProjectService
  ) { }



  ngOnInit(): void {
    this.projects = this._projectService.getProjects();
  }

}
