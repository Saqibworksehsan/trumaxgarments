import React from 'react';
import { Award, Users, Heart, Target, CheckCircle, Star } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '50,000+', label: 'Happy Customers' },
    { number: '5+', label: 'Years of Excellence' },
    { number: '15+', label: 'Product Varieties' },
    { number: '4.8', label: 'Average Rating' }
  ];

  const values = [
    {
      icon: Award,
      title: 'Quality First',
      description: 'We never compromise on quality. Every product goes through rigorous testing to ensure it meets our high standards.'
    },
    {
      icon: Heart,
      title: 'Customer Comfort',
      description: 'Your comfort is our priority. We design every product with the Indian man\'s needs and preferences in mind.'
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'We continuously innovate with new materials and designs to bring you the best in comfort and performance.'
    },
    {
      icon: Users,
      title: 'Trust & Reliability',
      description: 'Built on trust, we\'ve been serving Indian families with reliable, comfortable innerwear for years.'
    }
  ];

  const milestones = [
    {
      year: '2019',
      title: 'Founded Trumax Garments',
      description: 'Started with a vision to provide premium quality innerwear for Indian men'
    },
    {
      year: '2020',
      title: 'Launched Bamboo Collection',
      description: 'Introduced eco-friendly bamboo fiber innerwear with anti-odor properties'
    },
    {
      year: '2021',
      title: 'Reached 10,000 Customers',
      description: 'Achieved our first major milestone with satisfied customers across India'
    },
    {
      year: '2022',
      title: 'Performance Line Launch',
      description: 'Launched our performance collection for active lifestyle enthusiasts'
    },
    {
      year: '2023',
      title: 'Quality Certification',
      description: 'Received quality certifications and expanded our manufacturing capabilities'
    },
    {
      year: '2024',
      title: '50,000+ Happy Customers',
      description: 'Crossed 50,000 satisfied customers and launched value pack offerings'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-red-500">Trumax Garments</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're passionate about creating premium men's innerwear that combines comfort, quality, and affordability. 
              Since 2019, we've been dedicated to serving Indian men with products they can trust.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-red-500 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Trumax Garments was born from a simple observation: Indian men deserved better innerwear. 
                  We noticed that most available options either compromised on comfort or were overpriced, 
                  leaving a gap in the market for quality, affordable innerwear.
                </p>
                <p>
                  Founded in 2019, we started with a mission to create innerwear that Indian men would love to wear. 
                  We focused on understanding the unique needs of our customers - the climate, lifestyle, and preferences 
                  that make Indian men's requirements different from global standards.
                </p>
                <p>
                  Today, we're proud to serve over 50,000 happy customers across India, offering a range of products 
                  from bamboo trunks to performance boxers, all designed with the modern Indian man in mind.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Trumax Garments Story"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-red-500 text-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">5+</div>
                <div className="text-sm">Years of Trust</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at Trumax Garments
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6 group-hover:bg-red-500 transition-colors duration-300">
                  <value.icon className="h-8 w-8 text-red-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Key milestones in our journey to become India's trusted innerwear brand
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-red-200"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                      <div className="text-red-500 font-bold text-lg mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Trumax?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Here's what makes us different from other innerwear brands
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Premium materials sourced from trusted suppliers',
              'Rigorous quality testing for every product',
              'Designed specifically for Indian climate and lifestyle',
              'Affordable pricing without compromising quality',
              'Direct customer service via WhatsApp',
              'Easy returns and exchanges policy',
              'Eco-friendly packaging and materials',
              'Continuous innovation in comfort technology',
              'Made in India with pride'
            ].map((feature, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real feedback from our satisfied customers across India
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Rajesh Kumar',
                location: 'Mumbai',
                rating: 5,
                comment: 'Best innerwear I\'ve ever bought! The bamboo trunks are incredibly soft and comfortable. Will definitely order more.'
              },
              {
                name: 'Amit Sharma',
                location: 'Delhi',
                rating: 5,
                comment: 'Great quality at affordable prices. The cotton vests are perfect for daily wear. Highly recommended!'
              },
              {
                name: 'Suresh Patel',
                location: 'Bangalore',
                rating: 5,
                comment: 'Excellent customer service and fast delivery. The performance boxers are perfect for my workout routine.'
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.comment}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;