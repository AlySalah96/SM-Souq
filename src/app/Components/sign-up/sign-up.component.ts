import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import{AuthService} from 'src/app/Services/auth.Service'
import { stringify } from '@angular/compiler/src/util';
import { json } from 'express';
import{Iuser} from 'src/app/Interfaces/Iuser';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  User:Iuser;
  constructor(private _AuthService:AuthService,private _Router:Router) { }
  
  ngOnInit(): void {
    this.User={
      Name:'',
      password:'',
      confirmpassword:''
    }
  }
  signUp()
  {
   
   this._AuthService.RegisterUser(this.User).subscribe
   (
     res=>
     {
      alert("Plz login !") 
      this._Router.navigate(["/Login"]);
     },
     err=>alert(err)
   ) 
  }
}
