import { Component, OnInit, Inject } from "@angular/core";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";
import { TOASTR_TOKEN, IToastr } from "../common";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  userName: any;
  password: any;
  mouseoverLogin: any;
  loginInvalid: boolean;
  constructor(
    private authService: AuthService,
    private router: Router,
    @Inject(TOASTR_TOKEN) private toastr: IToastr
  ) {}

  ngOnInit() {}

  login(formValues) {
    this.authService
      .loginUser(formValues.userName, formValues.password)
      .subscribe(resp => {
        if (!resp) {
          this.loginInvalid = true;
          this.toastr.error("Invalid username or password");
        } else {
          this.router.navigate(["events"]);
        }
      });
  }

  cancel() {
    this.router.navigate(["events"]);
  }
}
