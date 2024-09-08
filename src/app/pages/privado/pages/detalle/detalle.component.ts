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

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      abogado: [{ value: null, disabled: false }, []],
      ooad: [{ value: 'Baja California Sur', disabled: true }, []],
    });
  }
}
