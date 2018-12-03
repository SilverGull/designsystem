import { List2ItemConfiguration } from './../../../kirby/components/list2/list2-item-configuration';
import { Component, OnInit } from '@angular/core';
import { ListItemExampleComponent } from './list-item-example.component';

@Component({
  selector: 'kirby-list-example',
  templateUrl: './list-example.component.html',
  styleUrls: ['./list-example.component.scss']
})
export class ListExampleComponent implements OnInit {

  items: List2ItemConfiguration[];

  constructor() { }

  ngOnInit() {
    const one = new List2ItemConfiguration(ListItemExampleComponent, {test: 'one'});
    const two = new List2ItemConfiguration(ListItemExampleComponent, {test: 'two'});
    this.items = [
      one, two
    ];
  }

}
