import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';


  userForm = new FormGroup({
    password: new FormControl('', Validators.required),
    emailOrphone: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    fullname: new FormControl('', Validators.min(6))
  });
  
   user: User;

  constructor( private _userService: UserService, private _snackBar: MatSnackBar) {
    this.user = {emailOrphone:"", fullname:"", password:"",username:""}
   }

  ngOnInit(): void {
  }

  onSubmit(f:any){

    this.user.fullname = f.fullname;
    this.user.password = f.password;
    this.user.username = f.username;
    this.user.emailOrphone = f.emailOrphone;
    
   
    this._userService.registration(this.user).subscribe((res)=>{
      this.openSnackBar();
      console.log(res)
      this.leer()
    },
    (err)=>{
      console.error(err);
      this.fehlerSnackBar();
    })
  }

  leer(){
    this.userForm.get("emailOrphone")?.reset();
    this.userForm.get("password")?.reset();
    this.userForm.get("username")?.reset();
    this.userForm.get("fullname")?.reset();
  }

  openSnackBar() {
    this._snackBar.open('Anmeldung mit Erfolg!!', 'Schließen', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration:2000
    });
  }
  fehlerSnackBar() {
    this._snackBar.open('Eine Fehler wurde aufgetreten!!', 'Schließen', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration:2000,
      panelClass:['fehler']
    });
  }

}
