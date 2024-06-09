import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursComponent } from './cours.component';

describe('CoursComponent', () => {
  let component: CoursComponent;
  let fixture: ComponentFixture<CoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoursComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
