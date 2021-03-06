import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = ''
  password = ''
  invalidLogin = false
isLogged;
  constructor(private router: Router,
    private loginservice: AuthenticationService,
    private service: AppService) { }

  ngOnInit() {
  }

  Login() {
    this.loginservice.authenticate(this.username,this.password).subscribe(data=>{
   this.service.isLoggedIn(true);
   this.router.navigate(['/home']);
   this.invalidLogin = false;
 })
};

logout(){
  this.service.isLoggedIn(false);
  this.router.navigate(['/login']);
}

}
