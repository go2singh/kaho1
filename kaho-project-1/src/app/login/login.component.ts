import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

email: string;
password: string;


  constructor(private router: Router) { }

  ngOnInit() {
  }

/*
  login() {
    if (this.email === 'sauravsingh@gmail.com' && this.password === 'password') {
    this.router.navigate(['menu']);
    } else {
    alert('Invalid credentials.');
    }
    }*/

  login() {
    if (this.email === 'sauravsingh@gmail.com' && this.password === 'password') {
      this.router.navigate(['login/menu']);
    } else {
    alert('Invalid credentials.');
    }
    }
}
