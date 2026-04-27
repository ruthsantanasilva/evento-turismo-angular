import { Component } from '@angular/core';
import { NgOptimizedImage } from "@angular/common";
import { RouterLink } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-pagina-inicial',
  imports: [NgOptimizedImage, RouterLink, MatSidenavModule],
  standalone: true,
  templateUrl: './pagina-inicial.html',
  styleUrls: ['./pagina-inicial.scss',
  './media-queries.scss' ]
})
export class PaginaInicial {}
