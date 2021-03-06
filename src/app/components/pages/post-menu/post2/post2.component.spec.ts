import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Post2Component } from './post2.component';

describe('Post2Component', () => {
  let component: Post2Component;
  let fixture: ComponentFixture<Post2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Post2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Post2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render comment section',()=>{
    expect(document.getElementsByTagName("app-commentsection")).toBeTruthy();
  })
});
