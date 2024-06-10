import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableApprenantComponent } from './table-apprenant.component';

describe('TableApprenantComponent', () => {
  let component: TableApprenantComponent;
  let fixture: ComponentFixture<TableApprenantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableApprenantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableApprenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
