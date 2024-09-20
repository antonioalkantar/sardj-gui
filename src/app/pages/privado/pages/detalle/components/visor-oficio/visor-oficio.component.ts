import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-visor-oficio',
  templateUrl: './visor-oficio.component.html',
  styleUrls: ['./visor-oficio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VisorOficioComponent implements OnInit {
  form!: FormGroup;
  indiceTabActiva = 0;
  tiposJuicios: any[] = [
    { label: 'Ejecutivo mercantil', value: 1 },
    { label: 'Opción 2', value: 2 },
  ];
  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.iniclializarFormulario();
  }

  iniclializarFormulario(): void {
    this.form = this.fb.group({
      informacionGeneral: this.fb.group({
        titulo: [{ value: 'Presente', disabled: false }, [Validators.nullValidator]],
        complementoExpediente1: [
          {
            value: `Me refiero al oficio 301206M12/1519/2023, de fecha 31 de octubre de 2023,
recibido el día 30 de octubre del año en curso, por medio del cual se 
realiza la siguiente solicitud al Instituto Mexicano del Seguro Social:`,
            disabled: false,
          },
          [Validators.nullValidator],
        ],
        complementoExpediente2: [
          {
            value: `Sobre el particular y con fundamento en los artículos 22, fracción IV de
la Ley de Transparencia y Acceso a la información Pública 22, fracción III
de la Ley General de protección de Datos Personales en Posesión de 
Sujetos Obligados y 1,250 del Código de Procedimientos Civiles para
la Ciudad de México, de conformidad con la información registrada en 
el Instituto, le comunico lo siguiente:`,
            disabled: false,
          },
          [Validators.nullValidator],
        ],
        autoridadSolicitante: [
          { value: 'Juzgado Vigésimo Primero de lo Civil en la Ciudad de México', disabled: true },
          [Validators.nullValidator],
        ],
        numeroOficio: [{ value: '3012060M12/1519/2023', disabled: true }, [Validators.nullValidator]],
        fechaOficio: [{ value: new Date(), disabled: true }, [Validators.nullValidator]],
        fechaHoraNotificacion: [{ value: new Date(), disabled: true }, [Validators.nullValidator]],
        fechaHoraVencimientoAdministrativo: [{ value: new Date(), disabled: true }, [Validators.nullValidator]],
        fechaHoraVencimientoEfectivo: [{ value: new Date(), disabled: true }, [Validators.nullValidator]],
        diaHoraTermino: [{ value: '1', disabled: true }, [Validators.nullValidator]],
        tipoJuicio: [{ value: null, disabled: true }, [Validators.nullValidator]],
        expedienteParte1: [{ value: '100', disabled: true }, [Validators.nullValidator]],
        expedienteParte2: [{ value: '100', disabled: true }, [Validators.nullValidator]],
        expedienteParte3: [{ value: '111', disabled: true }, [Validators.nullValidator]],
        localizacionExpediente: [{ value: 'A-38', disabled: true }, [Validators.nullValidator]],
        digitalizarRequerimiento: [
          { value: 'Selecciona el archivo o arrastra y suelta aquí', disabled: true },
          [Validators.nullValidator],
        ],
      }),
      demandante: this.fb.group({
        titulo: [{ value: 'Personal moral', disabled: false }, [Validators.nullValidator]],
        nombre: [{ value: 'BBVA S.A. de C.V.', disabled: true }, [Validators.nullValidator]],
        tipoRequerimiento: [
          { value: '-RFC -Domicilio -Actividad -Tipo de movimiento', disabled: true },
          [Validators.nullValidator],
        ],
        clave: [{ value: '2548769-10-1', disabled: true }, [Validators.nullValidator]],
      }),
      tercero: this.fb.group({}),
    });
  }

  onChangeTab(event: any): void {
    this.indiceTabActiva = event.index;
  }
}
