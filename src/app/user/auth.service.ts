import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { IUser } from './user.model';

@Injectable()
export class AuthService {

  curretUser: IUser;

  constructor(private http: HttpClient) { }

  loginUser(userName: string, password: string ): Observable<IUser | any> {
    // this.curretUser =
    // {
    //   id: 1,
    //   userName,
    //   firstName: 'Aris',
    //   lastName : 'Papas',
    // };
    const options = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
    const loginInfo = {username: userName, password};

    return this.http.post('/api/login/', loginInfo, options)
    .pipe(tap(data => {
      this.curretUser = (data['user'] as IUser);
    }))
    .pipe(catchError(err => of(false)));
  }

  isAuthenticated(){
    return !!this.curretUser;
  }

  checkAuthenticationStatus() {
    this.http.get('/api/currentIdentity')
    .pipe(tap(data => {
      if (data instanceof Object){ this.curretUser = (data as IUser); }
    }))
    .subscribe();
  }

  updateCurrentUser(firstName: any, lastName: any) {
    this.curretUser.firstName = firstName;
    this.curretUser.lastName = lastName;

    const options = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this.http.put(`/api/users/${this.curretUser.id}`, this.curretUser, options);
  }
}
