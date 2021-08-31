import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.scss']
})
export class Test2Component {
  //Declaracion del input
  @Input() name: string | undefined;
  @Input() lastName: string | undefined;

  //Declaracion de output
  @Output() onSendFullName = new EventEmitter(undefined);

  myvar1 = 4;
  myvar2 = 5;

  constructor() {}

  ngOnInit() {}

  onClickForShowName(event: any) {
    this.onSendFullName.emit('General data ' + this.name + ' ' + this.lastName);
  }

  test0(event: any) {
    console.log('event click: ', event);
    console.log('Suma ', this.myvar1 + this.myvar2);
  }

  test1(event: any) {
    console.log('event blur: ', event);
  }

  test2(event: any) {
    console.log('event double click: ', event);
  }
}
