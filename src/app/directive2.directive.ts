import {
  Directive,
  ElementRef,
  HostListener,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';

@Directive({
  selector: '[appDirective2]'
})
export class Directive2Directive {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {}
}
