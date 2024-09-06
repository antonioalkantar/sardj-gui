import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

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
  tiposPersonas: any[] = [
    { label: 'Opción 1', value: 1 },
    { label: 'Opción 2', value: 2 },
  ];
  claves: any[] = [
    { label: 'Opción 1', value: 1 },
    { label: 'Opción 2', value: 2 },
  ];
  tiposRequerimientos: any[] = [
    { label: 'Opción 1', value: 1 },
    { label: 'Opción 2', value: 2 },
  ];
  registroForm!: FormGroup;

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

  constructor(private formBuilder: FormBuilder, private messageService: MessageService) {}

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
      parteDemandante: this.formBuilder.group({
        tipoPersona: [{ value: null, disabled: false }, [Validators.required]],
        nombre: [{ value: null, disabled: false }, [Validators.required]],
        clave: [{ value: null, disabled: false }, [Validators.required]],
        complemento: [{ value: null, disabled: false }, [Validators.required]],
        tipoRequerimiento: [{ value: null, disabled: false }, [Validators.required]],
      }),
      parteDemandada: this.formBuilder.group({
        tipoPersona: [{ value: null, disabled: false }, [Validators.required]],
        nombre: [{ value: null, disabled: false }, [Validators.required]],
        clave: [{ value: null, disabled: false }, [Validators.required]],
        complemento: [{ value: null, disabled: false }, [Validators.required]],
        tipoRequerimiento: [{ value: null, disabled: false }, [Validators.required]],
      }),
      terceros: this.formBuilder.group({
        tipoPersona: [{ value: null, disabled: false }, [Validators.required]],
        nombre: [{ value: null, disabled: false }, [Validators.required]],
        clave: [{ value: null, disabled: false }, [Validators.required]],
        complemento: [{ value: null, disabled: false }, [Validators.required]],
        tipoRequerimiento: [{ value: null, disabled: false }, [Validators.required]],
      }),
    });
  }

  guardar() {
    this.messageService.add({
      severity: 'error',
      detail: 'Se generó el ID de requerimiento 000001/2024-001-11',
      life: 5000000,
    });
  }

  get informacionGeneral() {
    return (this.registroForm.get('informacionGeneral') as FormGroup).controls;
  }

  get parteDemandante() {
    return (this.registroForm.get('parteDemandante') as FormGroup).controls;
  }

  get parteDemandada() {
    return (this.registroForm.get('parteDemandada') as FormGroup).controls;
  }

  get terceros() {
    return (this.registroForm.get('terceros') as FormGroup).controls;
  }

  agregarParteDemandante() {
    const parteDemandante = this.registroForm.get('parteDemandante');
  }

  agregarParteDemandada() {
    const parteDemandada = this.registroForm.get('parteDemandada');
  }

  agregarTercero() {
    const terceros = this.registroForm.get('terceros');
  }
}
