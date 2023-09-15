import { Injectable } from "@angular/core";
import { Project } from "../models/project";

@Injectable()
export class ProjectService {
    public projects: Array<Project>;
    constructor() {
        this.projects = [
            new Project('FoodHub', 'Desarrollo frontend de aplicación móvil utilizando Flutter y Dart, enfocado en interfaces intuitivas y funcionales y colaborando estrechamente con el equipo de desarrollo para una experiencia de usuario fluida y atractiva.', 'https://github.com/DavidSepulvedaCh/Integrador_III', 'https://res.cloudinary.com/dwfh4s7tu/image/upload/v1689193783/foodhub_src50s.png', ['Dart', 'Flutter', 'js']),
            new Project('ChavezMeat', 'Software de escritorio para llevar el control de inventario y finanzas de una carniceria.', 'https://github.com/DavidSepulvedaCh/ButcherShop', 'https://res.cloudinary.com/dwfh4s7tu/image/upload/v1688787796/lOGO_h1w7ex.png', ['Java', 'MySQL']),
            new Project('Luxua', 'Desarrollo en conjunto de un sistema CRM/ERP, con características de manejo de inventario, privilegios para distintos roles de usuarios, sistema de facturación.', '', 'https://res.cloudinary.com/dwfh4s7tu/image/upload/v1688787907/luxuaA_cmuh3p.png', ['HTML5', 'CSS3-alt', 'php', 'MySQL']),
            new Project('InteNews', 'Colaboración en el diseño y desarrollo FrontEnd para un portal web encargado de realizar WebScraping, donde se realiza recolección de noticias naciona les (Colombia).', '', 'https://res.cloudinary.com/dwfh4s7tu/image/upload/v1688787333/intNews_vmvzdt.png', ['HTML5', 'CSS3', 'js', 'Sass']),
            new Project('Notificacióne Firebase', 'Aplicación movil que consiste en enviar mensajes mediante notificaciones utilizando firebase. En el lenguaje flutter, con el backend en PHP', 'https://github.com/DavidSepulvedaCh/Notificaciones_Firebase', 'https://res.cloudinary.com/practicaldev/image/fetch/s--ytGTW9Vg--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://thepracticaldev.s3.amazonaws.com/i/cufhvx44o66bb32ll2l8.png', ['Dart', 'Flutter', 'PHP'])
        ]
    }

    getProjects(): Array<Project> {
        return this.projects;
    }
}