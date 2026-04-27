import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from "@angular/common";
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {ChangeDetectionStrategy, signal} from '@angular/core';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, 
    NgOptimizedImage, 
    CommonModule, 
    FormsModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatButtonModule, 
    MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './login.html',
  styleUrls: ['./login.scss', 
    '../pagina-inicial/pagina-inicial.scss'],
  
  
})

export class Login {
  
  modo: 'login' | 'cadastro' = 'login';

   hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

}
