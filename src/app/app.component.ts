import { AfterViewInit, Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  constructor(private primengConfig: PrimeNGConfig, private translateService: TranslateService) {}

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.translateService.setDefaultLang('es');
  }

  translateChange(lang: string) {
    this.translateService.use(lang);
    this.translateService.get('primeng').subscribe((res) => this.primengConfig.setTranslation(res));
  }

  ngAfterViewInit(): void {
    this.translateChange('es');
  }
}
