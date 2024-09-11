import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetalleComponent implements OnInit {
  form!: FormGroup;
  abogados: any[] = [
    { label: 'Opción 1', value: 1 },
    { label: 'Opción 2', value: 2 },
  ];

  partesDemandantes: {
    tipoPersona: number;
    nombre: string;
    clave: number;
    complemento: string;
    tipoRequerimiento: number;
  }[] = [
    {
      tipoPersona: 1,
      nombre: 'Nombre 1',
      clave: 1,
      complemento: 'Complemento 1',
      tipoRequerimiento: 1,
    },
  ];

  partesDemandadas: {
    tipoPersona: number;
    nombre: string;
    clave: number;
    complemento: string;
    tipoRequerimiento: number;
  }[] = [
    {
      tipoPersona: 1,
      nombre: 'Nombre 1',
      clave: 1,
      complemento: 'Complemento 1',
      tipoRequerimiento: 1,
    },
  ];

  tercerosLista: {
    tipoPersona: number;
    nombre: string;
    clave: number;
    complemento: string;
    tipoRequerimiento: number;
  }[] = [
    {
      tipoPersona: 1,
      nombre: 'Nombre 1',
      clave: 1,
      complemento: 'Complemento 1',
      tipoRequerimiento: 1,
    },
  ];

  afiliaciones: any[] = [
    {
      id: 1,
      nombreRazonSocial: 'BBVA S.A. de C.V.',
      clave: 'Registro Patronal',
      valor: '2548769-10-1',
      tipoRequerimiento: '-RFC-Domicilio-Actividad-Tipo de movimiento',
    },
  ];

  historicos: any[] = [
    {
      id: 1,
      registroPatronal: 'ITO101101HF2',
      entidadFederativa: 'Baja California Sur',
      subdelegacion: '33',
      domicilio: 'Héroes de Chapultepec No. 655-B Lomas de la Soledad',
    },
  ];

  historicosTerceros: any[] = [
    {
      id: 1,
      nombrePatron: 'Formas e imágenes, S.A. de C.V.',
      registroPatronal: 'ITO101101HF2',
      entidadFederativa: 'Baja California Sur',
      fechaAlta: '16/05/2021',
      fechaBaja: '08/09/2023',
      salarioBaseCotizacion: '$4,870.20',
    },
  ];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      abogado: [{ value: null, disabled: false }, []],
      ooad: [{ value: 'Baja California Sur', disabled: true }, []],
    });
  }
}
