import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-no-vacunados',
  templateUrl: './no-vacunados.component.html',
  styleUrls: ['./no-vacunados.component.css'],
})
export class NoVacunadosComponent implements OnInit {
  @Input() info: any;

  @Input() name: string;
  @Input() age: string;
  @Input() disease: number;
  @Input() vaccineType: string;

  @Output() edit = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onEdit() {
    this.edit.emit();
  }
}
