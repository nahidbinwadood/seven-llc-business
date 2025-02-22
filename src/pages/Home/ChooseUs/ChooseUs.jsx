/* eslint-disable react/prop-types */
import { Link, useLocation } from 'react-router-dom';
import Button from '../../../components/Button/Button';
import parse from 'html-react-parser';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';

const ChooseUs = ({ data, showBreadcrumb }) => {
  const location = useLocation();
  const parsedData =
    typeof description === 'string'
      ? data?.description
      : String(data?.description);

  return (
    <section className="ml-[210px] pt-[150px]">
      <div className="flex gap-[150px] items-center">
        {/* First div: Title, Bullet Points, Description, and Button */}
        <div className="w-1/2">
          {/* Conditionally render Breadcrumb */}
          {showBreadcrumb && <Breadcrumb location={location} />}

          <h1 className="text-headingColor text-5xl font-bold max-w-[721px] leading-[67.2px]">
            {data?.title}
          </h1>

          <div className="user-descreption-wrapper mt-4">
            {parse(parsedData)}
          </div>
          {/* Button Section */}
          <Link to="/aboutUs" className="mt-12 inline-block">
            <Button text="Learn More About 777Bags" color={'bg-buttonColor'} />
          </Link>
        </div>
        {/* Second div: Image */}
        <div className="max-w-[829px] h-[710px] object-cover">
          <img
            className="rounded-tl-[80px] rounded-tr-none rounded-br-none rounded-bl-none"
            src={`${import.meta.env.VITE_SITE_URL}/${data?.image_url}`}
            alt={data?.title}
          />
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
