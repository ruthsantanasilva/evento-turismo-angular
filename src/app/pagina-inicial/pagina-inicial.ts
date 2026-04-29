import { Component, HostListener, OnInit, signal } from '@angular/core';
import { NgOptimizedImage } from "@angular/common";
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LeftSidebarComponent } from '../menu-esquerda/menu-esquerda';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LeftSidebarComponent, 
    NgOptimizedImage, RouterLink, RouterOutlet, MatSidenavModule],
  templateUrl: './pagina-inicial.html',
  styleUrls: ['./pagina-inicial.scss',
    './media-queries.scss'],
})
export class PaginaInicial {
  isLeftSidebarCollapsed = signal<boolean>(true);

changeIsLeftSidebarCollapsed(value: boolean): void {
    this.isLeftSidebarCollapsed.set(value);
  }

}