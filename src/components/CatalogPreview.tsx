import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';

const products = [
  {
    name: "Bamboo Trunks",
    tagline: "ultra-soft, anti-odor",
    image: "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=400",
    features: ["Bamboo fiber blend", "Odor resistant", "Ultra-soft comfort"]
  },
  {
    name: "Cotton Vests",
    tagline: "breathable, shrink-proof",
    image: "https://images.pexels.com/photos/8532661/pexels-photo-8532661.jpeg?auto=compress&cs=tinysrgb&w=400",
    features: ["100% combed cotton", "Pre-shrunk", "Breathable mesh"]
  },
  {
    name: "Performance Boxers",
    tagline: "4-way stretch, tag-free",
    image: "https://images.pexels.com/photos/8532695/pexels-photo-8532695.jpeg?auto=compress&cs=tinysrgb&w=400",
    features: ["4-way stretch fabric", "Tag-free design", "Moisture-wicking"]
  }
];

const CatalogPreview = () => {
  return (
    <section id="catalog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Top Picks</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our most popular innerwear designed for the modern Indian man
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-red-200"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4">
                  <div className="flex items-center bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" fill="currentColor" />
                    <span className="text-sm font-medium text-gray-900">4.8</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-red-500 transition-colors">
                  {product.name}
                </h3>
                <p className="text-red-500 font-medium text-lg mb-4 capitalize">
                  {product.tagline}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <a
                  href="https://wa.me/919876543210?text=Hi%20Trumax,%20I%20want%20to%20order%20innerwear."
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-red-500 transition-colors duration-200 group-hover:shadow-lg"
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Order Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CatalogPreview;