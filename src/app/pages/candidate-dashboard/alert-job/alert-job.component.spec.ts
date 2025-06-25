import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertJobComponent } from './alert-job.component';

describe('AlertJobComponent', () => {
  let component: AlertJobComponent;
  let fixture: ComponentFixture<AlertJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertJobComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
