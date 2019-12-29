import { Injectable } from "@angular/core";
import { IUser } from "./user.model";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor() {}

  currentUser: IUser;

  loginUser(username: string, password: string) {
    this.currentUser = {
      id: 1,
      userName: username,
      firstName: "Aris",
      lastName: "Papa"
    };
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  updateCurrentUser(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }
}
