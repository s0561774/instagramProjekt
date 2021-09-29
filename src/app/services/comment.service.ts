import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from'../interfaces/comment';


@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  getComment(): Observable<Comment>{
    return this.http.get<Comment>('http://localhost:3000/comments');
   }
}
