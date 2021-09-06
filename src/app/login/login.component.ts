import { Component, OnInit } from '@angular/core';
import { PublicationService } from './services/publication.service';
import { SingletonService } from './services/singleton.service';
import { Test1Service } from './services/test1.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private testService: Test1Service,
    private singletonService: SingletonService,
    private publicationService: PublicationService
  ) {
    console.log(this.testService);
  }

  ngOnInit(): void {
    this.publicationService.getAll().subscribe(s => {
      console.log('Response', s);
    });
  }

  onSetMessage(): void {
    this.singletonService.setMessage('Hi from login');
  }

  create() {
    this.publicationService
      .create({
        date: '02/09/2021',
        description: 'I am new',
        idUser: 126,
        imageUrl: 'http://firebase/img.jpg',
        userPhotoUrl: 'http://firebase/user1.jpg'
      })
      .subscribe(res => console.log(res));
  }

  update() {
    this.publicationService
      .update('p0001', {
        date: '02/09/2021',
        description: 'Hola Mundo Update Testing',
        idUser: 126,
        imageUrl: 'http://firebase/img.jpg',
        userPhotoUrl: 'http://firebase/user1.jpg'
      })
      .subscribe(res => console.log(res));
  }

  delete() {
    this.publicationService.delete('p0002').subscribe(res => console.log(res));
  }
}
