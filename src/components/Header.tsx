
import React from 'react';
import { ShoppingCart, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
  onSearchChange: (query: string) => void;
}

const Header = ({ cartCount, onCartClick, onSearchChange }: HeaderProps) => {
  return (
    <header className="bg-white shadow-lg border-b-2 border-blue-600 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <div className="text-2xl font-bold text-blue-600">
              GLOBAL CHEMICALS
            </div>
            <div className="text-sm text-gray-600 hidden sm:block">
              Since 1970
            </div>
          </div>
          
          <div className="flex-1 max-w-md mx-8 hidden md:block">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search chemicals..."
                className="pl-10 border-gray-300 focus:border-blue-500"
                onChange={(e) => onSearchChange(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              onClick={onCartClick}
              className="relative border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="ml-2 hidden sm:inline">Cart</span>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
