import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin2',
  template: `
    <p>
      admin2 works!
    </p>

    <button (click)="testParams('Roberto', 'Cuevas')">Test</button>
  `
})
export class Admin2Component implements OnInit {
  constructor() {}

  ngOnInit() {}

  public testParams(name: string, lastname: string): string {
    return name + ' ' + lastname;
  }
}
