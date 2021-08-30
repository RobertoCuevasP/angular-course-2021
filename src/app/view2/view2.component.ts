import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view2',
  templateUrl: './view2.component.html',
  styleUrls: ['./view2.component.css']
})
export class View2Component implements OnInit {
  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.params.subscribe(p => {
      console.log('Params', p);
    });

    this.router.queryParams.subscribe(q => {
      console.log('Queri params:', q);
    });

    //console.log('snapshot', this.router.snapshot.params);
    /console.log('snapshot', this.router.snapshot.queryParams);
  }
}
