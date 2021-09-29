import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { FotoKontoComponent } from './foto-konto/foto-konto.component';
import { InformationComponent } from './information/information.component';
import { SettingComponent } from './setting/setting.component';
import { UserGuard } from './guards/user.guard';


const routes: Routes = [
{path: 'main', component: MainComponent, /*canActivate:[UserGuard]*/},
{path: 'register', component: RegisterComponent},
{path: 'login', component: LoginComponent},
{ path: '', redirectTo: '/login', pathMatch: 'full' },
{path: 'profile', component: ProfileComponent, /* canActivate:[UserGuard]*/},
{
  path: 'profile-edit', 
  component: ProfileEditComponent, 
  //canActivate:[UserGuard],
  children: [

    {
    path: 'image', component: FotoKontoComponent,
    },
    {
      path: 'info', component: InformationComponent,

    },
    {
      path: 'settings', component: SettingComponent,

    },

]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
