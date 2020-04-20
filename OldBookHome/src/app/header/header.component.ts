import { Component, OnInit } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { LoginServeiceService } from '../share/login-serveice.service';
import { RegistrationService } from '../share/registration.service';
import { RegistrationComponent } from '../registration/registration.component';
import { JavaServiceService } from '../java-service.service';
import { AuthenticationService } from '../service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cartshow:boolean=false;
  constructor(public dialog: MatDialog,public loginService:LoginServeiceService,public registrationService:RegistrationService,private javaCallObj:JavaServiceService,private hasLogin:AuthenticationService,private router:Router) { }
  fun(){
    this.cartshow=true;
    console.log("fuction call");
  }
  ngOnInit() {
    // this.isRole=this.javaCallObj.hasRole();
    console.log(this.hasLogin.isUserLoggedIn());
  }

  deliveryRequestFun(){
      console.log("hello raj..........");
      this.router.navigate(["/deliveryRequest"]);
  }

  login(){
    this.loginService.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "40%";
    this.dialog.open(LoginComponent,dialogConfig);
  }
  registration(){
    this.registrationService.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(RegistrationComponent,dialogConfig);
  }
  logOut(){
    this.hasLogin.logOut();
    sessionStorage.removeItem('userRole');
    this.router.navigate(["/mainslider"]);

  }
  
}
