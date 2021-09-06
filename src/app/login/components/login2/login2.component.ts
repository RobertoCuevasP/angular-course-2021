import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit {
  constructor(private utilService: UtilsService) {}

  ngOnInit(): void {
    this.utilService.currentData().subscribe(s => console.log(s));
  }
}
