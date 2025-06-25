import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialInfoComponent } from './social-info.component';

describe('SocialInfoComponent', () => {
  let component: SocialInfoComponent;
  let fixture: ComponentFixture<SocialInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
