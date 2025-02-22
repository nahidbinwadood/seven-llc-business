/* eslint-disable react/prop-types */
import Button from '../../../components/Button/Button';
import { Link } from 'react-router-dom';

const Banner = ({ data }) => {
  return (
    <section className="pt-[132px]">
      <div className="container mx-auto">
        <div className="flex gap-[66px]">
          {/* This is the first div */}
          <div className="w-1/2">
            <h2 className="text-[#000B1C] max-w-[707px] text-[64px] font-bold">
              {data?.title}
            </h2>
            <p className="text-buttonColor text-[64px] font-bold">
              {data?.sub_title}
            </p>
            <p className="max-w-[700px] text-2xl text-navbarColor mt-5">
              {data?.description}
            </p>
            <div className="mt-12">
              <Link to={'/orderForms'}>
                <Button text="Request a Quote" color="bg-buttonColor" />
              </Link>
            </div>
          </div>
          {/* This is the second div */}
          <div className="max-w-[703px h-[650px]">
            <img
              src={`${import.meta.env.VITE_SITE_URL}/${data?.image_url}`}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
