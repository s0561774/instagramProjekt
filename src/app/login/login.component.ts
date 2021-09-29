import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';
import { UserService } from '../services/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {LocalStorageService} from 'ngx-webstorage';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'top';


  loginForm = new FormGroup({
    password: new FormControl('', Validators.required),
    emailOrphoneOrusername: new FormControl('', Validators.required),
  });

  constructor( private _userService: UserService, private storage:LocalStorageService, private _snackBar: MatSnackBar, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(f:any){
   
    this._userService.login(f.emailOrphoneOrusername, f.password).subscribe((res:User)=>{
      console.log(res, "user connected")
      this.storage.clear('user')
      this.storage.store('user', res.username);
      this.router.navigate(['/main']);
      
    },(error)=>{
      this.fehlerSnackBar()
    })
  }

  leer(){
    this.loginForm.get("emailOrphoneOrusername")?.reset();
    this.loginForm.get("password")?.reset();
    
  }

  fehlerSnackBar() {
    this._snackBar.open('Eine Fehler wurde aufgetreten!!', 'Schließen', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration:7000,
      panelClass:['fehler']
    });
  }

  private handleError(error: any) { 
    let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
      this.loginForm.reset()
      this.fehlerSnackBar()
  }
  


}
