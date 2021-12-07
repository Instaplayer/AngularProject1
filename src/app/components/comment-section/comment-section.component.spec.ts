import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsectionComponent } from './comment-section.component';

describe('CommentsectionComponent', () => {
  let component: CommentsectionComponent;
  let fixture: ComponentFixture<CommentsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentsectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
