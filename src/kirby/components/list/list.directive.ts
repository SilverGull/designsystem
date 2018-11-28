import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[kirbyList]'
})
export class ListDirective {

  /**
   *
   * @param viewContainerRef Reference to the view container that hosts the component
   */
  constructor(public viewContainerRef: ViewContainerRef) { }

}
