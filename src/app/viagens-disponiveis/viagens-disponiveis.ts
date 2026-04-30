import { Component, signal } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LeftSidebarComponent } from '../menu-esquerda/menu-esquerda';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';


@Component({
  selector: 'app-viagens-disponiveis',
  standalone: true,
  imports: [
    LeftSidebarComponent,
    NgOptimizedImage,
    RouterLink,
    RouterOutlet,
    MatSidenavModule,
    MatSnackBarModule, 
    MatIconModule, 
    MatTooltipModule, 
    CommonModule, 
    MatTableModule
  ],
  templateUrl: './viagens-disponiveis.html',
  styleUrls: ['./viagens-disponiveis.scss', './media-queries.scss'],
})
export class ViagensDisponiveis {

  isLeftSidebarCollapsed = signal<boolean>(true);

  constructor(
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  /* =========================
     CONTROLE DO MENU LATERAL
     ========================= */
  changeIsLeftSidebarCollapsed(value: boolean): void {
    this.isLeftSidebarCollapsed.set(value);
  }

  /* =========================
     LISTA DE VOOS (MOCK)
     ========================= */
  voos = [
    {
      ida: {
        hora: '17:40 – 07:10+1',
        rota: 'GRU São Paulo – LIS Lisboa',
        duracao: '9h 30min'
      },
      volta: {
        hora: '09:40 – 15:40',
        rota: 'LIS Lisboa – GRU São Paulo',
        duracao: '10h'
      },
      companhia: 'LATAM Airlines',
      preco: 5307,
      tarifa: 'Light'
    },
    {
      ida: {
        hora: '18:20 – 06:50+1',
        rota: 'GRU São Paulo – LIS Lisboa',
        duracao: '9h 10min'
      },
      volta: {
        hora: '10:00 – 16:00',
        rota: 'LIS Lisboa – GRU São Paulo',
        duracao: '10h'
      },
      companhia: 'LATAM Airlines',
      preco: 5499,
      tarifa: 'Light'
    }
  ];

  /* =========================
     BUSCAR VIAGENS
     ========================= */
  buscarViagens(): void {
    const usuarioLogado = localStorage.getItem('usuarioLogado');

    if (usuarioLogado) {
      this.router.navigate(['/viagens']);
    } else {
      this.snackBar.open(
        'Faça login para buscar viagens disponíveis',
        'Fechar',
        {
          duration: 3000,
          verticalPosition: 'top',
          panelClass: ['snackbar-erro'],
        }
      );
      this.router.navigate(['/login']);
    }
  }

  /* =========================
     LOGOUT
     ========================= */
  logout(): void {
    localStorage.removeItem('usuarioLogado');

    this.snackBar.open(
      'Você saiu da sua conta com sucesso',
      'Fechar',
      {
        duration: 3000,
        verticalPosition: 'top',
        panelClass: ['snackbar-sucesso'],
      }
    );

    this.router.navigate(['/']);
  }
}