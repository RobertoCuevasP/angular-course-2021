import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.css']
})
export class Test3Component
  implements
    OnInit,
    OnChanges,
    DoCheck,
    OnDestroy,
    AfterViewInit,
    AfterViewChecked,
    AfterContentInit,
    AfterContentChecked {
  name: string | undefined;
  lastname: string | undefined;

  @Input() test;

  constructor() {
    console.log('Constructor');
  }
  /*
  ngOnInit() {
    console.log('On init');
  }

  ngOnChanges() {
    console.log('On changes');
  }

  ngDoCheck() {
    console.log('Do check');
  }

  ngOnDestroy() {
    console.log('On Destroy');
  }

  ngAfterContentChecked() {
    console.log('Content Checked');
  }

  ngAfterViewChecked() {
    console.log('View Checked');
  }

  ngAfterContentInit() {
    console.log('Content init');
  }

  ngAfterViewInit() {
    console.log('View Init');
  }

  fullname(event) {
    console.log('Fullname:  ', this.name + ' ' + this.lastname);
  }
  */
}
