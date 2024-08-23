import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterPrivadoComponent } from './footer-privado.component';

describe('FooterPrivadoComponent', () => {
  let component: FooterPrivadoComponent;
  let fixture: ComponentFixture<FooterPrivadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterPrivadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterPrivadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
