import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './authgaurds/auth.guard';
import { ResetPaasswordComponent } from './components/reset-paassword/reset-paassword.component';

const routes: Routes = [
  {
    path:"",component:HomeComponent,
    
  },
  {
    path:'login', component:LoginComponent,canActivate:[authGuard],
  },
  {
    path:'reset',component:ResetPaasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
