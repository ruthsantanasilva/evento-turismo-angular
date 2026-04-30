import { Routes } from '@angular/router';
import { PaginaInicial } from './pagina-inicial/pagina-inicial';
import { Login } from './login/login';
import { ViagensDisponiveis } from './viagens-disponiveis/viagens-disponiveis';

export const routes: Routes = [
  { path: '', component: PaginaInicial },
  { path: 'login', component: Login },
  { path: 'viagens', component: ViagensDisponiveis },
];

