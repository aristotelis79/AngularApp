import { Component, OnInit, Inject } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";
import { IToastr, TOASTR_TOKEN } from "../common/toast.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  constructor(
    private authService: AuthService,
    private router: Router,
    @Inject(TOASTR_TOKEN) private toastr: IToastr
  ) {}

  ngOnInit() {
    let firstName = new FormControl(this.authService.currentUser.firstName, [
      Validators.required,
      Validators.pattern("[a-zA-Z].*")
    ]);
    let lastName = new FormControl(
      this.authService.currentUser.lastName,
      Validators.required
    );
    this.profileForm = new FormGroup({
      firstName: firstName,
      lastName: lastName
    });
  }

  saveProfile(formValues) {
    if (!this.profileForm.valid) return;

    this.authService
      .updateCurrentUser(formValues.firstName, formValues.lastName)
      .subscribe(() => {
        this.toastr.success("Profile Saved");
      });
  }

  validateField(field: string) {
    return (
      this.profileForm.controls[field].invalid &&
      this.profileForm.controls[field].touched
    );
  }

  validateFieldError(field: string) {
    let validateField = this.validateField(field);
    if (validateField && this.profileForm.controls[field].errors.required)
      return "Required";

    if (validateField && this.profileForm.controls[field].errors.pattern)
      return "Must start with letter";

    return null;
  }

  logout() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(["/user/login"]);
    });
  }

  cancel() {
    this.router.navigate(["events"]);
  }
}
