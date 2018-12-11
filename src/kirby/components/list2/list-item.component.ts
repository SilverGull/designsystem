import { List2ItemComponent } from './list2-item.component';
import { Component, OnInit, Input } from '@angular/core';
import { ListItemConfiguration } from '~/kirby/components/list/list-item-configuration';
import { List2ItemConfiguration } from '~/kirby/components/list2/list2-item-configuration';
import { ListItem } from './list-item';

@Component({
  selector: 'kirby-list-item',
  templateUrl: './list-item.component.html',
})
export class ListItemComponent implements OnInit, List2ItemComponent {

  data: ListItem;

  constructor() {
  }

  ngOnInit() {
  }

}
