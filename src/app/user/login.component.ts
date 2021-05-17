import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: string;
  password: string;
  mouseoverLogin: boolean;
  loginInvalid = false;
  
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login(loginformValues){
    this.authService.loginUser(loginformValues.userName, loginformValues.password)
    .subscribe(resp => {
      if (!resp){
        this.loginInvalid = true;
      }else{
        this.router.navigate(['events']);
      }
    });
  }

  cancel(){
    this.router.navigate(['events']);
  }

}
