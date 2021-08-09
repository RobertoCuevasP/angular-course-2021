import { Component, Input } from '@angular/core';

@Component({
  selector: 'roberto-comp',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component {
  @Input('status') statusTest: string = 'working';

  constructor() {}

  ngOnInit() {}
}
