import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableHeaderComponent } from './reusable-header.component';

describe('ReusableHeaderComponent', () => {
  let component: ReusableHeaderComponent;
  let fixture: ComponentFixture<ReusableHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReusableHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReusableHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
