import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from "@angular/common";
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, NgOptimizedImage, CommonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.scss', 
    '../pagina-inicial/pagina-inicial.scss']
  
})

export class Login {
  
  modo: 'login' | 'cadastro' = 'login';

  mostrarLogin() {
    this.modo = 'login';
  }

  mostrarCadastro() {
    this.modo = 'cadastro';
  }

}
