import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  Output
} from '@angular/core';

@Directive({
  selector: '[directive1Test]'
})
export class Directive1Directive implements OnChanges {
  @Input() colorDirective: string = 'yellow';

  @Output() outputTestDirective = new EventEmitter<any>(null);

  @HostListener('click') hostListenerOnClick() {
    this.element.nativeElement.style.backgroundColor = this.colorDirective;
  } //'click' para que funcione solo dentro el elemento que use la directiva, 'window:click' para toda la pantalla

  @HostListener('mouseleave') hostListenerOnMouseLeave() {
    this.setBackgroundColor(this.colorDirective);
    this.outputTestDirective.emit(
      'Test output works, color: ' + this.colorDirective
    );
  }

  @HostListener('mouseenter') hostListenerOnMouseEnter() {
    this.setBackgroundColor('pink');
  }

  constructor(
    private element: ElementRef //ElementRef hace referencia a un HTML, tendremos acceso al lugar donde se instancie la directiva
  ) {
    this.setBackgroundColor(this.colorDirective);

    this.element.nativeElement.style.border = '10px green solid';
  }

  setBackgroundColor(color: string) {
    this.element.nativeElement.style.backgroundColor = color;
  }
  ngOnChanges(changes: any) {
    this.setBackgroundColor(changes.colorDirective.currentValue);
  }
}
