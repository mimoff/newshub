import { Injectable, signal, computed, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { LoginRequest, AuthResponse } from '../models/auth.model';
import {environment} from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly http = inject(HttpClient);

  private readonly _token = signal<string | null>(localStorage.getItem('token'));
  private readonly _role = signal<string | null>(localStorage.getItem('role'));

  private apiUrl = environment.apiUrl;
  readonly token = this._token.asReadonly();
  readonly role = this._role.asReadonly();
  readonly isLoggedIn = computed(() => !!this._token());
  readonly isAdmin = computed(() => this._role() === 'ADMIN');

  login(credentials: LoginRequest) {
    return this.http
      .post<AuthResponse>(this.apiUrl + 'api/auth/login', credentials)
      .pipe(tap((res) => this.setSession(res.token, this.extractRole(res.token))));
  }

  register(data: LoginRequest) {
    return this.http.post<AuthResponse>(this.apiUrl+'api/auth/register', data).pipe(
      tap((res) => this.setSession(res.token, 'USER')), // новые пользователи всегда USER
    );
  }

  logout(): void {
    this._token.set(null);
    this._role.set(null);
    localStorage.removeItem('token');
    localStorage.removeItem('role');
  }

  private setSession(token: string, role: string): void {
    this._token.set(token);
    this._role.set(role);
    localStorage.setItem('token', token);
    localStorage.setItem('role', role);
  }

  /** Декодирует payload JWT и извлекает роль (claim "role"). */
  private extractRole(token: string): string {
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.role ?? 'USER';
    } catch {
      return 'USER';
    }
  }
}
