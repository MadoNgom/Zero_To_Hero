import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableUserComponent } from './table-user.component';

describe('TableUserComponent', () => {
  let component: TableUserComponent;
  let fixture: ComponentFixture<TableUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
