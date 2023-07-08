import { Injectable } from "@angular/core";
import { Project } from "../models/project";

@Injectable()
export class ProjectService {
    public projects: Array<Project>;
    constructor() {
        this.projects = [
            new Project('InteNews', 'Colaboración en el diseño y desarrollo FrontEnd para un portal web encargado de realizar WebScraping, donde se realiza recolección de noticias naciona les (Colombia).', '', 'https://soshace.com/wp-content/uploads/2019/09/responsible-web-scraping-gathering-data-ethically-facebook-cover-image.jpg', ['HTML5', 'CSS3', 'js', 'Sass']),
            new Project('Luxua', 'Desarrollo en conjunto de un sistema CRM/ERP, con características de manejo de inventario, privilegios para distintos roles de usuarios, sistema de facturación.', '', 'https://www.keyandcloud.com/wp-content/uploads/2021/01/crm-26.jpg', ['HTML5', 'CSS3-alt', 'php']),
            new Project('FoodHub', 'Desarrollo frontend de aplicación móvil utilizando Flutter y Dart, enfocado en interfaces intuitivas y funcionales y colaborando estrechamente con el equipo de desarrollo para una experiencia de usuario fluida y atractiva.', '', 'https://pbs.twimg.com/media/FT3OcVvWIAEEQzU.jpg:large', ['HTML5', 'CSS3-alt', 'js']),
            new Project('ChavezMeat', 'Software de escritorio para llevar el control de inventario y finanzas de una carniceria.', '', 'https://elinsignia.com/wp-content/uploads/2017/11/carniceria.jpg', ['Java']),
            new Project('Notificacióne Firebase', 'Aplicación movil que consiste en enviar mensajes mediante notificaciones utilizando firebase. En el lenguaje flutter, con el backend en PHP', '', 'https://res.cloudinary.com/practicaldev/image/fetch/s--ytGTW9Vg--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://thepracticaldev.s3.amazonaws.com/i/cufhvx44o66bb32ll2l8.png', ['PHP'])
        ]
    }

    getProjects(): Array<Project> {
        return this.projects;
    }
}