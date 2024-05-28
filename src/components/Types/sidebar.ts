import { Product } from "./product";

export interface CartSidebarProps {
  cartOpen: boolean;
  setCartOpen: (open: boolean) => void;
  cartItems: Product[];
  removeFromCart: (productId: string) => void;
}
