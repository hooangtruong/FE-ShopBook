export interface CartItem {
  _id: string;
  title: string;
  description?: string;
  urlImage: string;
  category: string;
  price?: number;
  quantity: number;
  isHot?: boolean;
  total: number;
}
export type CartContextType = {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
};
