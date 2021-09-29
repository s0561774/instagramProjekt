import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

declare const window: any;

@Injectable({
  providedIn: 'root'
})
export class OnlineOfflineService {

  private internalConnectionChanged = new Subject<boolean> ();

  get connectionChanged(){
    return this.internalConnectionChanged.asObservable();
  }

  get isOnline(){
    return !! window.navigator.online;
  }

  constructor() { 
    window.addEventListener('online', ()=> console.log('online'));
    window.addEventListener('offline', ()=> console.log('offline'));
  }

  private updateOnlineStatus(){
    this.internalConnectionChanged.next(window.navigator.online);
  }

}
