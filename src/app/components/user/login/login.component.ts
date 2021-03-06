import { Component, OnInit,ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from "../../../services/user.service.client";
import {Routes, RouterModule,ActivatedRoute,Router} from "@angular/router";
import {SharedService} from "../../../services/shared.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('f') loginForm: NgForm;
  //properties
  username: string;
  password: string;
  formSubmitted: boolean;
  errorFlag: boolean;
  errorMsg = 'Invalid username or password !';
  constructor(private userService: UserService,private route: ActivatedRoute,
            private router: Router,private sharedService : SharedService) {}

  ngOnInit() { 

    if(this.userService.loggedIn()){
      this.router.navigate(['/profile']);
    }

  }
  login() {
      this.formSubmitted = true;
      // fetching data from loginForm
       this.username = this.loginForm.value.username;
       this.password = this.loginForm.value.password;
       //validation
       if(this.username == ''|| this.password == ''){
        this.errorFlag = true;
        this.errorMsg = 'username and password are mandatory';
       }else{
        this.errorFlag = false;
        // calling client side userservice to send login information
       this.userService.login(this.username, this.password)
         .subscribe(
           (data: any) => {
               this.sharedService.user = data;
               this.router.navigate(['/profile'])},
           (error: any) => {
            this.errorFlag = true;
            this.errorMsg = 'Invalid username or password !'
               console.log(error);
           }
         );
       }       

    }
}
