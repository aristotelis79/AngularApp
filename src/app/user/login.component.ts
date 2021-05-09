import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: string;
  password: string;
  mouseoverLogin: boolean;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login(loginformValues){
    this.authService.loginUser(loginformValues.userName, loginformValues.password);
    this.router.navigate(['events']);
  }

  cancel(){
    this.router.navigate(['events']);
  }

}
