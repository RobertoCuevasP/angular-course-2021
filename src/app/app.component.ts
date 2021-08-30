import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, of, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  id = 3;
  data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  constructor(private router: Router) {
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

  onGoView2FromTs(): void {
    this.router.navigate(['view2', this.id, 'sub', 17], {
      queryParams: { name: 'maria', lastname: 'gutierrez' }
    });
  }
}
