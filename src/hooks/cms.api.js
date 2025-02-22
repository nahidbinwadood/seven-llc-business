import { axiosPublic } from './useAxiosPublic';

// Homepage Data
export const homepageDataFunc = async () => {
  try {
    const { data } = await axiosPublic('/api/home');
    return data;
  } catch (error) {
    console.error('Error fetching homepage data:', error);
    throw new Error('Failed to fetch homepage data');
  }
};

// All Products
export const allProductsFunc = async () => {
  try {
    const { data } = await axiosPublic('/api/product-list');
    return data?.data || [];
  } catch (error) {
    console.error('Error fetching all products:', error);
    throw new Error('Failed to fetch products');
  }
};

// How It Works
export const howItWorksFunc = async () => {
  try {
    const { data } = await axiosPublic('/api/our-works');
    return data?.data || [];
  } catch (error) {
    console.error('Error fetching how-it-works data:', error);
    throw new Error('Failed to fetch how-it-works data');
  }
};

// About Us
export const aboutUsDataFunc = async () => {
  try {
    const { data } = await axiosPublic('/api/about-us');
    return data;
  } catch (error) {
    console.error('Error fetching about us data:', error);
    throw new Error('Failed to fetch about us data');
  }
};

// What We Offer
export const whatWeOfferFunc = async () => {
  try {
    const { data } = await axiosPublic('/api/what-we-offer');
    return data?.data || [];
  } catch (error) {
    console.error('Error fetching what we offer:', error);
    throw new Error('Failed to fetch what we offer data');
  }
};

// Our Process
export const processDataFunc = async () => {
  try {
    const { data } = await axiosPublic('/api/our-process');
    return data?.data || [];
  } catch (error) {
    console.error('Error fetching process data:', error);
    throw new Error('Failed to fetch process data');
  }
};

// Products & Services
export const productsAndServicesFunc = async () => {
  try {
    const { data } = await axiosPublic('/api/explore-all');
    return data?.data || [];
  } catch (error) {
    console.error('Error fetching products and services:', error);
    throw new Error('Failed to fetch products and services');
  }
};

// Contact Form Submission
export const contactFormFunc = async (payload) => {
  try {
    const { data } = await axiosPublic.post('/api/contact-us', payload);
    return data?.data || {};
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw new Error('Failed to submit contact form');
  }
};

// All Blogs
export const allBlogsFunc = async () => {
  try {
    const { data } = await axiosPublic('/api/blog');
    return data?.data || [];
  } catch (error) {
    console.error('Error fetching all blogs:', error);
    throw new Error('Failed to fetch blogs');
  }
};

// Single Blog
export const singleBlogFunc = async (slug) => {
  try {
    const { data } = await axiosPublic(`/api/blog/${slug}`);
    return data?.data || null;
  } catch (error) {
    console.error(`Error fetching blog: ${slug}`, error);
    throw new Error('Failed to fetch blog');
  }
};

// Recent Blogs
export const recentBlogsFunc = async () => {
  try {
    const { data } = await axiosPublic('/api/recent-blogs');
    return data?.data || [];
  } catch (error) {
    console.error('Error fetching recent blogs:', error);
    throw new Error('Failed to fetch recent blogs');
  }
};
