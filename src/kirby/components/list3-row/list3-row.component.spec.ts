import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { List3RowComponent } from './list3-row.component';

describe('List3RowComponent', () => {
  let component: List3RowComponent;
  let fixture: ComponentFixture<List3RowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ List3RowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(List3RowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
