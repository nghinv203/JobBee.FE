import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateSettingComponent } from './candidate-setting.component';

describe('CandidateSettingComponent', () => {
  let component: CandidateSettingComponent;
  let fixture: ComponentFixture<CandidateSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandidateSettingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidateSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
