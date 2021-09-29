import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { fromEvent, Observable } from 'rxjs';
import { Post } from '../interfaces/post';
import { CommentService } from '../services/comment.service';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  posts: any;
  comments:any;
  onlineEvent: Observable<Event> = fromEvent(window, 'online');
  offlineEvent: Observable<Event> = fromEvent(window, 'offline');

  constructor(private _postService: PostService, private _commentService: CommentService, private swUpdate: SwUpdate, 
    private dbService: NgxIndexedDBService) { }
   
  ngOnInit(): void {
    //this.handleAppConnectivityChanges()
    this.load()
    this.reloadCache();
   
  }

  private handleAppConnectivityChanges():void{
   this.onlineEvent.subscribe(e => {
    this.load();
      // handle online mode
      console.log('Online...');
    });

    this.offlineEvent.subscribe(e => {
      // handle offline mode
      console.log('Offline...');
    });
  }

  load(){
    this._postService.getPosts().subscribe((res)=>{
     
     this.posts = res;
    /* this.posts.forEach((element: Post) => {
      this.dbService.add("posts",[
        {
          title: element.title,
          dateOfPublished: element.dateOfPublished
        }
      ])
     });*/
     
      console.log(this.posts);
    },
    (error)=>{
      console.log(error);
    })
  

  this._commentService.getComment().subscribe((res)=>{
    this.comments = res;
     console.log(this.comments);
   },
   (error)=>{
     console.log(error);
   })
  }

  reloadCache(){
    if(this.swUpdate.isEnabled){
      this.swUpdate.available.subscribe(()=>{
        if(confirm("Es besteht eine neue Version")){
          window.location.reload();
        }
      })
    }
  }

}
