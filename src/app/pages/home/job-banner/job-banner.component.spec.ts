import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobBannerComponent } from './job-banner.component';

describe('JobBannerComponent', () => {
  let component: JobBannerComponent;
  let fixture: ComponentFixture<JobBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
