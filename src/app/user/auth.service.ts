import { Injectable } from '@angular/core';
import {IUser} from './user.model';
@Injectable()
export class AuthService {
  curretUser: IUser;

  constructor() { }

  loginUser(userName: string, password: string ){
    this.curretUser =
    {
      id: 1,
      userName,
      firstName: 'Aris',
      lastName : 'Pass',
    };
  }

  isAuthenticated(){
    return !!this.curretUser;
  }
}
