import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';

@Directive({
  selector: '[ngIfRoberto]'
})
export class Directive2Directive implements OnChanges {
  @Input() ngIfRoberto: boolean = true;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {}

  ngOnChanges(changes: any) {
    console.log('changes: ', changes.currentValue);
    this.setViewContainer(changes.ngIfRoberto.currentValue);
  }

  setViewContainer(show: boolean) {
    if (show) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }
}
