import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPasswordEmailComponent } from './reset-password-email.component';

describe('ResetPasswordEmailComponent', () => {
  let component: ResetPasswordEmailComponent;
  let fixture: ComponentFixture<ResetPasswordEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResetPasswordEmailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResetPasswordEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
