import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { PublicationService } from './services/publication.service';
import { SingletonService } from './services/singleton.service';
import { Test1Service } from './services/test1.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name = new FormControl('');
  formReactive: FormGroup;

  constructor(
    private testService: Test1Service,
    private singletonService: SingletonService,
    private publicationService: PublicationService,
    private formBuilder: FormBuilder
  ) {
    console.log(this.testService);
    this.formReactive = this.formBuilder.group({
      name: '',
      lastName: ['', Validators.required],
      date: ''
    });
  }

  ngOnInit(): void {
    this.formReactive.valueChanges.subscribe(res => {
      console.log('Changes reactive form', res);
    });

    this.name.valueChanges.subscribe(res => {
      console.log('Changes', res);
    });

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

  patch() {
    this.publicationService
      .patch('p0001', {
        description: 'Hola Mundo Update Testing using Patch'
      })
      .subscribe(res => console.log(res));
  }

  delete() {
    this.publicationService.delete('p0002').subscribe(res => console.log(res));
  }

  onSubmitTemplate(values: any) {
    console.log('Values', values);
  }

  onShow() {
    console.log(this.name.value);
  }

  showAll() {
    console.log('All', this.formReactive.value);
  }
}
