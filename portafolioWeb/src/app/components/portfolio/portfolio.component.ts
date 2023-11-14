import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  providers: [ProjectService]
})
export class PortfolioComponent implements OnInit {
  @Input() showAllProjects: boolean = true;
  public title: string = "Proyectos";
  public description: string = "A continuación algunos de mis proyectos realizados a lo largo de mi formación académica.";
  public projects: Array<Project> | undefined;
  public displayedProjects: Array<Project> | undefined;

  constructor(
    private _projectService: ProjectService
  ) { }

  ngOnInit(): void {
    this.projects = this._projectService.getProjects();

    if (this.showAllProjects === true) {
      this.projects = this.projects;
    } else {
      this.projects = this.projects?.slice(0, 3);
    }
  }




  redireccionar(url: string) {
    window.open(url, '_blank');
  }
}
