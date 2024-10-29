import React from 'react';
import { Star } from 'lucide-react';
import { Seller } from '../types';

interface SellerCardProps {
  seller: Seller;
  productCount: number;
}

export function SellerCard({ seller, productCount }: SellerCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-lg font-semibold text-gray-800">{seller.name}</h3>
      <div className="flex items-center mt-2">
        <Star className="w-4 h-4 text-yellow-400 fill-current" />
        <span className="ml-1 text-sm text-gray-600">{seller.rating}</span>
      </div>
      <p className="mt-2 text-sm text-gray-600">{productCount} products available</p>
    </div>
  );
}