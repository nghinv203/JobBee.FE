import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobLongComponent } from './job-long.component';

describe('JobLongComponent', () => {
  let component: JobLongComponent;
  let fixture: ComponentFixture<JobLongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobLongComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobLongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
