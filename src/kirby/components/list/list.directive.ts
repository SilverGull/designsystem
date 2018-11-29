import { Directive, ViewContainerRef, Input, ViewChild, ComponentFactoryResolver, OnInit } from '@angular/core';
import { ListConfiguration } from './list-configuration';

@Directive({
  selector: '[kirbyList]'
})
export class ListDirective implements OnInit {

  @Input() item: ListConfiguration;

  /**
   *
   * @param viewContainerRef Reference to the view container that hosts the component
   */
  constructor(public viewContainerRef: ViewContainerRef, private componentFactoryResolver: ComponentFactoryResolver) { }


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
