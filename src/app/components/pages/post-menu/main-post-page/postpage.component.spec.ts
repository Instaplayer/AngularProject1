import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { commentDataService } from 'src/app/services/comment-data';

import { PostpageComponent } from './postpage.component';

describe('PostPageComponent', () => {
  let component: PostpageComponent;
  let fixture: ComponentFixture<PostpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostpageComponent ],
      providers: [
        commentDataService,
        HttpClient,
        HttpHandler
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
