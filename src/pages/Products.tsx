import React from 'react';
import { Star, ShoppingCart, Check } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Bamboo Trunks",
    tagline: "Ultra-soft, anti-odor protection",
    price: "₹299",
    originalPrice: "₹399",
    image: "bambootrunks.png",
    rating: 4.8,
    reviews: 156,
    features: [
      "Premium bamboo fiber blend",
      "Natural odor resistance",
      "Ultra-soft comfort",
      "Moisture-wicking technology",
      "Eco-friendly material"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Navy", "Grey", "White"]
  },
  {
    id: 2,
    name: "Cotton Vests",
    tagline: "Breathable, shrink-proof comfort",
    price: "₹199",
    originalPrice: "₹249",
    image: "cottonvest.png",
    rating: 4.7,
    reviews: 203,
    features: [
      "100% combed cotton",
      "Pre-shrunk fabric",
      "Breathable mesh panels",
      "Reinforced seams",
      "Tag-free comfort"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Black", "Grey"]
  },
  {
    id: 3,
    name: "Performance Boxers",
    tagline: "4-way stretch, tag-free design",
    price: "₹349",
    originalPrice: "₹449",
    image: "performanceboxer.png",
    rating: 4.9,
    reviews: 89,
    features: [
      "4-way stretch fabric",
      "Tag-free design",
      "Moisture-wicking",
      "Flatlock seams",
      "Athletic fit"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Navy", "Grey", "Red"]
  },
  {
    id: 4,
    name: "Premium Brief Set",
    tagline: "Classic comfort, modern fit",
    price: "₹599",
    originalPrice: "₹799",
    image: "premiumbriefset.png",
    rating: 4.6,
    reviews: 124,
    features: [
      "Pack of 3 briefs",
      "Soft cotton blend",
      "Comfortable waistband",
      "Classic fit",
      "Durable construction"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Assorted"]
  },
  {
    id: 5,
    name: "Thermal Wear Set",
    tagline: "Winter warmth, all-day comfort",
    price: "₹899",
    originalPrice: "₹1199",
    image: "thermalwear.png",
    rating: 4.8,
    reviews: 67,
    features: [
      "Thermal top & bottom set",
      "Heat retention technology",
      "Soft inner lining",
      "Stretchable fabric",
      "Perfect for winter"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Navy"]
  },
  {
    id: 6,
    name: "Sports Trunk Pack",
    tagline: "Active lifestyle essentials",
    price: "₹799",
    originalPrice: "₹999",
    image: "sportstruckspack.png",
    rating: 4.7,
    reviews: 91,
    features: [
      "Pack of 2 sports trunks",
      "Quick-dry fabric",
      "Anti-chafing design",
      "Compression fit",
      "Ideal for workouts"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black/Red", "Navy/Blue"]
  }
];

const Products = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our complete range of premium men's innerwear designed for comfort, quality, and style
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {Math.round(((parseInt(product.originalPrice.slice(1)) - parseInt(product.price.slice(1))) / parseInt(product.originalPrice.slice(1))) * 100)}% OFF
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="flex items-center bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" fill="currentColor" />
                    <span className="text-sm font-medium text-gray-900">{product.rating}</span>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-red-500 font-medium mb-4">{product.tagline}</p>
                
                {/* Rating & Reviews */}
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                        fill="currentColor"
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">({product.reviews} reviews)</span>
                </div>

                {/* Price */}
                <div className="flex items-center mb-4">
                  <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                  <span className="ml-2 text-lg text-gray-500 line-through">{product.originalPrice}</span>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {product.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Sizes */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Available Sizes:</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <span
                        key={size}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm font-medium"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Colors */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Colors:</h4>
                  <p className="text-sm text-gray-600">{product.colors.join(', ')}</p>
                </div>

                {/* Order Button */}
                <a
                  href={`https://wa.me/918220723381?text=Hi%20Trumax,%20I%20want%20to%20order%20${product.name}%20-%20${product.price}`}
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition-colors duration-200 group-hover:shadow-lg"
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Order on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Value Packs Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Value Packs</h2>
            <p className="text-lg text-gray-600">Save more with our specially curated combo packs</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Essential Pack</h3>
              <p className="text-gray-600 mb-4">3 Cotton Vests + 3 Bamboo Trunks</p>
              <div className="flex items-center mb-4">
                <span className="text-2xl font-bold text-red-500">₹1,299</span>
                <span className="ml-2 text-lg text-gray-500 line-through">₹1,794</span>
                <span className="ml-2 bg-red-500 text-white px-2 py-1 rounded text-sm">Save ₹495</span>
              </div>
              <a
                href="https://wa.me/918220723381?text=Hi%20Trumax,%20I%20want%20to%20order%20Essential%20Pack%20-%20₹1,299"
                className="inline-flex items-center px-6 py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition-colors"
              >
                <ShoppingCart className="mr-2 h-4 w-4" />
                Order Pack
              </a>
            </div>
            
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Premium Pack</h3>
              <p className="text-gray-600 mb-4">2 Performance Boxers + 2 Bamboo Trunks + 1 Thermal Set</p>
              <div className="flex items-center mb-4">
                <span className="text-2xl font-bold text-red-500">₹1,899</span>
                <span className="ml-2 text-lg text-gray-500 line-through">₹2,497</span>
                <span className="ml-2 bg-red-500 text-white px-2 py-1 rounded text-sm">Save ₹598</span>
              </div>
              <a
                href="https://wa.me/918220723381?text=Hi%20Trumax,%20I%20want%20to%20order%20Premium%20Pack%20-%20₹1,899"
                className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
              >
                <ShoppingCart className="mr-2 h-4 w-4" />
                Order Pack
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;