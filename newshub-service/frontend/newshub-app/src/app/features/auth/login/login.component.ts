import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormField, form, required, email, minLength } from '@angular/forms/signals';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/auth/auth.service';
import { LoginRequest } from '../../../core/models/auth.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormField,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    RouterLink,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);

  readonly hidePassword = signal(true);

  readonly loginModel = signal<LoginRequest>({
    username: '',
    password: '',
  });

  readonly loginForm = form(this.loginModel, (schema) => {
    required(schema.username, { message: 'Введите имя пользователя' });
    minLength(schema.username, 3, { message: 'Минимум 3 символа' });

    required(schema.password, { message: 'Введите пароль' });
    minLength(schema.password, 4, { message: 'Минимум 4 символа' });
  });

  togglePasswordVisibility(event: MouseEvent): void {
    event.preventDefault();
    this.hidePassword.update((v) => !v);
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    if (this.loginForm().invalid()) return;

    this.auth.login(this.loginModel()).subscribe({
      next: () => this.router.navigate(['/stories']),
      error: (err) => console.error('Ошибка входа', err),
    });
  }
}
