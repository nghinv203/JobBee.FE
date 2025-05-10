import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureJobsComponent } from './feature-jobs.component';

describe('FeatureJobsComponent', () => {
  let component: FeatureJobsComponent;
  let fixture: ComponentFixture<FeatureJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureJobsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
