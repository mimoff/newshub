export interface LoginRequest {
  username: string;
  password: string;
}

export interface RegisterRequest {
  username: string;
  password: string;
  confirmPassword: string; // используется только на клиенте для валидации
}

export interface AuthResponse {
  token: string;
}
