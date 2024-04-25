import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { JuegosComponent } from './pages/juegos/juegos.component';
import { ListasComponent } from './pages/listas/listas.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { ComunidadComponent } from './pages/comunidad/comunidad.component';
import { TiendaComponent } from './pages/tienda/tienda.component';


const routes: Routes = [
  {
    path: '',
    component: InicioComponent
  },
  {
    path: 'juegos',
    component: JuegosComponent

  },
  {
    path: 'listas',
    component: ListasComponent
  },
  {
    path: 'noticias',
    component: NoticiasComponent
  },
  {
    path: 'comunidad',
    component: ComunidadComponent
  },
  {
    path: 'tienda',
    component: TiendaComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
