import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddResumeComponent } from './add-resume.component';

describe('AddResumeComponent', () => {
  let component: AddResumeComponent;
  let fixture: ComponentFixture<AddResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddResumeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
