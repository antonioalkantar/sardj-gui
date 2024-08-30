import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBarTableComponent } from './progress-bar-table.component';

describe('ProgressBarTableComponent', () => {
  let component: ProgressBarTableComponent;
  let fixture: ComponentFixture<ProgressBarTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressBarTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressBarTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
