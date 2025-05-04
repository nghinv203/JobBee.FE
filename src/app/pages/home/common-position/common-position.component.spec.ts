import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonPositionComponent } from './common-position.component';

describe('CommonPositionComponent', () => {
  let component: CommonPositionComponent;
  let fixture: ComponentFixture<CommonPositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonPositionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
