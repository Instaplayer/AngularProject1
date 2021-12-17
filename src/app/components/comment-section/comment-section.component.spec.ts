import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { commentDataService } from 'src/app/services/comment-data';
import { CommentsectionComponent } from './comment-section.component';

describe('CommentSectionComponent', () => {
  let component: CommentsectionComponent;
  let fixture: ComponentFixture<CommentsectionComponent>;
  const fakeActivatedRoute = {
    snapshot: { data: { } }
  } as ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentsectionComponent ],
      providers: [
        commentDataService,
        HttpClient,
        HttpHandler,
        
        {provide: ActivatedRoute, useValue: fakeActivatedRoute}
      ],
      imports: [

        RouterModule,
        FormsModule,
        RouterTestingModule

      ]
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

  it('should have base values defined', () => {

    expect(component.comment).toBeDefined();
    expect(component.nickname).toBeDefined();
    expect(component.commentSection).toBeDefined();
  })
});
