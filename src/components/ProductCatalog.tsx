
import React, { useState, useMemo } from 'react';
import ProductCard from './ProductCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Filter } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  category: string;
  description?: string;
  price?: string;
  inStock: boolean;
}

interface ProductCatalogProps {
  searchQuery: string;
  onAddToCart: (id: number) => void;
}

const ProductCatalog = ({ searchQuery, onAddToCart }: ProductCatalogProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [mobileSearchQuery, setMobileSearchQuery] = useState('');

  const products: Product[] = [
    // Industrial Chemicals
    { id: 1, name: "HCL-Hydrochloric Acid", category: "Industrial Chemicals", price: "₹250/L", inStock: true, description: "High-grade hydrochloric acid for industrial applications" },
    { id: 2, name: "Sulphuric Acid", category: "Industrial Chemicals", price: "₹180/L", inStock: true, description: "Concentrated sulfuric acid for various industrial processes" },
    { id: 3, name: "Nitric Acid", category: "Industrial Chemicals", price: "₹220/L", inStock: true, description: "Pure nitric acid for chemical synthesis" },
    { id: 4, name: "Caustic Lye", category: "Industrial Chemicals", price: "₹150/kg", inStock: true, description: "Sodium hydroxide solution for industrial use" },
    { id: 5, name: "Hypo chloride/Bleaching Liquid", category: "Industrial Chemicals", price: "₹120/L", inStock: true, description: "Bleaching solution for industrial applications" },
    { id: 6, name: "Caustic Soda/ 1kg", category: "Industrial Chemicals", price: "₹80/kg", inStock: true, description: "Solid sodium hydroxide pellets" },
    { id: 7, name: "Baking Soda/Washing Soda/1kg", category: "Industrial Chemicals", price: "₹60/kg", inStock: true, description: "Multi-purpose sodium carbonate" },
    { id: 8, name: "Phenoyl Compound", category: "Industrial Chemicals", price: "₹90/L", inStock: true, description: "Phenolic compound for disinfection" },
    { id: 9, name: "DM Water(With Acid)1L/5L", category: "Industrial Chemicals", price: "₹25/L", inStock: true, description: "Demineralized water with acid treatment" },
    { id: 10, name: "DM Water(Without Acid)", category: "Industrial Chemicals", price: "₹20/L", inStock: true, description: "Pure demineralized water" },
    { id: 11, name: "G-Salt", category: "Industrial Chemicals", price: "₹45/kg", inStock: true, description: "Industrial grade salt" },
    { id: 12, name: "PH-Sheet", category: "Industrial Chemicals", price: "₹150/pack", inStock: true, description: "pH testing strips" },
    { id: 13, name: "Bleaching Powder/1kg", category: "Industrial Chemicals", price: "₹65/kg", inStock: true, description: "Calcium hypochlorite powder" },
    { id: 14, name: "Soap Oil", category: "Industrial Chemicals", price: "₹180/L", inStock: true, description: "Oil for soap manufacturing" },
    { id: 15, name: "Acid Slurry", category: "Industrial Chemicals", price: "₹95/kg", inStock: true, description: "Acidic slurry for industrial processes" },

    // Household Materials
    { id: 16, name: "Dishwash Liquid", category: "Household Materials", price: "₹45/L", inStock: true, description: "Effective dishwashing detergent" },
    { id: 17, name: "Washing Machine Liquid", category: "Household Materials", price: "₹85/L", inStock: true, description: "Concentrated laundry detergent" },
    { id: 18, name: "Handwash Liquid", category: "Household Materials", price: "₹35/L", inStock: true, description: "Antibacterial hand soap" },
    { id: 19, name: "Floor Cleaning Liquid", category: "Household Materials", price: "₹55/L", inStock: true, description: "Multi-surface floor cleaner" },
    { id: 20, name: "Alaa Liquid", category: "Household Materials", price: "₹40/L", inStock: true, description: "All-purpose cleaning liquid" },
    { id: 21, name: "Toilet Cleaning Liquid", category: "Household Materials", price: "₹50/L", inStock: true, description: "Powerful toilet bowl cleaner" },
    { id: 22, name: "Phenoyl Liquid 1L/5L", category: "Household Materials", price: "₹30/L", inStock: true, description: "Disinfectant floor cleaner" },
    { id: 23, name: "Phenoyl perfume", category: "Household Materials", price: "₹120/L", inStock: true, description: "Scented phenoyl disinfectant" },
    { id: 24, name: "Toilet Freshner Small/Big", category: "Household Materials", price: "₹25/pc", inStock: true, description: "Toilet air freshener" },
    { id: 25, name: "Urinary Cakes", category: "Household Materials", price: "₹15/pc", inStock: true, description: "Urinal deodorizer blocks" },
    { id: 26, name: "Comfort For Fragrence in Clothes", category: "Household Materials", price: "₹75/L", inStock: true, description: "Fabric softener and conditioner" },
    { id: 27, name: "Washing Machine Drumcleaner", category: "Household Materials", price: "₹95/pack", inStock: true, description: "Washing machine maintenance cleaner" },
    { id: 28, name: "Toilet Flush Cleaner", category: "Household Materials", price: "₹65/L", inStock: true, description: "Tank and flush system cleaner" },
    { id: 29, name: "Carwash/Bikewash", category: "Household Materials", price: "₹85/L", inStock: true, description: "Vehicle cleaning solution" },
    { id: 30, name: "Black phenoyl", category: "Household Materials", price: "₹28/L", inStock: true, description: "Black phenoyl disinfectant" },
    { id: 31, name: "Napthalin Balls", category: "Household Materials", price: "₹35/pack", inStock: true, description: "Mothballs for pest control" },
    { id: 32, name: "Room Freshner", category: "Household Materials", price: "₹45/spray", inStock: true, description: "Air freshener spray" },
    { id: 33, name: "Glass Cleaner(Colin)", category: "Household Materials", price: "₹55/spray", inStock: true, description: "Glass and mirror cleaner" },
    { id: 34, name: "ALA stain remover for clothes", category: "Household Materials", price: "₹65/L", inStock: true, description: "Powerful stain removal solution" },

    // Cleaning Materials
    { id: 35, name: "Plastic Broom", category: "Cleaning Materials", price: "₹85/pc", inStock: true, description: "Durable plastic broom" },
    { id: 36, name: "Normal Broom", category: "Cleaning Materials", price: "₹45/pc", inStock: true, description: "Traditional cleaning broom" },
    { id: 37, name: "Coconut Broom", category: "Cleaning Materials", price: "₹65/pc", inStock: true, description: "Natural coconut fiber broom" },
    { id: 38, name: "Wiper", category: "Cleaning Materials", price: "₹125/pc", inStock: true, description: "Floor cleaning wiper" },
    { id: 39, name: "Modern Twist Mop", category: "Cleaning Materials", price: "₹285/pc", inStock: true, description: "Advanced twist mop system" },
    { id: 40, name: "Normal Mop-With Clip", category: "Cleaning Materials", price: "₹95/pc", inStock: true, description: "Standard mop with clip attachment" },
    { id: 41, name: "Normal Mop-Without Clip", category: "Cleaning Materials", price: "₹75/pc", inStock: true, description: "Basic cleaning mop" },
    { id: 42, name: "Toilet Brush-Single Sided", category: "Cleaning Materials", price: "₹35/pc", inStock: true, description: "Single-sided toilet brush" },
    { id: 43, name: "Toilet Brush-Double Sided", category: "Cleaning Materials", price: "₹55/pc", inStock: true, description: "Double-sided toilet brush" },
    { id: 44, name: "Modern Toilet Brush-With Stand", category: "Cleaning Materials", price: "₹125/pc", inStock: true, description: "Modern toilet brush with holder" },
    { id: 45, name: "Cloth Clip", category: "Cleaning Materials", price: "₹25/set", inStock: true, description: "Cloth hanging clips" },
    { id: 46, name: "Dust cleaning Mop-100 Inch", category: "Cleaning Materials", price: "₹185/pc", inStock: true, description: "Large dust cleaning mop" },
    { id: 47, name: "Sponge / Scrubber", category: "Cleaning Materials", price: "₹15/pc", inStock: true, description: "Kitchen sponge scrubber" },
    { id: 48, name: "Steel Srcubber", category: "Cleaning Materials", price: "₹25/pc", inStock: true, description: "Heavy-duty steel scrubber" },
    { id: 49, name: "Vessel Scrubber", category: "Cleaning Materials", price: "₹35/pc", inStock: true, description: "Specialized vessel cleaning scrubber" },
    { id: 50, name: "Dustbin Cover", category: "Cleaning Materials", price: "₹45/pc", inStock: true, description: "Dustbin lid/cover" },
    { id: 51, name: "Gloves", category: "Cleaning Materials", price: "₹25/pair", inStock: true, description: "Cleaning gloves" },
    { id: 52, name: "Floor Mats", category: "Cleaning Materials", price: "₹85/pc", inStock: true, description: "Non-slip floor mats" },

    // Termite Material
    { id: 53, name: "Wood Precaution Liquid 500ML", category: "Termite Material", price: "₹145/bottle", inStock: true, description: "Wood preservation treatment" },
    { id: 54, name: "Wood Precaution Liquid 1 LTR", category: "Termite Material", price: "₹275/bottle", inStock: true, description: "Large wood preservation solution" },
    { id: 55, name: "AEROSOL Spray 500ML", category: "Termite Material", price: "₹185/spray", inStock: true, description: "Aerosol termite treatment spray" },
    { id: 56, name: "Ceiling Preservative Liquid 1LTR", category: "Termite Material", price: "₹225/bottle", inStock: true, description: "Ceiling wood preservation liquid" },
  ];

  const categories = ['all', 'Industrial Chemicals', 'Household Materials', 'Cleaning Materials', 'Termite Material'];

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const query = searchQuery || mobileSearchQuery;
      const matchesSearch = query === '' || 
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery, mobileSearchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Product Catalog</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Browse our comprehensive selection of chemicals and materials for all your needs
        </p>
      </div>

      {/* Mobile Search */}
      <div className="md:hidden mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            type="text"
            placeholder="Search chemicals..."
            className="pl-10 border-gray-300 focus:border-blue-500"
            value={mobileSearchQuery}
            onChange={(e) => setMobileSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            onClick={() => setSelectedCategory(category)}
            className={`${
              selectedCategory === category
                ? "bg-blue-600 hover:bg-blue-700 text-white"
                : "border-blue-600 text-blue-600 hover:bg-blue-50"
            }`}
          >
            {category === 'all' ? 'All Categories' : category}
          </Button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            category={product.category}
            description={product.description}
            price={product.price}
            inStock={product.inStock}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No products found matching your search criteria.</p>
        </div>
      )}
    </div>
  );
};

export default ProductCatalog;
