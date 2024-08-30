import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar-table',
  templateUrl: './progress-bar-table.component.html',
  styleUrls: ['./progress-bar-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressBarTableComponent {
  @Input()
  showRightBar: boolean = false;

  @Input()
  showLeftBar: boolean = false;
}
