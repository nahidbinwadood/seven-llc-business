import { useQuery } from '@tanstack/react-query';
import {
  aboutUsDataFunc,
  allBlogsFunc,
  allProductsFunc,
  homepageDataFunc,
  howItWorksFunc,
  processDataFunc,
  productsAndServicesFunc,
  recentBlogsFunc,
  singleBlogFunc,
  whatWeOfferFunc,
} from './cms.api';

//homepage:
export const useHomePageQuery = () => {
  return useQuery({
    queryKey: ['homepageData'],
    queryFn: homepageDataFunc,
  });
};

// all products:
export const useAllProductsQuery = () => {
  return useQuery({
    queryKey: ['all-products'],
    queryFn: allProductsFunc,
  });
};

// how-it-works:
export const useHowItWorksQuery = () => {
  return useQuery({
    queryKey: ['how-it-works'],
    queryFn: howItWorksFunc,
  });
};

// about-us:
export const useAboutUsQuery = () => {
  return useQuery({
    queryKey: ['about-us'],
    queryFn: aboutUsDataFunc,
  });
};

//what we offer:
export const useWhatWeOfferQuery = () => {
  return useQuery({
    queryKey: ['what-we-offer'],
    queryFn: whatWeOfferFunc,
  });
};

// process :
export const useProcessQuery = () => {
  return useQuery({
    queryKey: ['process'],
    queryFn: processDataFunc,
  });
};

// products and services:
export const useProductsAndServicesQuery = () => {
  return useQuery({
    queryKey: ['products-and-services'],
    queryFn: productsAndServicesFunc,
  });
};

// get all blogs:
export const useAllBlogsQuery = () => {
  return useQuery({
    queryKey: ['all-blogs'],
    queryFn: allBlogsFunc,
  });
};

// single blog query:
export const useSingleBlogQuery = (slug) => {
  return useQuery({
    queryKey: ['single-blog', slug], // Make sure slug is part of the key
    queryFn: () => singleBlogFunc(slug), // Fetch new data when slug changes
    enabled: !!slug, // Ensure it only runs when slug is available
  });
};

//recent blogs query:
export const useRecentBlogsQuery = () => {
  return useQuery({
    queryKey: ['recent-blogs'],
    queryFn: recentBlogsFunc,
  });
};
