import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[interactComponentHost]'
})
export class ComponentHostDirectiveI {
  constructor(public viewContainerRef: ViewContainerRef) { }

}
