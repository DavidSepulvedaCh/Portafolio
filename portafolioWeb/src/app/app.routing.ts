import { ModuleWithProviders } from "@angular/core"; //modulo interno de angular para trabajar con las rutas 
import { Routes, RouterModule } from "@angular/router";

/* COMPONENTS */
import { HomeComponent } from "./components/home/home.component";
import { PortfolioComponent } from "./components/portfolio/portfolio.component";
import { ContactComponent } from "./components/contact/contact.component";

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'projects', component: PortfolioComponent },
    { path: 'contact', component: ContactComponent }

];

export const appRoutingProvider: any[] = [];
export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(appRoutes);
