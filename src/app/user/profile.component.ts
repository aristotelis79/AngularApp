import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  profileForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    const firstName = new FormControl(this.authService.curretUser.firstName);
    const lastName = new FormControl(this.authService.curretUser.lastName);
    this.profileForm = new FormGroup({
      firstName,
      lastName
    });
  }

  saveProfile(formValue){
      this.authService.updateCurrentUser(formValue.firstName, formValue.lastName);
      this.router.navigate(['events']);
  }

  cancel() {
    this.router.navigate(['events']);
  }
}
