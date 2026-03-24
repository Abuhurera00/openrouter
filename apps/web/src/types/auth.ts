export interface ApiError {
  success: false;
  message: string;
  error?: string;
}
export interface ApiResponse {
  success: boolean;
  message: string;
  html?: string;
  subject?: string;
  data: any;
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface SignInData {
  email: string;
  password: string;
}

export interface SignUpData {
  email: string;
  password: string;
}

export interface User {
  id: string;
  _id: string;
  email: string;
  createAt?: string;
  updatedAt?: string;
}
export interface AuthResponse {
  success: boolean;
  message: string;
  // data: {
  // token: string;
  user: User;
  // };
}
