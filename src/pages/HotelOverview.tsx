
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Star, MapPin, Wifi, Car, Utensils, Dumbbell, Filter } from 'lucide-react';
import { fetchHotels } from '../services/api';

const HotelOverview = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    stars: '',
    city: '',
    amenities: [],
    priceRange: ''
  });

  const { data: hotels = [], isLoading, error } = useQuery({
    queryKey: ['hotels', filters],
    queryFn: () => fetchHotels(filters),
  });

  const amenityIcons = {
    "Wifi": Wifi,
    "Parking": Car,
    "Restaurant": Utensils,
    "Gym": Dumbbell,
    "Pool": Star
  };

  const cities = [...new Set(hotels.map(hotel => hotel.city))];

  const handleFilterChange = (newFilters: typeof filters) => {
    setFilters(newFilters);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
          <p className="text-gray-600">Loading hotels...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Failed to load hotels. Please try again.</p>
          <button 
            onClick={() => window.location.reload()}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

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
                    onChange={(e) => handleFilterChange({...filters, stars: e.target.value})}
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
                    onChange={(e) => handleFilterChange({...filters, city: e.target.value})}
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
                    onChange={(e) => handleFilterChange({...filters, priceRange: e.target.value})}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">All Prices</option>
                    <option value="budget">Budget ($0-$100)</option>
                    <option value="mid">Mid-range ($100-$300)</option>
                    <option value="luxury">Luxury ($300+)</option>
                  </select>
                </div>
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
                        src={hotel.images?.[0] ? `https://images.unsplash.com/${hotel.images[0]}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80` : `https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
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
                        {hotel.amenities?.slice(0, 5).map((amenity, index) => {
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
                          Starting from <span className="text-xl font-bold text-green-600">
                            {hotel.priceComparison?.[0]?.price || '$99'}
                          </span>/night
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
