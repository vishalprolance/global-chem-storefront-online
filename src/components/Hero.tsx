
import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, Truck, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-green-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Professional Chemical
            <span className="text-blue-600"> Solutions</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Trusted supplier of industrial chemicals, household materials, and cleaning solutions since 1970. 
            Quality products for all your chemical needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
            >
              Browse Catalog
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3"
            >
              Get Quote
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center text-center">
              <CheckCircle className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Assured</h3>
              <p className="text-gray-600">All products meet industry standards and safety requirements</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Truck className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Reliable shipping and logistics for timely delivery</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Shield className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Safety First</h3>
              <p className="text-gray-600">Proper handling guidelines and safety documentation provided</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
