import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { RegisterComponent } from './components/register/register.component';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private matDialog: MatDialog) {}

  ngOnInit(): void {}

  login(form: any) {
    console.log('Form: ', form.value);

    this.authService
      .login({
        email: form.value.email,
        password: form.value.password,
        returnSecureToken: true
      })
      .subscribe(res => {
        console.log('Response', res);
      });
  }

  onCreateNewAccount(): void {
    this.matDialog.open(RegisterComponent);
  }
}
