export interface Order {
  _id: string;
  username: string;
  product: ProductOrder[];
  totalOrder: number;
  createdAt: string;
  updatedAt?: string;
}

export interface ProductOrder {
  id: string;
  quantity: number;
  total: number;
}
