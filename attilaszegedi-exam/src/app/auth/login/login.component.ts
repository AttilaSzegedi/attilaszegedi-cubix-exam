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
  
  loginObj:any={
    email:'',
    userName:'',
    password:'',
  };
  logged=false;
  email?:string;
  password?: string;
  userName?: string;
  isUserExist= undefined;
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
   
    const isUserExist= this.signupUsers.find(m =>m.email==this.loginObj.email && m.password== this.loginObj.password);
    console.log(this.signupUsers);
    if(isUserExist != undefined) {
        this.logged=true;
        localStorage.setItem(`currentUser`,JSON.stringify(this.loginObj));
        this.router.navigate(['/case']);
        localStorage.setItem(`logged`, JSON.stringify(this.logged));
        return isUserExist ;
    }else{
        this.router.navigate(['/login'])
        this.logged=false;
        localStorage.setItem(`logged`, JSON.stringify(this.logged));
        
    }
      
  }

   get isLoggedIn() {
      console.log(this.isUserExist);
      return this.isUserExist !== undefined;
      
    }

   gosignUp(){
    this.router.navigate(['/reg'])
  }

  logout() {
    this.logged=false;
    localStorage.removeItem('currentUser');
 

  }
}