import { ModuleWithProviders } from "@angular/core"; //modulo interno de angular para trabajar con las rutas 
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { ProjectsComponent } from "./projects/projects.component";
import { AboutComponent } from "./about/about.component";

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', component: HomeComponent },
];

export const appRoutingProvider: any[] = [];
export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(appRoutes);
