import { Component, OnInit, Input } from '@angular/core';
import { ListItemConfiguration } from '~/kirby/components/list/list-item-configuration';

@Component({
  selector: 'kirby-row-example',
  template: `<span>ROW {{ in }}</span>`
})
export class RowExampleComponent extends ListItemConfiguration implements OnInit {

  @Input() in: string;

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
