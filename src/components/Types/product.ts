export interface Product {
  id: string;
  name: string;
  price: number;
  photo: string;
  description: string;
}

export interface ProductCardProps {
  product: Product;
  addToCart: (product: Product) => void;
}
