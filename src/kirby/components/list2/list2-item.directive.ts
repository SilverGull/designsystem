import { List2ItemConfiguration } from './list2-item-configuration';
import { Directive, ComponentFactoryResolver, ViewContainerRef, OnInit, Input } from '@angular/core';
import { List2ItemComponent } from './list2-item.component';

@Directive({
  selector: '[kirbyList2Item]'
})
export class List2ItemDirective implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('kirbyList2Item') config: List2ItemConfiguration;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private viewContainerRef: ViewContainerRef) { }

  ngOnInit() {
    this.loadCard();
  }

  loadCard() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.config.component);
    this.viewContainerRef.clear();
    const componentRef = this.viewContainerRef.createComponent(componentFactory);
    (<List2ItemComponent>componentRef.instance).data = this.config.data;
  }

}
