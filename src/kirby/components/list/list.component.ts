import { ListDirective } from './list.directive';
import { ListConfiguration } from './list-configuration';
import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver, ComponentRef } from '@angular/core';
import { ListItemComponent } from './list-item.component';
import { ListItemConfiguration } from './list-item-configuration';

/**
 * TODO
 * rowClick
 * (checkbox)
 */


@Component({
  selector: 'kirby-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() item: ListConfiguration;
  @Input() items: ListItemConfiguration[];

  // The specific row???
  @ViewChild(ListDirective) listHost: ListDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadList();
  }

  loadList() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.item.rowTemplate);
    const viewContainerRef = this.listHost.viewContainerRef;
    viewContainerRef.clear();
    const componentRef: ComponentRef<{}> = viewContainerRef.createComponent(componentFactory);
//    (<RowComponent>componentRef.instance).data = this.rows.data;
  }

}
