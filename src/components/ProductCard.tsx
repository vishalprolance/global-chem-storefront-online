
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
  id: number;
  name: string;
  category: string;
  description?: string;
  inStock: boolean;
}

const ProductCard = ({ id, name, category, description, inStock }: ProductCardProps) => {
  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'industrial chemicals':
        return 'bg-blue-100 text-blue-800';
      case 'household materials':
        return 'bg-green-100 text-green-800';
      case 'cleaning materials':
        return 'bg-purple-100 text-purple-800';
      case 'termite material':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-200">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start mb-2">
          <Badge className={getCategoryColor(category)} variant="secondary">
            {category}
          </Badge>
          <Badge variant={inStock ? "default" : "destructive"} className="text-xs">
            {inStock ? "In Stock" : "Out of Stock"}
          </Badge>
        </div>
        <CardTitle className="text-lg leading-tight">{name}</CardTitle>
      </CardHeader>
      
      <CardContent className="flex-grow">
        {description && (
          <p className="text-gray-600 text-sm mb-3">{description}</p>
        )}
      </CardContent>
    </Card>
  );
};

export default ProductCard;
