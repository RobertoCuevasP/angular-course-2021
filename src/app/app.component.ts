import { Component, ElementRef, ViewChild } from '@angular/core';
import { BehaviorSubject, of, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    this.pure(2, 3);
    this.impure(2, 3);
  }

  pure(a: number, b: number) {
    console.log(a + b);
    return a + b;
  }

  impure(a: number, b: number) {
    const c = Math.random();
    console.log(a + b + c);
    return a + b + c;
  }
}
