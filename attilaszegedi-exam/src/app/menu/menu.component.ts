import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { NgOptimizedImage } from '@angular/common'
import { Router } from '@angular/router';



@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, NgOptimizedImage],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  actuser= localStorage.getItem('currentUser');
  
  constructor(
    
    private readonly router: Router
  ){ }
  

   logout() {
    this.router.navigate(['/login']);
    localStorage.removeItem('currentUser')
    localStorage.removeItem('logged')
  }

}
