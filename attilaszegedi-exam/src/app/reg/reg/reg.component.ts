import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reg',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule, FormsModule],
  templateUrl: './reg.component.html',
  styleUrl: './reg.component.scss'
})

export class RegComponent implements OnInit{
  signupUsers: any[]=[];
  signupObj:any={
    userName:'',
    email:'',
    password:'',
  };

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
 
  signUp(){
    this.signupUsers.push(this.signupObj);
    localStorage.setItem('signUpUsers',JSON.stringify(this.signupUsers));
    this.signupObj={
      userName:'',
      email:'',
      password:''
      
     
    };
    this.router.navigate(['/login']);
  }

}






