import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingExperienceComponent } from './setting-experience.component';

describe('SettingExperienceComponent', () => {
  let component: SettingExperienceComponent;
  let fixture: ComponentFixture<SettingExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingExperienceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
