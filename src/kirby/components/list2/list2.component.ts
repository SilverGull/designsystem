import { List2ItemDirective } from './list2-item.directive';
import { List2ItemConfiguration } from './list2-item-configuration';
import { Component, OnInit, Input, ComponentFactoryResolver, ViewChild } from '@angular/core';

@Component({
  selector: 'kirby-list2',
  templateUrl: './list2.component.html',
  styleUrls: ['./list2.component.scss']
})
export class List2Component implements OnInit {

  @Input() listItemConfigs: List2ItemConfiguration[];

//  @ViewChild(List2ItemDirective) list2Host: List2ItemDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
  }

  // loadCard() {
  //   const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.configuration.component);
  //   this.viewContainerRef.clear();
  //   const componentRef = this.viewContainerRef.createComponent(componentFactory);
  //   (<DynamicComponent>componentRef.instance).data = this.configuration.data;
  // }

}
