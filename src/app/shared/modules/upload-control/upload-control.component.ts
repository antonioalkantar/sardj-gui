import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Data } from '@angular/router';

@Component({
  selector: 'app-upload-control',
  templateUrl: './upload-control.component.html',
  styleUrls: ['./upload-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: UploadControlComponent,
      multi: true,
    },
  ],
})
export class UploadControlComponent implements ControlValueAccessor {
  files: File[] | null = null;

  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;
  @Input() allowedTypes: string[] = []; // Tipos de archivos permitidos (e.g., 'application/pdf', 'image/jpeg')
  @Input() maxFiles: number = Infinity; // Número máximo de archivos permitidos
  @Input() maxFileSize: number = 10 * 1024 * 1024; // Tamaño máximo de archivo permitido (por defecto 10MB)
  @Input() label: string = 'Selecciona el archivo o arrastra y suelta aquí';
  @Input() pathImageIcon: string = '';

  onChange = (files: File[] | null) => {};
  onTouched = () => {};
  touched = false;
  disabled = false;

  writeValue(files: File[] | null): void {
    this.files = files;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  markAsTouched(): void {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  onDrop(event: DragEvent): void {
    this.handleDropEvent(event);
  }

  onDragOver(event: DragEvent): void {
    this.preventDefaultActions(event);
  }

  onDragLeave(event: DragEvent): void {
    this.preventDefaultActions(event);
  }

  private handleDropEvent(event: DragEvent): void {
    this.markAsTouched();
    this.files = [];

    this.preventDefaultActions(event);

    const files = this.extractFilesFromEvent(event);
    if (!files) {
      return this.handleError('No se encontraron archivos');
    }

    const acceptedFiles = this.filterFiles(files);
    this.files = acceptedFiles.length > 0 ? acceptedFiles : null;
    this.onChange(this.files);
  }

  private preventDefaultActions(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
  }

  private extractFilesFromEvent(event: DragEvent): FileList | null {
    return event.dataTransfer?.files || null;
  }

  private filterFiles(files: FileList): File[] {
    return Array.from(files)
      .filter((file) => this.isFileTypeAllowed(file) && this.isFileSizeAllowed(file))
      .slice(0, this.maxFiles);
  }

  private isFileTypeAllowed(file: File): boolean {
    if (this.allowedTypes.length === 0) {
      return true; // Si no hay restricciones, aceptar cualquier tipo de archivo
    }
    return this.allowedTypes.some((type) => file.type.includes(type));
  }

  private isFileSizeAllowed(file: File): boolean {
    return file.size <= this.maxFileSize;
  }

  private handleError(message: string): void {
    throw new Error(message);
  }

  removeFile(event: any, file: File): void {
    event.preventDefault();
    event.stopPropagation();
    this.files = this.files?.filter((f) => f !== file) || null;
    if (this.files?.length === 0) {
      this.files = null;
    }
    this.onChange(this.files);
  }

  fileBrowseHandler(event: any): void {
    event.preventDefault();
    event.stopPropagation();
    const files = event.target?.files;
    this.files = this.filterFiles(files);
    this.onChange(this.files);
  }

  handleClick(event: any): void {
    event.preventDefault();
    event.stopPropagation();
    this.fileInput.nativeElement.click();
  }
}
