import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularJobsComponent } from './popular-jobs.component';

describe('PopularJobsComponent', () => {
  let component: PopularJobsComponent;
  let fixture: ComponentFixture<PopularJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularJobsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
