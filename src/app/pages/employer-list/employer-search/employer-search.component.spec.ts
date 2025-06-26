import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerSearchComponent } from './employer-search.component';

describe('EmployerSearchComponent', () => {
  let component: EmployerSearchComponent;
  let fixture: ComponentFixture<EmployerSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployerSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployerSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
