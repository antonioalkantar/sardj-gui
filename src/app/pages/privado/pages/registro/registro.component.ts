import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistroComponent implements OnInit {
  tiposJuicios: any[] = [
    { label: 'Opción 1', value: 1 },
    { label: 'Opción 2', value: 2 },
  ];
  registroForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.inicializarForm();
  }

  inicializarForm() {
    this.registroForm = this.formBuilder.group({
      informacionGeneral: this.formBuilder.group({
        autoridadSolicitante: [{ value: null, disabled: false }, []],
        numeroOficio: [{ value: null, disabled: false }, []],
        fechaOficio: [{ value: null, disabled: false }, []],
        fechaHoraNotificacion: [{ value: null, disabled: false }, []],
        fechaHoraVenAdmin: [{ value: null, disabled: false }, []],
        fechaHoraVenEfectivo: [{ value: null, disabled: false }, []],
        tipoJuicio: [{ value: null, disabled: false }, []],
        expedienteParte1: [{ value: null, disabled: false }, []],
        expedienteParte2: [{ value: null, disabled: false }, []],
        expedienteParte3: [{ value: null, disabled: false }, []],
        localizacionReq: [{ value: null, disabled: false }, []],
        digitalizarReq: [{ value: null, disabled: false }, [Validators.required]],
      }),
      parteDemandante: this.formBuilder.array([
        {
          tipoPersona: [{ value: null, disabled: false }, []],
          nombre: [{ value: null, disabled: false }, []],
          clave: [{ value: null, disabled: false }, []],
          complemento: [{ value: null, disabled: false }, []],
          tipoReq: [{ value: null, disabled: false }, []],
        },
      ]),
      parteDemandada: this.formBuilder.array([
        {
          tipoPersona: [{ value: null, disabled: false }, []],
          nombre: [{ value: null, disabled: false }, []],
          clave: [{ value: null, disabled: false }, []],
          complemento: [{ value: null, disabled: false }, []],
          tipoReq: [{ value: null, disabled: false }, []],
        },
      ]),
      terceros: this.formBuilder.array([
        {
          tipoPersona: [{ value: null, disabled: false }, []],
          nombre: [{ value: null, disabled: false }, []],
          clave: [{ value: null, disabled: false }, []],
          complemento: [{ value: null, disabled: false }, []],
          tipoReq: [{ value: null, disabled: false }, []],
        },
      ]),
    });
  }

  get informacionGeneral() {
    return (this.registroForm.get('informacionGeneral') as FormGroup).controls;
  }
}
