import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrameComponent } from './programe.component';

describe('ProgrameComponent', () => {
  let component: ProgrameComponent;
  let fixture: ComponentFixture<ProgrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProgrameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProgrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
