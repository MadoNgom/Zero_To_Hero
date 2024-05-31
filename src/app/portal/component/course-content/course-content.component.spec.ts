import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseContentComponent } from './course-content.component';

describe('CourseContentComponent', () => {
  let component: CourseContentComponent;
  let fixture: ComponentFixture<CourseContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CourseContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
