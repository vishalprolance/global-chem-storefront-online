
import React, { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductCatalog from '@/components/ProductCatalog';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-white">
      <Header
        onSearchChange={setSearchQuery}
      />
      
      <Hero />
      
      <ProductCatalog
        searchQuery={searchQuery}
      />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">GLOBAL CHEMICALS</h3>
              <p className="text-gray-300 mb-4">
                Trusted supplier of quality chemicals since 1970. 
                Professional solutions for all your chemical needs.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li>About Us</li>
                <li>Products</li>
                <li>Safety Guidelines</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
              <div className="text-gray-300 space-y-4 text-sm">
                <div>
                  <p className="font-medium text-white mb-1">Phone:</p>
                  <div className="address-text space-y-1">
                    <p>+91-9487586248</p>
                    <p>+91-9443366248</p>
                    <p>+91-8667354021</p>
                  </div>
                </div>
                <div>
                  <p className="font-medium text-white mb-1">Email:</p>
                  <p className="address-text">gocmohan@rediffmail.com</p>
                </div>
                <div>
                  <p className="font-medium text-white mb-1">Main Office:</p>
                  <div className="address-text">
                    <p>Ramalakshmi Complex, SIPCOT (PO),</p>
                    <p>Dharga, Hosur - 635 126,</p>
                    <p>Tamil Nadu, India</p>
                  </div>
                </div>
                <div>
                  <p className="font-medium text-white mb-1">Branch Office:</p>
                  <div className="address-text">
                    <p>SY. No. 88/1A, Inner Ring Road,</p>
                    <p>Motham Agraharam,</p>
                    <p>Hosur - 635 126,</p>
                    <p>Tamil Nadu, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Global Chemicals. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
