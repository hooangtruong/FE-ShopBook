export interface Product {
  _id: string;
  title: string;
  description: string;
  urlImage: string;
  category: string;
  price: number;
  quantity: number;
  isHot: boolean;
  createdAt: string;
}

export interface ProductPost {
  title?: string;
  description?: string;
  urlImage?: string;
  category?: string;
  price?: number;
  quantity?: number;
  isHot?: boolean;
}
