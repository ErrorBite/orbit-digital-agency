export interface Project {
  _id?: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  featured: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Service {
  _id?: string;
  title: string;
  description: string;
  iconName: string;
  priceRange: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Inquiry {
  _id?: string;
  name: string;
  email: string;
  company: string;
  message: string;
  status: 'new' | 'read' | 'replied';
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
}
