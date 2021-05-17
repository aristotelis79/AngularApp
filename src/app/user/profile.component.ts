import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { TOASTR_TOKEN, IToastr } from "../common/toastr.service"
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  firstNameControl: FormControl;
  lastNameControl: FormControl;

  constructor(
    private authService: AuthService,
    private router: Router,
    @Inject(TOASTR_TOKEN) private toastr: IToastr ) { }

  ngOnInit(): void {
      this.firstNameControl = new FormControl(this.authService.curretUser.firstName ,
         [Validators.required, Validators.pattern('[a-zA-Z].*')]);
      this.lastNameControl = new FormControl(this.authService.curretUser.lastName, Validators.required);
      this.profileForm = new FormGroup({
        firstName : this.firstNameControl,
        lastName: this.lastNameControl
      });
  }

  saveProfile(formValue){
    if (this.profileForm.valid){
      this.authService.updateCurrentUser(formValue.firstName, formValue.lastName)
      .subscribe(() => {
        //this.router.navigate(['events']);
        this.toastr.success('Profile saved');
      });
    }
  }

  cancel() {
    this.router.navigate(['events']);
  }

  validateFirstName(){
     return this.firstNameControl.valid || this.lastNameControl.untouched;
  }
}
