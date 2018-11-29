import { Component, OnInit } from '@angular/core';
import { RowExampleComponent } from './row-example.component';

@Component({
  selector: 'kirby-list-example',
  templateUrl: './list-example.component.html',
  styleUrls: ['./list-example.component.scss']
})
export class ListExampleComponent implements OnInit {

  items: RowExampleComponent[];

  constructor() { }

  ngOnInit() {
    const one = new RowExampleComponent();
    one.in = 'one';
    const two = new RowExampleComponent();
    two.in = 'two';
    this.items = [
      one, two
    ];
  }

}
