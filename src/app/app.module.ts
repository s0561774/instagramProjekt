import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import { HttpClientModule} from '@angular/common/http';
import { WebcamModule } from 'ngx-webcam';
import { FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { DBConfig, NgxIndexedDBModule } from 'ngx-indexed-db';
import {NgxWebstorageModule} from 'ngx-webstorage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { MainComponent } from './main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDialogModule} from '@angular/material/dialog';
import { FotoKontoComponent } from './foto-konto/foto-konto.component';
import { InformationComponent } from './information/information.component';
import { SettingComponent } from './setting/setting.component';
import { UserGuard } from './guards/user.guard';

const dbConfig: DBConfig  = {
  name: 'MyDb',
  version: 1,
  objectStoresMeta: [{
    store: 'image',
    storeConfig: { keyPath: 'id', autoIncrement: true },
    storeSchema: [
        { name: 'url', keypath: 'url', options: { unique: false } },
      ]
    },
    {
      store: 'posts',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'title', keypath: 'title', options: { unique: false } },
        { name: 'dateOfPublished', keypath: 'dateOfPublished', options: { unique: false } },
        { name: 'imag', keypath: 'imag', options: { unique: false } },
      ]
    }

  ]
};





@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    ProfileEditComponent,
    FotoKontoComponent,
    InformationComponent,
    SettingComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatDividerModule,
    HttpClientModule,
    MatMenuModule,
    ReactiveFormsModule,
    MatIconModule,
    MatTabsModule,
    MatGridListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    FormsModule,
    MatSnackBarModule,
    NgxIndexedDBModule.forRoot(dbConfig),
    WebcamModule,
    MatSidenavModule,
    NgxWebstorageModule.forRoot(),
    MatDialogModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'

    })
  ],
 providers: [UserGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
