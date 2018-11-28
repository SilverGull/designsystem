import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[kirbyListItem]'
})
export class ListItemDirective {

  /**
   *
   * @param viewContainerRef Reference to the view container that hosts the component
   */
  constructor(public viewContainerRef: ViewContainerRef) { }

}
