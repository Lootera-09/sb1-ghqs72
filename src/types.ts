export interface Product {
  id: number;
  name: string;
  price: number;
  category: 'vegetable' | 'fruit' | 'drink';
  image: string;
  seller: string;
  stock: number;
}

export interface Seller {
  id: number;
  name: string;
  rating: number;
  products: number[];
}