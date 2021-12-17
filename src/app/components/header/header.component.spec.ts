import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'AnguBlog'`, () => {
    expect(component.title).toEqual('AnguBlog');
  });

  it(`should have the same amount of clickable elements in navbar as data in the "links" array`, () => {
    expect(document.getElementsByTagName('NAV')[0].childElementCount).toEqual(component.links.length);
  })

  it(`should have an existing ActiveLink`,() => {
    expect(component.activeLink).toBeTruthy();
  })
});
