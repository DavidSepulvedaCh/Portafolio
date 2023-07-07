import { Injectable } from "@angular/core";
import { Project } from "../models/project";

@Injectable()
export class ProjectService {
    public projects: Array<Project>;
    constructor() {
        this.projects = [
            new Project('InteNews', 'Colaboración en el diseño y desarrollo FrontEnd para un portal web encargado de realizar WebScraping, donde se realiza recolección de noticias naciona les (Colombia).', '', 'https://soshace.com/wp-content/uploads/2019/09/responsible-web-scraping-gathering-data-ethically-facebook-cover-image.jpg', ['HTML5', 'CSS3', 'js', 'Sass']),
            new Project('Luxua', 'Desarrollo en conjunto de un sistema CRM/ERP, con características de manejo de inventario, privilegios para distintos roles de usuarios, sistema de facturación.', '', 'https://www.keyandcloud.com/wp-content/uploads/2021/01/crm-26.jpg', ['HTML5', 'CSS3-alt', 'php']),
            new Project('FoodHub', 'Desarrollo frontend de aplicación móvil utilizando Flutter y Dart, enfocado en interfaces intuitivas y funcionales y colaborando estrechamente con el equipo de desarrollo para una experiencia de usuario fluida y atractiva.', '', 'https://pbs.twimg.com/media/FT3OcVvWIAEEQzU.jpg:large', ['HTML5', 'CSS3-alt', 'js'])
        ]
    }

    getProjects(): Array<Project> {
        return this.projects;
    }
}