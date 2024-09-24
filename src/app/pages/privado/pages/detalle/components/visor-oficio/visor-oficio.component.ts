import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
@Component({
  selector: 'app-visor-oficio',
  templateUrl: './visor-oficio.component.html',
  styleUrls: ['./visor-oficio.component.scss'],
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

  generarPdf(): void {
    const doc = new jsPDF({});
    const margin = 16;
    let row = 5;
    let nextRowPosition = margin;
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('DIRECCIÓN JURÍDICA', doc.internal.pageSize.getWidth() - margin, nextRowPosition, {
      align: 'right',
    });
    doc.setFont('helvetica', 'normal');
    doc.text(
      'Unidad de Investigaciones y Procesos Jurídicos',
      doc.internal.pageSize.getWidth() - margin,
      (nextRowPosition += row),
      {
        align: 'right',
      },
    );
    doc.text(
      'Coordinación de Asuntos Contenciosos',
      doc.internal.pageSize.getWidth() - margin,
      (nextRowPosition += row),
      {
        align: 'right',
      },
    );
    doc.text('División de Asuntos Civiles', doc.internal.pageSize.getWidth() - margin, (nextRowPosition += row), {
      align: 'right',
    });

    doc.text('Of. No. 3012060M12/1519/2023', margin, (nextRowPosition += 15), {
      align: 'left',
    });

    doc.text('Ciudad de México, a 30 de octubre de 2023', doc.internal.pageSize.getWidth() - margin, nextRowPosition, {
      align: 'right',
    });

    doc.text('Juicio Ejecutivo Mercantil', margin, (nextRowPosition += 10), {
      align: 'left',
    });
    doc.setFont('helvetica', 'bold');
    doc.text('BBVA S.A. de C.V.', margin, (nextRowPosition += 5), {
      align: 'left',
    });
    doc.text('VS', margin, (nextRowPosition += 5), {
      align: 'left',
    });
    doc.text('ELEKTRA S.A. de C.V', margin, (nextRowPosition += 5), {
      align: 'left',
    });
    doc.setFont('helvetica', 'normal');
    doc.text('Expediente 100/2023', margin, (nextRowPosition += 5), {
      align: 'left',
    });
    doc.text('Juzgado Vigésimo Primero de lo Civil', margin, (nextRowPosition += 10), {
      align: 'left',
    });
    doc.text('en la Ciudad de México', margin, (nextRowPosition += 5), {
      align: 'left',
    });
    doc.setFont('helvetica', 'bold');
    doc.text('Presente', margin, (nextRowPosition += 10), {
      align: 'left',
      maxWidth: 180,
    });
    doc.setFont('helvetica', 'normal');
    doc.text(
      'Me refiero al oficio 30102060M12/1519/2023 de fecha 31 de octubre de 2023, recibido el 30 de octubre del año en cursoo, por medio del cual se realiza la siguiente solicitud al Instituto \nMexicano del Seguro Social:',
      margin,
      (nextRowPosition += 10),
      {
        maxWidth: doc.internal.pageSize.getWidth() - margin - 16,
        align: 'justify',
      },
    );
    doc.text('Requerimiento:', margin, (nextRowPosition += 20), {
      align: 'left',
    });
    doc.text('Nombre (demandado/demandante/tercero):', margin, (nextRowPosition += 10), {
      align: 'left',
    });
    doc.text('Requerimiento:', margin, (nextRowPosition += 10), {
      align: 'left',
    });
    doc.text('Nombre (demandado/demandante/tercero):', margin, (nextRowPosition += 10), {
      align: 'left',
    });
    doc.text(
      'Sobre el particular y con fundamento en los artículos 22, fracción IV de la Ley del Seguro Social; 117, fracción III de la Ley de Transparencia y Acceso a la Información Pública, 22, fracción III de la Ley General de Protección de Datos Personales en Posesión de Sujetos Obligados y 1,250 del Código de Procedimientos Civiles para la Ciudad de México, de conformidad con la información registrada en el instituto, le comunico lo siguiente:',
      margin,
      (nextRowPosition += 10),
      {
        maxWidth: doc.internal.pageSize.getWidth() - margin - 16,
        align: 'justify',
      },
    );
    autoTable(doc, {
      startY: (nextRowPosition += 30),
      margin: { horizontal: margin },
      headStyles: {
        lineColor: '#474747',
        lineWidth: 0.1,
      },
      bodyStyles: {
        lineColor: '#474747',
        fillColor: '#ffffff',
        lineWidth: 0.1,
      },
      alternateRowStyles: {
        lineColor: '#474747',
        lineWidth: 0.1,
        fillColor: '#ffffff',
      },
      head: [
        [
          {
            content: 'INFORMACIÓN OBTENIDA',
            colSpan: 5,
            styles: {
              fontStyle: 'bold',
              halign: 'center',
              fillColor: '#f1f1f1',
              textColor: '#000000',
            },
          },
        ],
        [
          {
            content: 'TIPO PERSONA',
            styles: {
              halign: 'center',
              fillColor: '#B5B2B3',
              textColor: '#000000',
            },
          },
          {
            content: 'NOMBRE',
            styles: {
              halign: 'center',
              fillColor: '#B5B2B3',
              textColor: '#000000',
            },
          },
          {
            content: 'CLAVE',
            styles: {
              halign: 'center',
              fillColor: '#B5B2B3',
              textColor: '#000000',
            },
          },
          {
            content: 'REQUERIMIENTO',
            styles: {
              halign: 'center',
              fillColor: '#B5B2B3',
              textColor: '#000000',
            },
          },
          {
            content: 'RESULTADO',
            styles: {
              halign: 'center',
              fillColor: '#B5B2B3',
              textColor: '#000000',
            },
          },
        ],
      ],

      body: [
        ['MORAL', 'BBVA S.A. DE C.V.', 'Y2548769-10-1', 'DOMICILIO', 'No se cuenta con la información'],
        ['MORAL', 'BBVA S.A. DE C.V.', 'Y2548769-10-1', 'Representante', 'REFORMA 476 COL JUAREZ'],
        ['MORAL', 'Juan Perez', 'Y2548769-10-1', 'DOMICILIO', 'Av central 10'],
        // ...
      ],
    });
    doc.text('Atentamente,', margin, (nextRowPosition += 50), {
      align: 'left',
    });
    // doc.save('two-by-four.pdf');
    const pdfBlog = doc.output('blob');
    this.showPDF(pdfBlog);
  }

  showPDF(pdfBlob: Blob): void {
    const fileURL = URL.createObjectURL(pdfBlob);
    const iframe = document.createElement('iframe');
    iframe.src = fileURL;
    iframe.width = '100%';
    iframe.height = '1240px';

    // Inserta el iframe en algún contenedor en tu HTML
    document.getElementById('pdfViewer')?.appendChild(iframe);
  }
}

// , ['TIPO PERSONA', 'NOMBRE', 'CLAVE', 'REQUERIMIENTO', 'RESULTADO']],
