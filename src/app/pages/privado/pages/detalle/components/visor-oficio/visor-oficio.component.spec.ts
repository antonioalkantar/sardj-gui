import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisorOficioComponent } from './visor-oficio.component';

describe('VisorOficioComponent', () => {
  let component: VisorOficioComponent;
  let fixture: ComponentFixture<VisorOficioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisorOficioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisorOficioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
