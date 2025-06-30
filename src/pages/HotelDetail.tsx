
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Star, MapPin, Wifi, Car, Utensils, Dumbbell, Clock, ExternalLink } from 'lucide-react';
import { fetchHotelById, fetchSimilarHotels } from '../services/api';

const HotelDetail = () => {
  const { id } = useParams<{ id: string }>();

  const { data: hotel, isLoading, error } = useQuery({
    queryKey: ['hotel', id],
    queryFn: () => fetchHotelById(id!),
    enabled: !!id,
  });

  const { data: similarHotels = [] } = useQuery({
    queryKey: ['similarHotels', id],
    queryFn: () => fetchSimilarHotels(id!),
    enabled: !!id,
  });

  const amenityIcons = {
    "Free WiFi": Wifi,
    "Wifi": Wifi,
    "Valet Parking": Car,
    "Parking": Car,
    "Fine Dining": Utensils,
    "Restaurant": Utensils,
    "Fitness Center": Dumbbell,
    "Gym": Dumbbell,
    "24/7 Concierge": Clock
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
          <p className="text-gray-600">Loading hotel details...</p>
        </div>
      </div>
    );
  }

  if (error || !hotel) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Hotel not found or failed to load.</p>
          <Link to="/hotels" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Back to Hotels
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white shadow-lg">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
            <div className="lg:w-2/3">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {hotel.name}
              </h1>
              <div className="flex items-center mb-2">
                <div className="flex">
                  {[...Array(hotel.stars)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-gray-600">{hotel.type}</span>
              </div>
              <div className="flex items-center text-gray-600 mb-4">
                <MapPin className="w-4 h-4 mr-1" />
                <span>{hotel.address}</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl font-bold text-blue-600">{hotel.rating}</span>
                <span className="ml-2 text-gray-600">({hotel.reviewCount} reviews)</span>
              </div>
            </div>
            <div className="lg:w-1/3 mt-6 lg:mt-0 text-center lg:text-right">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
                Check Prices & Book
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* About Hotel */}
            <section className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Hotel</h2>
              <p className="text-gray-700 leading-relaxed">{hotel.description}</p>
            </section>

            {/* Photo Gallery */}
            <section className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Photo Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {hotel.images?.slice(0, 3).map((image, index) => (
                  <img
                    key={index}
                    src={`https://images.unsplash.com/${image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                    alt={`${hotel.name} - Image ${index + 1}`}
                    className="w-full h-48 object-cover rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
                  />
                )) || (
                  <img
                    src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt={hotel.name}
                    className="w-full h-48 object-cover rounded-lg col-span-3"
                  />
                )}
              </div>
            </section>

            {/* Key Information */}
            <section className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-600 mb-2">
                    <strong>Check-in:</strong> {hotel.checkinTime}
                  </p>
                  <p className="text-gray-600">
                    <strong>Check-out:</strong> {hotel.checkoutTime}
                  </p>
                </div>
                <div>
                  <p className="text-gray-600 mb-2">
                    <strong>Hotel Type:</strong> {hotel.type}
                  </p>
                  <p className="text-gray-600">
                    <strong>Rating:</strong> {hotel.rating}/5 ({hotel.reviewCount} reviews)
                  </p>
                </div>
              </div>
            </section>

            {/* Amenities */}
            <section className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Amenities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {hotel.amenities?.map((amenity, index) => {
                  const IconComponent = amenityIcons[amenity] || Star;
                  return (
                    <div key={index} className="flex items-center">
                      <IconComponent className="w-5 h-5 text-blue-600 mr-3" />
                      <span className="text-gray-700">{amenity}</span>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Price Comparison */}
            <section className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Price Comparison</h2>
              <div className="space-y-4">
                {hotel.priceComparison?.map((booking, index) => (
                  <div key={index} className="flex justify-between items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                    <div>
                      <h3 className="font-semibold text-gray-900">{booking.site}</h3>
                    </div>
                    <div className="flex items-center">
                      <span className="text-2xl font-bold text-green-600 mr-4">
                        {booking.price}
                      </span>
                      <a
                        href={booking.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors flex items-center"
                      >
                        Book Now
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Reviews */}
            <section className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Guest Reviews</h2>
              {hotel.reviews?.map((review, index) => (
                <div key={index} className="border-b border-gray-200 pb-4 mb-4 last:border-b-0 last:mb-0">
                  <div className="flex items-center mb-2">
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="ml-2 font-semibold text-gray-900">{review.author}</span>
                    <span className="ml-2 text-gray-500 text-sm">{review.date}</span>
                  </div>
                  <p className="text-gray-700">{review.text}</p>
                </div>
              ))}
            </section>

            {/* Map */}
            <section className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Location</h2>
              <div className="bg-gray-100 rounded-lg p-8 text-center">
                <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-4">{hotel.address}</p>
                <a
                  href={hotel.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors inline-flex items-center"
                >
                  View on Google Maps
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            {/* Similar Hotels */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Similar Hotels</h3>
              <div className="space-y-4">
                {similarHotels.map((similar) => (
                  <Link key={similar.id} to={`/hotel/${similar.id}`} className="flex items-center space-x-3 hover:bg-gray-50 p-2 rounded">
                    <img
                      src={similar.images?.[0] ? `https://images.unsplash.com/${similar.images[0]}?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80` : `https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80`}
                      alt={similar.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{similar.name}</h4>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Rating: {similar.rating}</span>
                        <span className="font-bold text-green-600">
                          {similar.priceComparison?.[0]?.price || '$99'}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Related Blogs */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Related Guides</h3>
              <div className="space-y-3">
                <Link to="/blog/1" className="block text-blue-600 hover:text-blue-700 transition-colors">
                  → Best Hotels in {hotel.city}
                </Link>
                <Link to="/blog/2" className="block text-blue-600 hover:text-blue-700 transition-colors">
                  → Luxury Travel Tips for {hotel.city}
                </Link>
                <Link to="/blog/3" className="block text-blue-600 hover:text-blue-700 transition-colors">
                  → {hotel.city} Travel Guide
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetail;
