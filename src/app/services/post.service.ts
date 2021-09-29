import { UniqueSelectionDispatcher } from '@angular/cdk/collections';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Dexie from 'dexie';
import { Observable } from 'rxjs';
import { Post } from '../interfaces/post';
import { OnlineOfflineService } from './online-offline.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  
  private db:any;

  private posts: Post[] = [];

  constructor(private http: HttpClient, private readonly onlineOfflineService:OnlineOfflineService) {
    this.subscribeToEvents(onlineOfflineService); 
    this.createDatabase();
   }

  getPosts(): Observable<Post>{
   return this.http.get<Post>('http://localhost:3000/posts');
  }

  addPost(obj:any){
    let post: Post = { title: obj.title, dateOfPublished: obj.dateOfPublished, id: new Date().getMilliseconds()}
    this.posts.push(post);
    if(!this.onlineOfflineService.isOnline){
      this.addToIndexedDB(post);
    }
    return this.http.post<Post>('http://localhost:3000/posts', obj);
    
  }

  private subscribeToEvents(onlineOfflineService: OnlineOfflineService){
    onlineOfflineService.connectionChanged.subscribe(online => {
      if(online){
        console.log('online');
      } else{
        console.log('offline')
      }
    });
  }

  private createDatabase(){
    this.db = new Dexie('MyPostData');
    this.db.version(1).stores({posts: 'id, title, dateOfPublished, photos'})
  }

  private addToIndexedDB(post: Post){
    this.db.posts.add(post).then(async ()=> {
      const allPosts: Post[] = await this.db.posts.toArray();
      console.log('Saved in DB', allPosts)
    }).catch((e:any) =>{
      console.error(e);
    })
  }

  private async sendItemFromIndexedDB(){
    const allPosts: Post[] = await this.db.posts.toArray();
    allPosts.forEach((item:Post)=>{
      this.db.posts.delete(item.id).then(()=>{
        console.log(` item $(item.id) sent and deleted`)
      })
    })
  }

}
