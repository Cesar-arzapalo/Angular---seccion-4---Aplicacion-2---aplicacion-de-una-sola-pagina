import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {HeroesComponent} from './components/heroes/heroes.component';
import {HeroeComponent} from './components/heroe/heroe.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';

export const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'heroe/:id', component: HeroeComponent },
    { path: 'busqueda/:idBusqueda', component: BusquedaComponent },
    { path: '', pathMatch: 'full', redirectTo: 'path' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
