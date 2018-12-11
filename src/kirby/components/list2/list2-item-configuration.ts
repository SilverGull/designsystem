import { ListItem } from './list-item';
import { Type } from '@angular/core';

import { ComponentConfiguration } from '../shared/component-configuration';

export class List2ItemConfiguration implements ComponentConfiguration {
  constructor(
    public component: Type<any>,
    public data: ListItem) {
  }
  // constructor(
  //   public component: Type<any>,
  //   public data: any) {
  // }
}
