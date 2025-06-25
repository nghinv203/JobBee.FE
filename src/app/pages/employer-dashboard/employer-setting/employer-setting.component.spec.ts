import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerSettingComponent } from './employer-setting.component';

describe('EmployerSettingComponent', () => {
  let component: EmployerSettingComponent;
  let fixture: ComponentFixture<EmployerSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployerSettingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployerSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
