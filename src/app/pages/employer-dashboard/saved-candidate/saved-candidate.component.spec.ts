import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedCandidateComponent } from './saved-candidate.component';

describe('SavedCandidateComponent', () => {
  let component: SavedCandidateComponent;
  let fixture: ComponentFixture<SavedCandidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavedCandidateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavedCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
