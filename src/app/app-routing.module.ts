import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { authGuard } from './authgaurds/auth.guard';
import { ResetPaasswordComponent } from './components/authentication/reset-paassword/reset-paassword.component';
import { SignUpFormComponent } from './components/authentication/sign-up-form/sign-up-form.component';
import { HotelsAndResortsComponent } from './components/routes/hotels-and-resorts/hotels-and-resorts.component';

const routes: Routes = [
  {
    path:"",component:HomeComponent,
    
  },
  {
    path:'login', component:LoginComponent,canActivate:[authGuard],
  },
  {
    path:'reset',component:ResetPaasswordComponent
  },
  {
    path:'signup',component:SignUpFormComponent
  },
  {
    path:'hotels-and-resorts',component:HotelsAndResortsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
