import { Component, OnInit, Output, EventEmitter,  ViewChild, ElementRef } from '@angular/core';
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';
import { NgxIndexedDBService } from 'ngx-indexed-db';


@Component({
  selector: 'app-foto-konto',
  templateUrl: './foto-konto.component.html',
  styleUrls: ['./foto-konto.component.css']
})
export class FotoKontoComponent implements OnInit {

  @Output() getPicture = new EventEmitter<WebcamImage>();
  showWebcam = true;
  isCameraExist = true;
  errors: WebcamInitError[] = [];
  private trigger: Subject<void> = new Subject<void>();
  private nextWebcam: Subject<boolean | string> = new Subject<boolean | string>();
  currentImage:any = "https://img-cdn.tnwcdn.com/image?fit=1200%2C900&height=900&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2020%2F04%2Ffree-photo-stock-photography-copyright.jpg&signature=dddf450c9db2544b3afde89b5254c73b"
  isChanging = false;


  @ViewChild("video")
  public video: ElementRef = {} as ElementRef;

  @ViewChild("canvas")
  public canvas: ElementRef = {} as ElementRef;


  
  constructor(private dbService: NgxIndexedDBService) { }

  ngOnInit(): void {
    WebcamUtil.getAvailableVideoInputs()
      .then((mediaDevices: MediaDeviceInfo[]) => {
        this.isCameraExist = mediaDevices && mediaDevices.length > 0;
      });
  }
  public ngAfterViewInit() {
    this.dbService.getAll("image").subscribe((imgs:any)=>{
      console.log(imgs)
      this.currentImage = imgs[imgs.length-1].url;
    })
  }

  public capture() {
    var context = this.canvas.nativeElement.getContext("2d").drawImage(this.video.nativeElement, 0, 0, 640, 480);
    this.currentImage = this.canvas.nativeElement.toDataURL("image/png");
    this.dbService.add('image', {
    url: this.currentImage,
      }).subscribe((key) => {
        console.log('key: ', key);
      });
  }
  changes(){
    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
          this.video.nativeElement.srcObject = stream;
          this.video.nativeElement.play();
      });
    }
    this.isChanging = !this.isChanging;
  }
  
 /* takeSnapshot(): void {
    this.trigger.next();
  }
 
  onOffWebCame() {
    this.showWebcam = !this.showWebcam;
    
  }

  handleInitError(error: WebcamInitError) {
    this.errors.push(error);
  }

  changeWebCame(directionOrDeviceId: boolean | string) {
    this.nextWebcam.next(directionOrDeviceId);
  }

  handleImage(webcamImage: WebcamImage) {
    this.getPicture.emit(webcamImage);
    this.showWebcam = false;
  }

  get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  get nextWebcamObservable(): Observable<boolean | string> {
    return this.nextWebcam.asObservable();
  }
*/
  stopVideo(){
    this.video.nativeElement.pause();
    this.video.nativeElement.currentTime = 0;
    this.video.nativeElement.srcObject = null;
    
  }
  hide(){
    this.isChanging = !this.isChanging;
  }


}
