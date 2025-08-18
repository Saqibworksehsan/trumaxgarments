import React from 'react';
import { MessageCircle, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Trumax Garments</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Premium men's innerwear crafted for everyday confidence. 
              Quality you can trust, comfort you can feel.
            </p>
            <a
              href="https://wa.me/919876543210?text=Hi%20Trumax,%20I%20want%20to%20order%20innerwear."
              className="inline-flex items-center px-6 py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition-colors"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Order on WhatsApp
            </a>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/products" className="hover:text-red-400 transition-colors">Bamboo Trunks</a></li>
              <li><a href="/products" className="hover:text-red-400 transition-colors">Cotton Vests</a></li>
              <li><a href="/products" className="hover:text-red-400 transition-colors">Performance Boxers</a></li>
              <li><a href="/products" className="hover:text-red-400 transition-colors">Value Packs</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-red-400" />
                <span>+91 82207 23381</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-red-400" />
                <span>info@trumaxgarments.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-red-400 mt-1" />
                <span>Chennai, Tamil Nadu, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Trumax Garments, India. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;