import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: 'Fresh Oranges',
    price: 4.99,
    category: 'fruit',
    image: 'https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&q=80&w=500',
    seller: 'Fresh Fields Farm',
    stock: 50
  },
  {
    id: 2,
    name: 'Organic Spinach',
    price: 2.99,
    category: 'vegetable',
    image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&q=80&w=500',
    seller: 'Green Valley Produce',
    stock: 30
  },
  {
    id: 3,
    name: 'Fresh Pressed Orange Juice',
    price: 5.99,
    category: 'drink',
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&q=80&w=500',
    seller: 'Natural Drinks Co',
    stock: 20
  },
  {
    id: 4,
    name: 'Red Apples',
    price: 3.99,
    category: 'fruit',
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&q=80&w=500',
    seller: 'Fresh Fields Farm',
    stock: 40
  },
  {
    id: 5,
    name: 'Carrots',
    price: 1.99,
    category: 'vegetable',
    image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&q=80&w=500',
    seller: 'Green Valley Produce',
    stock: 60
  }
];