import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistroUsuarioComponent implements OnInit {
  dominios: any[] = [
    { label: 'Opción 1', value: 1 },
    { label: 'Opción 2', value: 2 },
  ];
  ooads: any[] = [
    { label: 'Opción 1', value: 1 },
    { label: 'Opción 2', value: 2 },
  ];
  perfiles: any[] = [
    { label: 'Opción 1', value: 1 },
    { label: 'Opción 2', value: 2 },
  ];
  form!: FormGroup;
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.inicializarFormulario();
  }

  inicializarFormulario(): void {
    this.form = this.formBuilder.group({
      cuentaUsuario: [{ value: null, disabled: false }, [Validators.nullValidator]],
      dominio: [{ value: null, disabled: false }, [Validators.nullValidator]],
      nombre: [{ value: null, disabled: false }, [Validators.nullValidator]],
      apellidoPaterno: [{ value: null, disabled: false }, [Validators.nullValidator]],
      apellidoMaterno: [{ value: null, disabled: false }, [Validators.nullValidator]],
      correoElectronico: [{ value: null, disabled: false }, [Validators.nullValidator]],
      puestoCargo: [{ value: null, disabled: false }, [Validators.nullValidator]],
      matricula: [{ value: null, disabled: false }, [Validators.nullValidator]],
      ooad: [{ value: null, disabled: false }, [Validators.nullValidator]],
      perfiles: [{ value: null, disabled: false }, [Validators.nullValidator]],
    });
  }
  guardar() {
    console.log(this.form.value);
  }

  get f() {
    return this.form.controls;
  }

  onCloseChip(value: any) {
    console.log(value);
  }
}
