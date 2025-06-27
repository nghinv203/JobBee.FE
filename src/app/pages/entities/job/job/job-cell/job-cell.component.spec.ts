import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobCellComponent } from './job-cell.component';

describe('JobCellComponent', () => {
  let component: JobCellComponent;
  let fixture: ComponentFixture<JobCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobCellComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
