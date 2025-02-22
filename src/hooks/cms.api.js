import { axiosPublic } from './useAxiosPublic';

//homepage:
export const homepageDataFunc = async () => {
  const { data } = await axiosPublic('/api/home');
  return data;
};

//all products:
export const allProductsFunc = async () => {
  const { data } = await axiosPublic('/api/product-list');
  return data?.data;
};

//howItWorks:
export const howItWorksFunc = async () => {
  const { data } = await axiosPublic('/api/our-works');
  return data?.data;
};

// about us:
export const aboutUsDataFunc = async () => {
  const { data } = await axiosPublic('/api/about-us');
  return data;
};

//what we offer:
export const whatWeOfferFunc = async () => {
  const { data } = await axiosPublic('/api/what-we-offer');
  return data?.data;
};

// process:
export const processDataFunc = async () => {
  const { data } = await axiosPublic('/api/our-process');
  return data?.data;
};

// products and services:
export const productsAndServicesFunc = async () => {
  const { data } = await axiosPublic('/api/explore-all');
  return data?.data;
};

//contact form:
export const contactFormFunc = async (payload) => {
  const { data } = await axiosPublic.post('/api/contact-us', payload);
  return data?.data;
};

// all blogs:
export const allBlogsFunc = async () => {
  const { data } = await axiosPublic('/api/blog');
  return data?.data;
};

// single blog:
export const singleBlogFunc = async (slug) => {
  const { data } = await axiosPublic(`/api/blog/${slug}`);
  return data?.data;
};

// recent blogs:
export const recentBlogsFunc = async () => {
  const { data } = await axiosPublic('/api/recent-blogs');
  return data?.data;
};
