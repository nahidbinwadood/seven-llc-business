import { useParams } from 'react-router-dom';
import { useRecentBlogsQuery, useSingleBlogQuery } from '@/hooks/cms.queries';
import Loader from '@/components/Loader/Loader';
import BlogDetailsSection from '@/components/BlogDetails/BlogDetailsSection';
import RecentBlogs from '@/components/BlogDetails/RecentBlogs';

const BlogDetailsPage = () => {
  const { slug } = useParams();
  const {
    data: singleBlogData,
    isLoading,
    isFetching,
  } = useSingleBlogQuery(slug);
  const { data: recentBlogs, isLoading: blogsLoading } = useRecentBlogsQuery();

  //  loader:
  if (isLoading || blogsLoading || isFetching) return <Loader />;

  return (
    <section className="px-[210px] py-[150px]">
      <div className="flex gap-[120px]">
        {/* This is the left side section */}
        <BlogDetailsSection data={singleBlogData} />
        {/* This is the right side section */}
        <RecentBlogs data={recentBlogs} />
      </div>
    </section>
  );
};

export default BlogDetailsPage;
