import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';



import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent implements OnInit {
  signupUsers: any[]=[];
  signupObj:any={
    userName:'',
    email:'',
    password:'',
  };
  loginObj:any={
    email:'',
    userName:'',
    password:'',
  };
  logged=false;
  email?:string;
  password?: string;
  userName?: string;
  
  constructor(

    private readonly router: Router,

  ) {}

  ngOnInit(): void {
   const localData= localStorage.getItem('signUpUsers');
   
   if(localData != null){
      this.signupUsers= JSON.parse(localData);
      
   }
   
  }

  login() {
   
    const isUserExist= this.signupUsers.find(m =>m.userName==this.loginObj.userName && m.password== this.loginObj.password);
    console.log(this.signupUsers);
    if(isUserExist != undefined) {
        this.logged=true;
        localStorage.setItem(`currentUser`,JSON.stringify(this.loginObj));
        this.router.navigate(['/case']);
        
        return isUserExist ;
    }else{
        this.router.navigate(['/login'])
        this.logged=false;
        
       

    }
      
    
  }

   get isLoggedIn() {
      return this.logged !== undefined;
    }

  

  signUp(){
    this.signupUsers.push(this.signupObj);
    localStorage.setItem('signUpUsers',JSON.stringify(this.signupUsers));
    this.signupObj={
      userName:'',
      email:'',
      password:''
    };
  }

  logout() {
    this.logged=false;
    localStorage.removeItem('currentUser');
 

  }
}