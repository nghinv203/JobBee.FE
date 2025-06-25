import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerSetupComponent } from './employer-setup.component';

describe('EmployerSetupComponent', () => {
  let component: EmployerSetupComponent;
  let fixture: ComponentFixture<EmployerSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployerSetupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployerSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
