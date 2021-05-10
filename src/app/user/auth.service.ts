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
      lastName : 'Papas',
    };
  }

  isAuthenticated(){
    return !!this.curretUser;
  }

  updateCurrentUser(firstName: any, lastName: any) {
    this.curretUser.firstName = firstName;
    this.curretUser.lastName = lastName;
  }
}
