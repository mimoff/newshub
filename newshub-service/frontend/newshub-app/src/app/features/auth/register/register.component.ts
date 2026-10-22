import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormField, form, required, minLength, validate } from '@angular/forms/signals';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/auth/auth.service';

interface RegisterModel {
  username: string;
  password: string;
  confirmPassword: string;
}

@Component({
  selector: 'app-register',
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
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent {
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);

  readonly hidePassword = signal(true);
  readonly hideConfirm = signal(true);

  readonly registerModel = signal<RegisterModel>({
    username: '',
    password: '',
    confirmPassword: '',
  });

  readonly registerForm = form(this.registerModel, (schema) => {
    required(schema.username, { message: 'Введите имя пользователя' });
    minLength(schema.username, 3, { message: 'Минимум 3 символа' });

    required(schema.password, { message: 'Введите пароль' });
    minLength(schema.password, 6, { message: 'Минимум 6 символов' });

    required(schema.confirmPassword, { message: 'Подтвердите пароль' });

    // Кросс-полевая валидация: пароли должны совпадать
    validate(schema.confirmPassword, ({ value, valueOf }) => {
      if (value() !== valueOf(schema.password)) {
        return { kind: 'passwordMismatch', message: 'Пароли не совпадают' };
      }
      return null;
    });
  });

  togglePasswordVisibility(field: 'password' | 'confirm', event: MouseEvent): void {
    event.preventDefault();
    if (field === 'password') this.hidePassword.update((v) => !v);
    else this.hideConfirm.update((v) => !v);
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    if (this.registerForm().invalid()) return;

    this.auth.register(this.registerModel()).subscribe({
      next: () => this.router.navigate(['/stories']),
      error: (err) => console.error('Ошибка регистрации', err),
    });
  }
}
