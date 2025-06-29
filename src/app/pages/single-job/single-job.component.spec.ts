import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleJobComponent } from './single-job.component';

describe('SingleJobComponent', () => {
  let component: SingleJobComponent;
  let fixture: ComponentFixture<SingleJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleJobComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
