import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { Menu } from 'primeng/menu';

@Component({
  selector: 'app-consulta-registro',
  templateUrl: './consulta-registro.component.html',
  styleUrls: ['./consulta-registro.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConsultaRegistroComponent implements OnInit {
  @ViewChild('menu') menu!: Menu;

  busquedaForm!: FormGroup;
  estatus: any[] = [
    { label: 'Opción 1', value: 1 },
    { label: 'Opción 2', value: 2 },
  ];
  tableData: any[] = [
    {
      requerimiento: '0000010/2024-001-1',
      ooad: 'Baja California Sur',
      numeroOficio: '3012060M12/1519/2023',
      abogado: 'José Francisco González Medina',
      fechaNotificacion: '15/07/2024 - 10:00hrs',
      estatus: 4,
      registrado: true,
      abogadoAsignado: true,
      generandoOficio: true,
      porValidarOficio: true,
      respuestaEnviada: true,
      requerimientoConcluido: true,
    },
    {
      requerimiento: '0000010/2024-001-1',
      ooad: 'Baja California Sur',
      numeroOficio: '3012060M12/1519/2023',
      abogado: 'José Francisco González Medina',
      fechaNotificacion: '15/07/2024 - 10:00hrs',
      estatus: 0,
      registrado: true,
      abogadoAsignado: true,
      generandoOficio: true,
      porValidarOficio: false,
      respuestaEnviada: false,
      requerimientoConcluido: false,
    },
    {
      requerimiento: '0000010/2024-001-1',
      ooad: 'Baja California Sur',
      numeroOficio: '3012060M12/1519/2023',
      abogado: 'José Francisco González Medina',
      fechaNotificacion: '15/07/2024 - 10:00hrs',
      estatus: 1,
      registrado: true,
      abogadoAsignado: true,
      generandoOficio: true,
      porValidarOficio: true,
      respuestaEnviada: true,
      requerimientoConcluido: false,
    },
    {
      requerimiento: '0000010/2024-001-1',
      ooad: 'Baja California Sur',
      numeroOficio: '3012060M12/1519/2023',
      abogado: 'José Francisco González Medina',
      fechaNotificacion: '15/07/2024 - 10:00hrs',
      estatus: 0,
      registrado: true,
      abogadoAsignado: false,
      generandoOficio: false,
      porValidarOficio: false,
      respuestaEnviada: false,
      requerimientoConcluido: false,
    },
    {
      requerimiento: '0000010/2024-001-1',
      ooad: 'Baja California Sur',
      numeroOficio: '3012060M12/1519/2023',
      abogado: 'José Francisco González Medina',
      fechaNotificacion: '15/07/2024 - 10:00hrs',
      estatus: 0,
      registrado: true,
      abogadoAsignado: true,
      generandoOficio: false,
      porValidarOficio: false,
      respuestaEnviada: false,
      requerimientoConcluido: false,
    },
    {
      requerimiento: '0000010/2024-001-1',
      ooad: 'Baja California Sur',
      numeroOficio: '3012060M12/1519/2023',
      abogado: 'José Francisco González Medina',
      fechaNotificacion: '15/07/2024 - 10:00hrs',
      estatus: 0,
      registrado: true,
      abogadoAsignado: true,
      generandoOficio: true,
      porValidarOficio: true,
      respuestaEnviada: false,
      requerimientoConcluido: false,
    },
  ];

  first: number = 0;

  rows: number = 10;

  accionesFilaTabla: MenuItem[] = [
    {
      label: 'Editar',
      icon: 'editar-icon',
      routerLink: '/privado/edicion',
      command: () => {},
    },
    {
      separator: true,
    },
    {
      label: 'Asignar abogado',
      icon: 'asignar-abogado-icon ',
      // routerLink: '/privado/registro',
      command: () => {
        this.mostrarDialogAsignarAbogado();
      },
    },
    {
      separator: true,
    },
    {
      label: 'Validar Oficio',
      icon: 'validar-oficio-icon',
      disabled: true,
      // routerLink: '/privado/registro',
      command: () => {},
    },
  ];

  visibleDialogAsignarAbogado: boolean = false;

  abogados: any[] = [
    { label: 'Opción 1', value: 1 },
    { label: 'Opción 2', value: 2 },
  ];

  asignacionAbogadoForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.inicializarFormulario();
    this.inicializarFormAsignarAbogado();
  }

  inicializarFormAsignarAbogado() {
    this.asignacionAbogadoForm = this.formBuilder.group({
      abogado: [{ value: null, disabled: false }, []],
      ooad: [{ value: 'Baja California Sur', disabled: true }, []],
    });
  }

  inicializarFormulario(): void {
    this.busquedaForm = this.formBuilder.group({
      idRequerimiento: [{ value: null, disabled: false }, []],
      idEstatus: [{ value: null, disabled: false }, []],
      fechaNotificacion: [{ value: null, disabled: false }, []],
      fechaVencimiento: [{ value: null, disabled: false }, []],
      radioOpcion: [{ value: '1', disabled: true }, []],
      numeroOficio: [{ value: null, disabled: false }, []],
      idSubestatus: [{ value: null, disabled: false }, []],
      idAbogadoResponsable: [{ value: null, disabled: false }, []],
    });
  }

  mostrarDialogAsignarAbogado(): void {
    this.visibleDialogAsignarAbogado = true;
  }

  abrirAccionesTablaRegistro(event: any, registro: any): void {
    this.menu.toggle(event);
  }

  onPageChange(event: any): void {
    this.first = event.first;
    this.rows = event.rows;
  }
}
