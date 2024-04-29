import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { InicioComponent } from './pages/inicio/inicio.component';
import { JuegosComponent } from './pages/juegos/juegos.component';
import { ListasComponent } from './pages/listas/listas.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { ComunidadComponent } from './pages/comunidad/comunidad.component';
import { TiendaComponent } from './pages/tienda/tienda.component';
import { SharedModule } from 'primeng/api';
import { InformacionComponent } from './pages/informacion/informacion.component';


@NgModule({
  declarations: [

    InicioComponent,
    JuegosComponent,
    ListasComponent,
    NoticiasComponent,
    ComunidadComponent,
    TiendaComponent,
    InformacionComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
  ],
  exports: [
  ]
})
export class ProductsModule { }
