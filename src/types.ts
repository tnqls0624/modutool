// Cloudflare D1 바인딩 타입
export type Bindings = {
  DB: D1Database;
}

// AI 툴 데이터 타입
export interface AITool {
  id: string;
  name: string;
  icon?: string;
  description: string;
  url?: string;
  gradient?: string;
  categories: string[]; // JSON 배열
  priceTypes: string[]; // JSON 배열
  korean: boolean;
  features?: string[]; // JSON 배열
  useCases?: string[]; // JSON 배열
  targetAudience?: string[]; // JSON 배열
  similarTools?: string[]; // JSON 배열
  pricingPlans?: any[]; // JSON 배열
  status: 'active' | 'inactive' | 'draft';
  createdAt?: string;
  updatedAt?: string;
}

// DB Row 타입 (JSON 문자열 상태)
export interface AIToolRow {
  id: string;
  name: string;
  icon: string | null;
  description: string;
  url: string | null;
  gradient: string | null;
  categories: string; // JSON string
  priceTypes: string; // JSON string
  korean: number; // SQLite boolean (0 or 1)
  features: string | null; // JSON string
  useCases: string | null; // JSON string
  targetAudience: string | null; // JSON string
  similarTools: string | null; // JSON string
  pricingPlans: string | null; // JSON string
  status: string;
  createdAt: string;
  updatedAt: string;
}

// API 응답 타입
export interface APIResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}
