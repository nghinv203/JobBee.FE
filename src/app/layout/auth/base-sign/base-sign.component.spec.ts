import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseSignComponent } from './base-sign.component';

describe('BaseSignComponent', () => {
  let component: BaseSignComponent;
  let fixture: ComponentFixture<BaseSignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseSignComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
