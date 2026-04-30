import { Component, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from "@angular/common";
import { Router, RouterLink} from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {ChangeDetectionStrategy, signal} from '@angular/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

interface Usuario{
  name: string;
  email: string;
  password: string;
}

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
    MatIconModule, 
    ReactiveFormsModule,
    MatSnackBarModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './login.html',
  styleUrls: ['./login.scss', 
    '../pagina-inicial/pagina-inicial.scss'],
})

export class Login implements OnInit {
  
  modo: 'login' | 'cadastro' = 'login';

   hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  
mensagem: string | null = null;
tipoMensagem: 'erro' | 'sucesso' | null = null;
form!: FormGroup;
isLoginMode = true;

constructor(
  private fb: FormBuilder,
  private router: Router,
  private snackBar: MatSnackBar
){}

ngOnInit(): void {
  this.setupForm();
}

setupForm():void{
  this.form = this.fb.group({
    name:[''],
    email:['', [Validators.required, Validators.email]],
    password:['', [Validators.required, Validators.minLength(6)]]
  })
}
toggleMode(): void{
  this.isLoginMode = !this.isLoginMode;
}
getUsuarios(): Usuario[]{
  const dados= localStorage.getItem('usuarios');
  return dados? JSON.parse(dados) : [];
}

salvarUsuarios(lista: Usuario[]):void{
  localStorage.setItem('usuarios', JSON.stringify(lista))
}


limparMensagem() {
  this.mensagem = null;
  this.tipoMensagem = null;
}


private mostrarSnackBar(
  mensagem: string,
  tipo: 'sucesso' | 'erro'
): void {
  this.snackBar.open(mensagem, 'Fechar', {
    duration: 3000,
    horizontalPosition: 'center',
    verticalPosition: 'top',
    panelClass: tipo === 'sucesso'
      ? ['snackbar-sucesso']
      : ['snackbar-erro'],
  });
}

onSubmit(): void {
  if (this.form.invalid) return;

  const { name, email, password } = this.form.value;
  const usuarios = this.getUsuarios();

  if (this.modo === 'login') {
    const usuario = usuarios.find(
      u => u.email === email && u.password === password
    );

    if (usuario) {
      localStorage.setItem('usuarioLogado', JSON.stringify(usuario));
      this.router.navigate(['/']);
    } else {

      this.mostrarSnackBar('E-mail ou senha inválidos!', 'erro');
    }

  } else {
    const usuarioJaExiste = usuarios.some(u => u.email === email);

    if (usuarioJaExiste) {
      this.mostrarSnackBar('Este e-mail já está cadastrado!', 'erro');
      return;
    }

    const novoUsuario = { name, email, password };
    usuarios.push(novoUsuario);
    this.salvarUsuarios(usuarios);

    this.mostrarSnackBar('Cadastro realizado com sucesso!', 'sucesso');

    this.form.reset();
    this.modo = 'login';
  }
}
}



