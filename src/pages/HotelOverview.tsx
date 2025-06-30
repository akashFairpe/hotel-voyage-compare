
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, Wifi, Car, Utensils, Dumbbell, Filter } from 'lucide-react';

const HotelOverview = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    stars: '',
    city: '',
    amenities: [],
    priceRange: ''
  });

  const hotels = [
    {
      id: 1,
      name: "Grand Plaza Hotel",
      city: "New York",
      stars: 5,
      reviewCount: 1250,
      type: "5-star",
      amenities: ["Wifi", "Parking", "Restaurant", "Gym"],
      image: "photo-1518005020951-eccb494ad742",
      rating: 4.8
    },
    {
      id: 2,
      name: "Ocean View Resort",
      city: "Miami",
      stars: 4,
      reviewCount: 890,
      type: "4-star",
      amenities: ["Wifi", "Restaurant", "Pool"],
      image: "photo-1492321936769-b49830bc1d1e",
      rating: 4.6
    },
    {
      id: 3,
      name: "Mountain Lodge",
      city: "Denver",
      stars: 3,
      reviewCount: 650,
      type: "3-star",
      amenities: ["Wifi", "Parking", "Restaurant"],
      image: "photo-1470071459604-3b5ec3a7fe05",
      rating: 4.3
    },
    {
      id: 4,
      name: "City Center Inn",
      city: "Chicago",
      stars: 4,
      reviewCount: 1100,
      type: "4-star",
      amenities: ["Wifi", "Gym", "Restaurant"],
      image: "photo-1518005020951-eccb494ad742",
      rating: 4.5
    },
    {
      id: 5,
      name: "Seaside Hotel",
      city: "Los Angeles",
      stars: 5,
      reviewCount: 2100,
      type: "5-star",
      amenities: ["Wifi", "Parking", "Restaurant", "Gym", "Pool"],
      image: "photo-1506744038136-46273834b3fb",
      rating: 4.9
    },
    {
      id: 6,
      name: "Budget Stay",
      city: "Las Vegas",
      stars: 3,
      reviewCount: 450,
      type: "3-star",
      amenities: ["Wifi", "Parking"],
      image: "photo-1492321936769-b49830bc1d1e",
      rating: 4.1
    }
  ];

  const amenityIcons = {
    "Wifi": Wifi,
    "Parking": Car,
    "Restaurant": Utensils,
    "Gym": Dumbbell,
    "Pool": Star
  };

  const cities = [...new Set(hotels.map(hotel => hotel.city))];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Browse Top Hotels
          </h1>
          <p className="text-xl md:text-2xl opacity-90">
            Discover amazing hotels in any destination worldwide
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900">Filters</h3>
                <button
                  onClick={() => setFilterOpen(!filterOpen)}
                  className="lg:hidden text-blue-600"
                >
                  <Filter className="w-5 h-5" />
                </button>
              </div>
              
              <div className={`space-y-6 ${filterOpen ? 'block' : 'hidden lg:block'}`}>
                {/* Star Rating Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Star Rating
                  </label>
                  <select
                    value={filters.stars}
                    onChange={(e) => setFilters({...filters, stars: e.target.value})}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">All Stars</option>
                    <option value="3">3 Stars</option>
                    <option value="4">4 Stars</option>
                    <option value="5">5 Stars</option>
                  </select>
                </div>

                {/* City Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    City
                  </label>
                  <select
                    value={filters.city}
                    onChange={(e) => setFilters({...filters, city: e.target.value})}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">All Cities</option>
                    {cities.map(city => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                </div>

                {/* Price Range Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Price Range
                  </label>
                  <select
                    value={filters.priceRange}
                    onChange={(e) => setFilters({...filters, priceRange: e.target.value})}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">All Prices</option>
                    <option value="budget">Budget ($0-$100)</option>
                    <option value="mid">Mid-range ($100-$300)</option>
                    <option value="luxury">Luxury ($300+)</option>
                  </select>
                </div>

                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                  Apply Filters
                </button>
              </div>
            </div>
          </div>

          {/* Hotel List */}
          <div className="lg:w-3/4">
            <div className="mb-6">
              <p className="text-gray-600">
                Showing {hotels.length} hotels
              </p>
            </div>

            <div className="space-y-6">
              {hotels.map((hotel) => (
                <div key={hotel.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img
                        src={`https://images.unsplash.com/${hotel.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                        alt={hotel.name}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">
                            {hotel.name}
                          </h3>
                          <div className="flex items-center text-gray-600 mb-2">
                            <MapPin className="w-4 h-4 mr-1" />
                            <span>{hotel.city}</span>
                          </div>
                          <div className="flex items-center mb-2">
                            <div className="flex">
                              {[...Array(hotel.stars)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                              ))}
                            </div>
                            <span className="ml-2 text-sm text-gray-600">
                              {hotel.type}
                            </span>
                          </div>
                          <div className="flex items-center mb-4">
                            <span className="text-lg font-semibold text-blue-600">
                              {hotel.rating}
                            </span>
                            <span className="ml-2 text-gray-600">
                              ({hotel.reviewCount} reviews)
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Amenities */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {hotel.amenities.map((amenity, index) => {
                          const IconComponent = amenityIcons[amenity] || Star;
                          return (
                            <div key={index} className="flex items-center bg-gray-100 px-2 py-1 rounded-md text-sm">
                              <IconComponent className="w-4 h-4 mr-1 text-gray-600" />
                              <span>{amenity}</span>
                            </div>
                          );
                        })}
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="text-sm text-gray-600">
                          Starting from <span className="text-xl font-bold text-green-600">$99</span>/night
                        </div>
                        <Link
                          to={`/hotel/${hotel.id}`}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors"
                        >
                          See Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelOverview;
