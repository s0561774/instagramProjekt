import { Component, OnInit } from '@angular/core';
import { SwPush, SwUpdate } from '@angular/service-worker';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Instagram';

  readonly VAPID_KEY = 'BEr-7e2f9MinBL_iz1HM9JGG8sVlS_xoWjLIm1x53j864zXpCAgtD5hIt4SjB9feWY7b4SxYB0wGuoGwU3DOB-Q';
  constructor(private swUpdate: SwUpdate, private swPush: SwPush, private _us:UserService ){}

  ngOnInit(){
    this.subscribeToNotification();
  }
  subscribeToNotification(){
    if(this.swUpdate.isEnabled){
      this.swPush.requestSubscription({
        serverPublicKey:this.VAPID_KEY
      })
      .then(sub=>{
        this._us.postSubscription(sub).subscribe()
      })
    }
  }
}
