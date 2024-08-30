import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-estatus-tag',
  templateUrl: './estatus-tag.component.html',
  styleUrls: ['./estatus-tag.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EstatusTagComponent {
  @Input()
  severity: 'info' | 'success' | 'warning' | 'danger' = 'info';

  @Input()
  label: string = '';
}
