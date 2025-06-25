import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingFoundingComponent } from './setting-founding.component';

describe('SettingFoundingComponent', () => {
  let component: SettingFoundingComponent;
  let fixture: ComponentFixture<SettingFoundingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingFoundingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingFoundingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
