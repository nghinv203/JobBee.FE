import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingEducationComponent } from './setting-education.component';

describe('SettingEducationComponent', () => {
  let component: SettingEducationComponent;
  let fixture: ComponentFixture<SettingEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingEducationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
