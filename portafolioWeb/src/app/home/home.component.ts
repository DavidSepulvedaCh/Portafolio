import { Component } from '@angular/core';
import { Project } from '../models/project';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ProjectService]
})

export class HomeComponent {
  public displayedProjects: Array<Project>;
  public titulo: string = "Proyectos";
  public descripcion: string = "A continuación algunos de mis proyectos realizados a lo largo de mi formación academica"
  constructor(
    private _ProjectService: ProjectService
  ) {
    this.displayedProjects = _ProjectService.getProjects().slice(0, 3);
    console.log(this.displayedProjects);
  }

  redireccionar(url: string) {
    console.log(url); // Verificar el enlace en la consola
    window.open(url, '_blank');
  }

}
