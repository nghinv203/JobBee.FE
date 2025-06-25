import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingSocialComponent } from './setting-social.component';

describe('SettingSocialComponent', () => {
  let component: SettingSocialComponent;
  let fixture: ComponentFixture<SettingSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingSocialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
