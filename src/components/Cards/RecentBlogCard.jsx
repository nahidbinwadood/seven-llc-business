/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { BottomBorderSvg } from '../SvgContainer/SvgConainer';

const RecentBlogCard = ({ data, lastElement }) => {
  return (
    <div>
      {/* Card div */}
      <Link
        to={`/blogArticles/${data?.slug}`}
        className="flex items-center gap-5 overflow-hidden transition-all duration-300 hover:scale-105"
      >
        <div className="h-[150px] w-[208px] flex-shrink-0">
          <img
            className="w-full h-full object-cover rounded-2xl"
            src={`${import.meta.env.VITE_SITE_URL}/${data?.image}`}
            alt={data?.title}
          />
        </div>
        <div>
          <p className="text-navbarColor">{data?.created_date}</p>
          <h1 className="max-w-[557px] mt-3 text-headingColor text-base font-bold">
            {data?.title}
          </h1>
        </div>
      </Link>
      {/* Border SVG */}
      {!lastElement && (
        <div className="my-[30px]">
          <BottomBorderSvg />
        </div>
      )}
    </div>
  );
};

export default RecentBlogCard;
