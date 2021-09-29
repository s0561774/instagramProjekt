import {  Component, OnInit} from '@angular/core';
import { Observable, Subject } from 'rxjs';


@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {
 
  

  constructor() { }

  ngOnInit(): void {
   
     
  }

}

/*@Component({
  selector: 'dialog-overview',
  templateUrl: 'dialog-overview.html',
})


 export class DialogOverview {
  @Output() getPicture = new EventEmitter<WebcamImage>();

  showWebcam = true;
  isCameraExist = true;
  errors: WebcamInitError[] = [];

  private trigger: Subject<void> = new Subject<void>();
  private nextWebcam: Subject<boolean | string> = new Subject<boolean | string>();
  constructor (public dialogRef: MatDialogRef<DialogOverview>){}

  onNoClick(): void {
    this.dialogRef.close();
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
} */


