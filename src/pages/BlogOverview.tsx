
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';

const BlogOverview = () => {
  const categories = [
    {
      name: "Hotel Tips",
      posts: [
        {
          id: 1,
          title: "How to Find the Best Hotel Deals",
          excerpt: "Discover insider tips for finding amazing hotel deals and saving money on your next trip...",
          image: "photo-1649972904349-6e44c42644a7",
          author: "Sarah Johnson",
          date: "December 15, 2024",
          readTime: "5 min read"
        },
        {
          id: 2,
          title: "Luxury Hotels vs Budget Hotels: What to Expect",
          excerpt: "Understanding the key differences between luxury and budget accommodations...",
          image: "photo-1518005020951-eccb494ad742",
          author: "Mike Chen",
          date: "December 12, 2024",
          readTime: "7 min read"
        },
        {
          id: 3,
          title: "Hotel Booking Mistakes to Avoid",
          excerpt: "Common pitfalls when booking hotels and how to avoid them for a smooth experience...",
          image: "photo-1492321936769-b49830bc1d1e",
          author: "Emma Wilson",
          date: "December 10, 2024",
          readTime: "6 min read"
        }
      ]
    },
    {
      name: "Destination Guides",
      posts: [
        {
          id: 4,
          title: "Best Hotels in Paris: A Complete Guide",
          excerpt: "From luxury palaces to boutique hotels, discover the best places to stay in the City of Light...",
          image: "photo-1470071459604-3b5ec3a7fe05",
          author: "David Brown",
          date: "December 8, 2024",
          readTime: "10 min read"
        },
        {
          id: 5,
          title: "Tokyo Hotel Guide: Where to Stay in Japan's Capital",
          excerpt: "Navigate Tokyo's diverse neighborhoods and find the perfect hotel for your visit...",
          image: "photo-1500375592092-40eb2168fd21",
          author: "Yuki Tanaka",
          date: "December 5, 2024",
          readTime: "8 min read"
        },
        {
          id: 6,
          title: "New York City Hotels: Manhattan's Best Stays",
          excerpt: "From Times Square to SoHo, discover the best hotels in the Big Apple...",
          image: "photo-1506744038136-46273834b3fb",
          author: "Lisa Rodriguez",
          date: "December 2, 2024",
          readTime: "9 min read"
        }
      ]
    },
    {
      name: "Travel Tips",
      posts: [
        {
          id: 7,
          title: "Business Travel: Choosing the Right Hotel",
          excerpt: "Essential factors to consider when booking hotels for business trips...",
          image: "photo-1488590528505-98d2b5aba04b",
          author: "John Martinez",
          date: "November 30, 2024",
          readTime: "6 min read"
        },
        {
          id: 8,
          title: "Family Travel: Kid-Friendly Hotel Features",
          excerpt: "What to look for when booking hotels with children in tow...",
          image: "photo-1581091226825-a6a2a5aee158",
          author: "Rachel Green",
          date: "November 28, 2024",
          readTime: "7 min read"
        }
      ]
    }
  ];

  const featuredPost = {
    id: 1,
    title: "The Ultimate Guide to Hotel Booking Comparison",
    excerpt: "Everything you need to know about finding the best hotel deals online. From comparison sites to insider tips, this comprehensive guide covers it all.",
    image: "photo-1426604966848-d7adac402bff",
    author: "Travel Expert Team",
    date: "December 20, 2024",
    readTime: "12 min read"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Travel Blog</h1>
          <p className="text-xl md:text-2xl opacity-90">
            Expert tips, destination guides, and travel insights
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Featured Post */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Article</h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={`https://images.unsplash.com/${featuredPost.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                  alt={featuredPost.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <User className="w-4 h-4 mr-1" />
                  <span className="mr-4">{featuredPost.author}</span>
                  <Calendar className="w-4 h-4 mr-1" />
                  <span className="mr-4">{featuredPost.date}</span>
                  <span>{featuredPost.readTime}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {featuredPost.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <Link
                  to={`/blog/${featuredPost.id}`}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors inline-flex items-center"
                >
                  Read Full Article
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Category Sections */}
        {categories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">{category.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.posts.map((post) => (
                <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <img
                    src={`https://images.unsplash.com/${post.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center text-gray-500 text-sm mb-3">
                      <User className="w-4 h-4 mr-1" />
                      <span className="mr-3">{post.author}</span>
                      <Calendar className="w-4 h-4 mr-1" />
                      <span className="mr-3">{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                      <Link to={`/blog/${post.id}`}>{post.title}</Link>
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-blue-600 hover:text-blue-700 font-semibold transition-colors inline-flex items-center"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Newsletter Signup */}
        <div className="bg-blue-600 rounded-lg p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-6 opacity-90">
            Get the latest travel tips and hotel deals delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-md hover:bg-gray-100 transition-colors font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogOverview;
