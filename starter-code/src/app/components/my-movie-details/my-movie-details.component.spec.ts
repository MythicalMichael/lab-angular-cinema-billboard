import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMovieDetailsComponent } from './my-movie-details.component';

describe('MyMovieDetailsComponent', () => {
  let component: MyMovieDetailsComponent;
  let fixture: ComponentFixture<MyMovieDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyMovieDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMovieDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
