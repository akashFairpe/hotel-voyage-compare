
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft, ArrowRight } from 'lucide-react';

const BlogDetail = () => {
  const { id } = useParams();

  // Mock blog post data
  const post = {
    id: 1,
    title: "How to Find the Best Hotel Deals: A Complete Guide",
    author: "Sarah Johnson",
    date: "December 15, 2024",
    readTime: "8 min read",
    image: "photo-1649972904349-6e44c42644a7",
    content: `
      <p>Finding the perfect hotel at the best price doesn't have to be a daunting task. With the right strategies and tools, you can save hundreds of dollars on your next vacation while still enjoying comfortable accommodations.</p>

      <h2>1. Use Hotel Comparison Websites</h2>
      <p>The first step in finding great hotel deals is to use comparison websites like HotelBooker. These platforms aggregate prices from multiple booking sites, allowing you to see all available options in one place. Don't just book the first deal you see – take time to compare different sites and read the fine print.</p>

      <h2>2. Be Flexible with Your Dates</h2>
      <p>Hotel prices can vary significantly based on the day of the week and season. If you have flexibility in your travel dates, use the calendar view on booking sites to see price variations. Often, staying Sunday through Thursday instead of Friday through Sunday can save you 30-50% on accommodation costs.</p>

      <h2>3. Consider Location vs. Price</h2>
      <p>Hotels in city centers are typically more expensive than those in surrounding areas. Consider staying slightly outside the main tourist areas and using public transportation or rideshare services to get around. The money you save on accommodation might more than offset the transportation costs.</p>

      <h2>4. Read Reviews Carefully</h2>
      <p>Don't just look at the star rating – read recent guest reviews to get a true picture of the hotel's condition and service quality. Pay attention to comments about cleanliness, staff helpfulness, and amenities that are important to you.</p>

      <h2>5. Book Direct for Perks</h2>
      <p>While comparison sites are great for finding deals, consider booking directly with the hotel if the price is competitive. Hotels often offer perks like free Wi-Fi, room upgrades, or flexible cancellation policies to direct bookings.</p>

      <h2>6. Use Loyalty Programs</h2>
      <p>If you travel frequently, join hotel loyalty programs. Even if you don't travel often, these programs are usually free and can provide benefits like room upgrades, late checkout, and exclusive deals.</p>

      <h2>Conclusion</h2>
      <p>Finding great hotel deals requires a combination of research, flexibility, and patience. By using these strategies, you'll be well on your way to finding the perfect accommodation at a price that fits your budget. Happy travels!</p>
    `,
    tags: ["hotel deals", "travel tips", "budget travel", "vacation planning"]
  };

  const relatedPosts = [
    {
      id: 2,
      title: "Luxury Hotels vs Budget Hotels: What to Expect",
      image: "photo-1518005020951-eccb494ad742"
    },
    {
      id: 3,
      title: "Hotel Booking Mistakes to Avoid",
      image: "photo-1492321936769-b49830bc1d1e"
    },
    {
      id: 4,
      title: "Best Hotels in Paris: A Complete Guide",
      image: "photo-1470071459604-3b5ec3a7fe05"
    }
  ];

  const relatedHotels = [
    {
      id: 1,
      name: "Grand Plaza Hotel",
      location: "New York",
      rating: 4.8,
      price: "$299"
    },
    {
      id: 2,
      name: "Ocean View Resort",
      location: "Miami",
      rating: 4.6,
      price: "$189"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <Link
            to="/blog"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <article className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Featured Image */}
              <img
                src={`https://images.unsplash.com/${post.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80`}
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover"
              />
              
              {/* Article Content */}
              <div className="p-8">
                {/* Meta Information */}
                <div className="flex items-center text-gray-500 text-sm mb-6">
                  <User className="w-4 h-4 mr-1" />
                  <span className="mr-4">{post.author}</span>
                  <Calendar className="w-4 h-4 mr-1" />
                  <span className="mr-4">{post.date}</span>
                  <span>{post.readTime}</span>
                </div>

                {/* Title */}
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                  {post.title}
                </h1>

                {/* Content */}
                <div 
                  className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Tags */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">Tags:</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-8">
              <Link
                to="/blog/2"
                className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow flex items-center"
              >
                <ArrowLeft className="w-5 h-5 mr-2 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500">Previous Post</p>
                  <p className="font-semibold text-gray-900">Budget vs Luxury Hotels</p>
                </div>
              </Link>
              <Link
                to="/blog/3"
                className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow flex items-center"
              >
                <div className="text-right">
                  <p className="text-sm text-gray-500">Next Post</p>
                  <p className="font-semibold text-gray-900">Booking Mistakes to Avoid</p>
                </div>
                <ArrowRight className="w-5 h-5 ml-2 text-gray-400" />
              </Link>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:w-1/3 space-y-8">
            {/* Related Hotels */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Related Hotels</h3>
              <div className="space-y-4">
                {relatedHotels.map((hotel) => (
                  <div key={hotel.id} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                    <h4 className="font-semibold text-gray-900 mb-1">{hotel.name}</h4>
                    <p className="text-sm text-gray-600 mb-2">{hotel.location}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Rating: {hotel.rating}</span>
                      <span className="font-bold text-green-600">{hotel.price}/night</span>
                    </div>
                    <Link
                      to={`/hotel/${hotel.id}`}
                      className="text-blue-600 hover:text-blue-700 text-sm transition-colors"
                    >
                      View Details →
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Related Blog Posts */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Related Articles</h3>
              <div className="space-y-4">
                {relatedPosts.map((relatedPost) => (
                  <div key={relatedPost.id} className="flex items-center space-x-3">
                    <img
                      src={`https://images.unsplash.com/${relatedPost.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80`}
                      alt={relatedPost.title}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <Link
                        to={`/blog/${relatedPost.id}`}
                        className="text-sm font-semibold text-gray-900 hover:text-blue-600 transition-colors line-clamp-2"
                      >
                        {relatedPost.title}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-blue-600 rounded-lg p-6 text-white">
              <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
              <p className="text-sm opacity-90 mb-4">
                Get the latest travel tips and hotel deals delivered to your inbox.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-3 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <button className="w-full bg-white text-blue-600 py-2 px-4 rounded-md hover:bg-gray-100 transition-colors font-semibold">
                  Subscribe
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
