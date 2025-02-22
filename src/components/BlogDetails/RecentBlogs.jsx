/* eslint-disable react/prop-types */
import RecentBlogCard from '../Cards/RecentBlogCard';

const RecentBlogs = ({ data }) => {
  return (
    <div>
      <h2 className="text-headingColor text-2xl font-bold mb-7">Recent News</h2>
      <div>
        {data?.map((news, idx) => (
          <RecentBlogCard
            lastElement={idx == data.length - 1}
            key={news?.id}
            data={news}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentBlogs;
