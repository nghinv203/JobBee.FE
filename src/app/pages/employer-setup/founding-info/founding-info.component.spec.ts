import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundingInfoComponent } from './founding-info.component';

describe('FoundingInfoComponent', () => {
  let component: FoundingInfoComponent;
  let fixture: ComponentFixture<FoundingInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoundingInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoundingInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
