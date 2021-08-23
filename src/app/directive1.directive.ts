import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output
} from '@angular/core';

@Directive({
  selector: '[directive1Test]'
})
export class Directive1Directive {
  @Input() colorDirective: string = 'yellow';

  @Output() outputTestDirective = new EventEmitter<any>(null);

  colorBananaBox: string;

  @HostListener('click') hostListenerOnClick() {
    this.element.nativeElement.style.backgroundColor = this.colorDirective;
  } //'click' para que funcione solo dentro el elemento que use la directiva, 'window:click' para toda la pantalla

  @HostListener('mouseleave') hostListenerOnMouseLeave() {
    this.setBackgroundColor(this.colorBananaBox);
    this.outputTestDirective.emit(
      'Test output works, color: ' + this.colorBananaBox
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
}
