import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeModulesComponent } from './liste-modules.component';

describe('ListeModulesComponent', () => {
  let component: ListeModulesComponent;
  let fixture: ComponentFixture<ListeModulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListeModulesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListeModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
