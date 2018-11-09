import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KirbyModule } from '../../../kirby/kirby.module';
import { ButtonExampleComponent } from './button-example.component';

describe('ButtonExampleComponent', () => {
  let component: ButtonExampleComponent;
  let fixture: ComponentFixture<ButtonExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ KirbyModule ],
      declarations: [ ButtonExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
