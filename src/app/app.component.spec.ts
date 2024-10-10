import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { SignUpFormComponent } from './components/authentication/sign-up-form/sign-up-form.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginChildComponent } from './components/authentication/login/login-child/login-child.component';


describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      RouterTestingModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule
    ],
    declarations: [
      AppComponent,
      HomeComponent,
      LoginComponent,
      LoginChildComponent,
      SignUpFormComponent
    ]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // it(`should have as title 'jasmine-karma-testing'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('jasmine-karma-testing');
  // });


});
