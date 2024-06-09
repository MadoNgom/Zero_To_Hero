import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFormateurComponent } from './table-formateur.component';

describe('TableFormateurComponent', () => {
  let component: TableFormateurComponent;
  let fixture: ComponentFixture<TableFormateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableFormateurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableFormateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
