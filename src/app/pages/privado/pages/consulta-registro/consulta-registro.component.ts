import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-consulta-registro',
  templateUrl: './consulta-registro.component.html',
  styleUrls: ['./consulta-registro.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConsultaRegistroComponent implements OnInit {
  busquedaForm!: FormGroup;
  estatus: any[] = [
    { label: 'Opción 1', value: 1 },
    { label: 'Opción 2', value: 2 },
  ];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.inicializarFormulario();
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
}
