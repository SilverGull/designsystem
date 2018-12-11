import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { List3CellComponent } from './list3-cell.component';

describe('List3CellComponent', () => {
  let component: List3CellComponent;
  let fixture: ComponentFixture<List3CellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ List3CellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(List3CellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
