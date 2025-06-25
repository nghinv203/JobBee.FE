import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingTopbarComponent } from './setting-topbar.component';

describe('SettingTopbarComponent', () => {
  let component: SettingTopbarComponent;
  let fixture: ComponentFixture<SettingTopbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingTopbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingTopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
