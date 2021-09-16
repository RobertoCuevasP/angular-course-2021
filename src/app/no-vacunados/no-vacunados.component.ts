import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-vacunados',
  templateUrl: './no-vacunados.component.html',
  styleUrls: ['./no-vacunados.component.css'],
})
export class NoVacunadosComponent implements OnInit {
  @Input() info: any;

  constructor() {}

  ngOnInit() {}
}
