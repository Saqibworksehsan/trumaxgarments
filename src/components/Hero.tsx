import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, ShoppingBag } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Comfort You Can{' '}
                <span className="text-red-500">Feel</span>.
                <br />
                Quality You Can{' '}
                <span className="text-red-500">Trust</span>.
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Premium men's innerwear crafted for everyday confidence.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/918220723381?text=Hi%20Trumax,%20I%20want%20to%20order%20innerwear."
                className="inline-flex items-center justify-center px-8 py-4 bg-red-500 text-white font-semibold rounded-lg shadow-lg hover:bg-red-600 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 group"
              >
                <MessageCircle className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
                Order on WhatsApp
              </a>
              <Link
                to="/products"
                className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg shadow-lg hover:bg-gray-800 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 group"
              >
                <ShoppingBag className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
                View Catalog
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="hero.png"
                alt="Trumax Premium Men's Innerwear"
                className="w-full h-auto transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-red-500 rounded-full opacity-10 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gray-900 rounded-full opacity-10 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;