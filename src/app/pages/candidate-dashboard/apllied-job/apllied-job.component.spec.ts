import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AplliedJobComponent } from './apllied-job.component';

describe('AplliedJobComponent', () => {
  let component: AplliedJobComponent;
  let fixture: ComponentFixture<AplliedJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AplliedJobComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AplliedJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
