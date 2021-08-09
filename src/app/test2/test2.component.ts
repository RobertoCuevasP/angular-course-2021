import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.scss']
})
export class Test2Component {
  //Declaracion del input
  @Input() name: string;
  @Input() lastName: string;

  //Declaracion de output
  @Output() onSendFullName = new EventEmitter(null);

  constructor() {}

  ngOnInit() {}

  onClickForShowName(event: any) {
    this.onSendFullName.emit('General data ' + this.name + ' ' + this.lastName);
  }
}
