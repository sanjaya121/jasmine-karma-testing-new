import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LoginChildComponent } from './components/login/login-child/login-child.component';
import { GridLayoutDirective } from './custom-directives/grid-layout.directive';
import { SamplePipe } from './custom-pipes/sample.pipe';
import { ResetPaasswordComponent } from './components/reset-paassword/reset-paassword.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LoginChildComponent,
    GridLayoutDirective,
    SamplePipe,
    ResetPaasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
