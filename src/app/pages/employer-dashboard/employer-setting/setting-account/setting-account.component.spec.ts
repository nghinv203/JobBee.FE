import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingAccountComponent } from './setting-account.component';

describe('SettingAccountComponent', () => {
  let component: SettingAccountComponent;
  let fixture: ComponentFixture<SettingAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingAccountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
