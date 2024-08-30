import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstatusTagComponent } from './estatus-tag.component';

describe('EstatusTagComponent', () => {
  let component: EstatusTagComponent;
  let fixture: ComponentFixture<EstatusTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstatusTagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstatusTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
