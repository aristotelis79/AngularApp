import { Injectable } from "@angular/core";
import { IUser } from "./user.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { tap, catchError } from "rxjs/operators";
import { of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private http: HttpClient) {}

  currentUser: IUser;

  loginUser(username: string, password: string) {
    var options = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    var loginInfo = { username: username, password: password };

    return this.http
      .post("/api/login", loginInfo, options)
      .pipe(
        tap(d => {
          this.currentUser = <IUser>d["user"];
        })
      )
      .pipe(
        catchError(er => {
          return of(false);
        })
      );
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  checkAuthnticationStatus() {
    this.http
      .get("/api/currentIdentity")
      .pipe(
        tap(d => {
          if (d instanceof Object) {
            this.currentUser = <IUser>d;
          }
        })
      )
      .subscribe();

    // this.http.get('/api/currentIdentity').subscribe(d => {
    //   if (d instanceof Object) {
    //     this.currentUser = <IUser>d;
    //   }
    // });
  }

  updateCurrentUser(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;

    var options = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    return this.http.put(
      `/api/users/${this.currentUser.id}`,
      this.currentUser,
      options
    );
  }

  logout() {
    this.currentUser = undefined;
    var options = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    return this.http.post("/api/logout", {}, options);
  }
}
