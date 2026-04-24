import { Component } from '@angular/core';
import { NgOptimizedImage } from "@angular/common";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pagina-inicial',
  imports: [NgOptimizedImage, RouterLink],
  standalone: true,
  templateUrl: './pagina-inicial.html',
  styleUrls: ['./pagina-inicial.scss',
  './media-queries.scss' ]
})
export class PaginaInicial {}
