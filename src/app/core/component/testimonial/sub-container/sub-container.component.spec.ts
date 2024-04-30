import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubContainerComponent } from './sub-container.component';

describe('SubContainerComponent', () => {
  let component: SubContainerComponent;
  let fixture: ComponentFixture<SubContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
