import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent {

  public menuItems: MenuItem[] = [];

  ngOnInit() {
    this.menuItems = [
      {
        label: 'Inicio',
        routerLink: '/'

      },
      {
        label: 'Juegos',
        routerLink: 'juegos'
      },
      {
        label: 'Listas',
        routerLink: 'listas'

      },
      {
        label: 'Noticias',
        routerLink: 'noticias'

      },
      {
        label: 'Comunidad',
        routerLink: 'comunidad'

      },
      {
        label: 'Tienda',
        routerLink: 'tienda'

      },
      {
        icon: 'pi pi-search',
      },
      {
        icon: 'pi pi-user',
      },

    ];
  }
}
