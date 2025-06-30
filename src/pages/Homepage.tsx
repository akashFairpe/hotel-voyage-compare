
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock, Shield, DollarSign, Search, Users, MapPin, Calendar } from 'lucide-react';

const Homepage = () => {
  const features = [
    {
      icon: Clock,
      title: "Save Time",
      description: "Compare prices from hundreds of booking sites in seconds"
    },
    {
      icon: DollarSign,
      title: "Best Price",
      description: "Always find the lowest price guaranteed with our comparison tool"
    },
    {
      icon: Shield,
      title: "Trusted Reviews",
      description: "Read authentic reviews from verified travelers worldwide"
    },
    {
      icon: Star,
      title: "No Hidden Fees",
      description: "Transparent pricing with no booking fees or hidden charges"
    }
  ];

  const partners = [
    "Booking.com", "Expedia", "Hotels.com", "Agoda", "Priceline", "Kayak"
  ];

  const steps = [
    {
      icon: Search,
      title: "Search",
      description: "Enter your destination and dates"
    },
    {
      icon: Star,
      title: "Compare",
      description: "View prices from multiple sites"
    },
    {
      icon: Shield,
      title: "Choose",
      description: "Select the best deal for you"
    },
    {
      icon: Calendar,
      title: "Book",
      description: "Complete your booking securely"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "New York, USA",
      text: "Saved over $200 on my Paris vacation! The comparison tool made it so easy to find the best deals.",
      rating: 5
    },
    {
      name: "Mike Chen",
      location: "Toronto, Canada",
      text: "Love how quick and comprehensive the search results are. Found my perfect hotel in minutes.",
      rating: 5
    },
    {
      name: "Emma Wilson",
      location: "London, UK",
      text: "The reviews and ratings helped me choose the perfect hotel. Highly recommend this service!",
      rating: 5
    }
  ];

  const blogs = [
    {
      title: "Top 10 Luxury Hotels in Paris",
      excerpt: "Discover the most luxurious accommodations in the City of Light...",
      image: "photo-1518005020951-eccb494ad742",
      date: "Dec 15, 2024"
    },
    {
      title: "Budget Travel: Finding Great Hotels Under $100",
      excerpt: "Learn how to find amazing hotel deals without breaking the bank...",
      image: "photo-1492321936769-b49830bc1d1e",
      date: "Dec 10, 2024"
    },
    {
      title: "Mountain Retreats: Best Hotels for Nature Lovers",
      excerpt: "Escape to these stunning mountain hotels for your next adventure...",
      image: "photo-1470071459604-3b5ec3a7fe05",
      date: "Dec 5, 2024"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-purple-900">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)`
          }}
        />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Find Your Perfect Hotel
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Compare prices from hundreds of booking sites and save up to 80% on your next stay
          </p>
          <Link
            to="/hotels"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-block"
          >
            Start Searching Hotels
          </Link>
        </div>
      </section>

      {/* Why Use Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose HotelBooker?</h2>
            <p className="text-xl text-gray-600">We make hotel booking simple, fast, and affordable</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <feature.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Logos */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Trusted by Top Booking Partners
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {partners.map((partner, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-100 rounded-lg p-6 hover:bg-gray-200 transition-colors">
                  <span className="text-lg font-semibold text-gray-700">{partner}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Book your perfect hotel in 4 simple steps</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Travelers Say</h2>
            <p className="text-xl text-gray-600">Real reviews from real travelers</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Blogs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Travel Tips & Guides</h2>
            <p className="text-xl text-gray-600">Expert advice for your next adventure</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={`https://images.unsplash.com/${blog.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{blog.date}</p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{blog.title}</h3>
                  <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                  <Link
                    to={`/blog/${index + 1}`}
                    className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/blog"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View All Blog Posts
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
