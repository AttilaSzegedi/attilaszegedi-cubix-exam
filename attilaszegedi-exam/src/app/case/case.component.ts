import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';


@Component({
  selector: 'app-case',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatBadgeModule],
  templateUrl: './case.component.html',
  styleUrl: './case.component.scss'
})
export class CaseComponent {
  
  casetitle = 'case -attilaszegedi-exam';
  country ="Hungary";
  population= 12345;
  confirmed=10;

  
}
