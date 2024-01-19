import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { expect } from '@jest/globals';
import { SessionService } from 'src/app/services/session.service';

import { LoginComponent } from './login.component';
import { AuthService } from '../../services/auth.service';
import { LoginRequest } from '../../interfaces/loginRequest.interface';
import { Route, Router } from '@angular/router';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let authServiceMock: any;
  let fixture: ComponentFixture<LoginComponent>;
  let sessionServiceMock : any;
  let loginRequest: LoginRequest;
  let form: FormBuilder;
  let router: Router;
  let spy: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [SessionService],
      imports: [
        RouterTestingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatCardModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule]
    })
      .compileComponents();
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
    function updateForm(userEmail : string, userPassword: string){
    component.form.controls['email'].setValue(userEmail);
    component.form.controls['password'].setValue(userPassword);
  }
  beforeEach(()=> {
    authServiceMock = {login: jest.fn};
    sessionServiceMock = {logIn: jest.fn};
    component = new LoginComponent(authServiceMock, form,router,sessionServiceMock)
  })
  it('', () => {
    updateForm("yoga@studio.com","test!1234");
    expect(component.submit()).toBeTruthy();
    expect(sessionServiceMock.logIn()).toBeTruthy();
   
   } )
});
