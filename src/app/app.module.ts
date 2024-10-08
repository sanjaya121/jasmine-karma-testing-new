import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { LoginChildComponent } from './components/authentication/login/login-child/login-child.component';
import { GridLayoutDirective } from './custom-directives/grid-layout.directive';
import { SamplePipe } from './custom-pipes/sample.pipe';
import { ResetPaasswordComponent } from './components/authentication/reset-paassword/reset-paassword.component';
import { SignUpFormComponent } from './components/authentication/sign-up-form/sign-up-form.component';
import { PostInterceptor } from './interceptors/post-interceptor';
import { FooterComponent } from './components/common/footer/footer.component';
import { HederComponent } from './components/common/heder/heder.component';
import { HotelsAndResortsComponent } from './components/routes/hotels-and-resorts/hotels-and-resorts.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LoginChildComponent,
    GridLayoutDirective,
    SamplePipe,
    ResetPaasswordComponent,
    SignUpFormComponent,
    FooterComponent,
    HederComponent,
    HotelsAndResortsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:PostInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
