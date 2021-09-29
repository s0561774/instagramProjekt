import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public notificationURL = "http://localhost:3000/app/subscribe"

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User>{
    return this.http.get<User>('http://localhost:3000/user');

   }

   registration(data: any){
     data = JSON.stringify(data);
     data = JSON.parse(data);
     console.log(data);
    return this.http.post<User>('http://localhost:3000/user', data);
   }


   login(email:string, password:string){
    let url = `http://localhost:3000/user/login/${email}/${password}`;
    console.log(url);
   return this.http.get<User>(url);
  }

  postSubscription(sub: PushSubscription){
    return this.http.post(this.notificationURL, sub).pipe();
  }

}
