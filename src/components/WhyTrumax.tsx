import React from 'react';
import { Shield, Award, DollarSign } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: "100% combed cotton & bamboo blends",
    description: "Premium materials that feel soft against your skin and last longer"
  },
  {
    icon: Award,
    title: "No-itch labels & flatlock seams",
    description: "Thoughtful design details that eliminate irritation and enhance comfort"
  },
  {
    icon: DollarSign,
    title: "Value packs that save you money",
    description: "Smart bundles that give you more for less without compromising quality"
  }
];

const WhyTrumax = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Trumax?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're committed to delivering the best innerwear experience for Indian men
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6 group-hover:bg-red-500 transition-colors duration-300">
                <feature.icon className="h-8 w-8 text-red-500 group-hover:text-white transition-colors duration-300" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-red-500 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-500">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-3">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
              <span className="font-medium">Made in India</span>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                <Award className="h-6 w-6 text-blue-600" />
              </div>
              <span className="font-medium">Quality Tested</span>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                <DollarSign className="h-6 w-6 text-purple-600" />
              </div>
              <span className="font-medium">Best Value</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyTrumax;