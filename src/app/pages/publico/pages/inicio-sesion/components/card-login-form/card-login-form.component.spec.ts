import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLoginFormComponent } from './card-login-form.component';

describe('CardLoginFormComponent', () => {
  let component: CardLoginFormComponent;
  let fixture: ComponentFixture<CardLoginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardLoginFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardLoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
