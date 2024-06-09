import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAdminComponent } from './table-admin.component';

describe('TableAdminComponent', () => {
  let component: TableAdminComponent;
  let fixture: ComponentFixture<TableAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
