import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu-hamburguesa',
  templateUrl: './menu-hamburguesa.component.html',
  styleUrls: ['./menu-hamburguesa.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuHamburguesaComponent implements OnInit {
  items!: MenuItem[];

  ngOnInit(): void {
    this.items = [
      {
        label: 'Nuevo registro',
        icon: 'nuevo-registro-icon',
        routerLink: '/privado/consultar-registros',
        command: () => {},
      },
      {
        label: 'Consultas',
        icon: 'pi pi-refresh',
        routerLink: '/privado/consultar-registros',
        command: () => {},
      },
      {
        label: 'Reportes',
        icon: 'pi pi-refresh',
        routerLink: '/privado/consultar-registros',
        command: () => {},
      },

      {
        label: 'Eliminar expedientes',
        icon: 'pi pi-refresh',
        routerLink: '/privado/consultar-registros',

        command: () => {},
      },
      {
        separator: true,
      },
      {
        label: 'Cerrar sesión',
        icon: 'pi pi-refresh',
        routerLink: '/',
        command: () => {},
      },
    ];
  }
}
