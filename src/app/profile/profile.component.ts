import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @ViewChild("video") public video: any;

  constructor() { }

  ngOnInit(): void {
  }

   permissions(){

    //navigator.getUserMedia = (navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia)

    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia()){
      try {
        
        navigator.mediaDevices.getUserMedia({video: true, audio:true}).then(stream => {
          this.video.nativeElement.srcObject = stream;
          this.video.nativeElement.play()
        })
        
      } catch (error) {
        console.log(error)
      }
    }
  }

  async takePicture(){

    await this.permissions();
    
  }

}
