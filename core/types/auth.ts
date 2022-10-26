export interface User {
  id: string;
  name: string;
  phone_number: string;
  role: string;
}

export interface UserResponse {
  user: User;
  token: string;
}

export interface LoginRequest {
  phone_number: string;
  password: string;
}
