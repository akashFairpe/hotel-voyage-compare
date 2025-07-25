
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://api.example.com';

export interface Hotel {
  id: number;
  name: string;
  city: string;
  address: string;
  stars: number;
  rating: number;
  reviewCount: number;
  type: string;
  description: string;
  images: string[];
  amenities: string[];
  checkinTime: string;
  checkoutTime: string;
  priceComparison: {
    site: string;
    price: string;
    link: string;
  }[];
  reviews: {
    author: string;
    rating: number;
    date: string;
    text: string;
  }[];
  mapLink: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
}

export interface ContactSubmission {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Hotel API functions
export const fetchHotels = async (filters?: {
  stars?: string;
  city?: string;
  amenities?: string[];
  priceRange?: string;
}): Promise<Hotel[]> => {
  const params = new URLSearchParams();
  if (filters?.stars) params.append('stars', filters.stars);
  if (filters?.city) params.append('city', filters.city);
  if (filters?.amenities?.length) params.append('amenities', filters.amenities.join(','));
  if (filters?.priceRange) params.append('priceRange', filters.priceRange);

  const response = await fetch(`${API_BASE_URL}/hotels?${params.toString()}`);
  if (!response.ok) throw new Error('Failed to fetch hotels');
  return response.json();
};

export const fetchHotelById = async (id: string): Promise<Hotel> => {
  const response = await fetch(`${API_BASE_URL}/hotels/${id}`);
  if (!response.ok) throw new Error('Failed to fetch hotel');
  return response.json();
};

export const fetchSimilarHotels = async (hotelId: string, limit = 3): Promise<Hotel[]> => {
  const response = await fetch(`${API_BASE_URL}/hotels/${hotelId}/similar?limit=${limit}`);
  if (!response.ok) throw new Error('Failed to fetch similar hotels');
  return response.json();
};

// Blog API functions
export const fetchBlogPosts = async (category?: string): Promise<BlogPost[]> => {
  const params = category ? `?category=${category}` : '';
  const response = await fetch(`${API_BASE_URL}/blog${params}`);
  if (!response.ok) throw new Error('Failed to fetch blog posts');
  return response.json();
};

export const fetchBlogPostById = async (id: string): Promise<BlogPost> => {
  const response = await fetch(`${API_BASE_URL}/blog/${id}`);
  if (!response.ok) throw new Error('Failed to fetch blog post');
  return response.json();
};

export const fetchFeaturedPosts = async (limit = 1): Promise<BlogPost[]> => {
  const response = await fetch(`${API_BASE_URL}/blog/featured?limit=${limit}`);
  if (!response.ok) throw new Error('Failed to fetch featured posts');
  return response.json();
};

export const fetchRecentPosts = async (limit = 6): Promise<BlogPost[]> => {
  const response = await fetch(`${API_BASE_URL}/blog/recent?limit=${limit}`);
  if (!response.ok) throw new Error('Failed to fetch recent posts');
  return response.json();
};

// Contact API function
export const submitContactForm = async (data: ContactSubmission): Promise<void> => {
  const response = await fetch(`${API_BASE_URL}/contact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error('Failed to submit contact form');
};

// Newsletter subscription
export const subscribeNewsletter = async (email: string): Promise<void> => {
  const response = await fetch(`${API_BASE_URL}/newsletter/subscribe`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  });
  if (!response.ok) throw new Error('Failed to subscribe to newsletter');
};
