import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteSetupComponent } from './complete-setup.component';

describe('CompleteSetupComponent', () => {
  let component: CompleteSetupComponent;
  let fixture: ComponentFixture<CompleteSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompleteSetupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompleteSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
