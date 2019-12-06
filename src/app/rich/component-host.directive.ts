import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[richComponentHost]'
})
export class ComponentHostDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }

}
