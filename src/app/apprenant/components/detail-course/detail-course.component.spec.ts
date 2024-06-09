import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCourseComponent } from './detail-course.component';

describe('DetailCourseComponent', () => {
  let component: DetailCourseComponent;
  let fixture: ComponentFixture<DetailCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailCourseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
