import { List2ItemComponent } from '../../../kirby/components/list2/list2-item.component';
import { Component, OnInit, Input } from '@angular/core';
import { ListItemConfiguration } from '~/kirby/components/list/list-item-configuration';
import { List2ItemConfiguration } from '~/kirby/components/list2/list2-item-configuration';

@Component({
  selector: 'kirby-item2-example',
  template: `<span>ROW {{ data.test }}</span>`
})
export class ListItemExampleComponent implements OnInit, List2ItemComponent {

  data: any;

  constructor() {
  }

  ngOnInit() {
  }

}
