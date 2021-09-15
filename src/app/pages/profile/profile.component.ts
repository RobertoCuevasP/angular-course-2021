import { Component, OnInit } from '@angular/core';
import { PublicationService } from '../shared/services/publication.service';
import { AuthService } from '../../core/services/auth.service';

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  constructor(
    private publicationService: PublicationService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    const id = this.authService.getUserId();
    if (id) {
      this.publicationService.getAllById(id).subscribe(res => {
        console.log('Profile ', res);
      });
    }
  }
}
