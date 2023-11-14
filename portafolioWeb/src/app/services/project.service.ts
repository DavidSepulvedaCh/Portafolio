import { Injectable } from "@angular/core";
import { Project } from "../models/project";

@Injectable()
export class ProjectService {
    public projects: Array<Project>;
    constructor() {
        this.projects = [
            new Project('FoodHub', 'Desarrollo frontend de aplicación móvil utilizando Flutter y Dart, enfocado en interfaces intuitivas y funcionales y colaborando estrechamente con el equipo de desarrollo para una experiencia de usuario fluida y atractiva.', 'https://github.com/DavidSepulvedaCh/Integrador_III', 'https://res.cloudinary.com/dwfh4s7tu/image/upload/v1699929915/foodhub_z3o9ag.png', ['Dart', 'Flutter', 'js']),
            new Project('Chavez Meat', 'Software de escritorio para llevar el control de inventario y finanzas de una carniceria.', 'https://github.com/DavidSepulvedaCh/ButcherShop', 'https://res.cloudinary.com/dwfh4s7tu/image/upload/v1699929916/chavezmeat_xlwjnu.png', ['java', 'MySQL']),
            new Project('Auto Luxua', 'Desarrollo en conjunto de un sistema CRM/ERP, con características de manejo de inventario, privilegios para distintos roles de usuarios, sistema de facturación.', 'https://github.com/DavidSepulvedaCh/Integrador_I', 'https://res.cloudinary.com/dwfh4s7tu/image/upload/v1699929915/luxua_ea3r3q.png', ['HTML5', 'CSS3', 'php', 'MySQL']),
            new Project('InteNews', 'Colaboración en el diseño y desarrollo FrontEnd para un portal web encargado de realizar WebScraping, donde se realiza recolección de noticias naciona les (Colombia).', '', 'https://res.cloudinary.com/dwfh4s7tu/image/upload/v1699930197/intNews_II_rdama5.png', ['HTML5', 'CSS3', 'square-js', 'Sass']),
            new Project('Notificacióne Firebase', 'Aplicación movil que consiste en enviar mensajes mediante notificaciones utilizando firebase. En el lenguaje flutter, con el backend en PHP', 'https://github.com/DavidSepulvedaCh/Notificaciones_Firebase', 'https://res.cloudinary.com/practicaldev/image/fetch/s--ytGTW9Vg--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://thepracticaldev.s3.amazonaws.com/i/cufhvx44o66bb32ll2l8.png', ['Dart', 'Flutter', 'PHP'])
        ]
    }

    getProjects(): Array<Project> {
        console.log('Projects from ProjectService:', this.projects);

        return this.projects;
    }
}