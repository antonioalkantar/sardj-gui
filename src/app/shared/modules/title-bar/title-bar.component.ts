import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TitleBarComponent implements OnInit {
  @Input()
  route: string = '';

  @Input()
  label: string = '';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {}

  navigate() {
    this.router.navigate([this.route], {
      relativeTo: this.activatedRoute,
    });
  }
}
