import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'roberto-comp',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component {
  //Declaracion del input
  @Input('status') statusTest: string = 'working';
  //Declaracion de output, le decimos que momento el evento saldra, ese output debe recibirse en una funcion
  @Output() onSendData = new EventEmitter(null); //onSendData = nombre variable

  constructor() {}

  ngOnInit() {}

  onClickTest(event: any) {
    console.log('Event Click: ', event);

    this.onSendData.emit({
      name: 'Roberto',
      status: 'busy'
    }); //Output personalizado, puede devolver lo que se guste
  }
}
