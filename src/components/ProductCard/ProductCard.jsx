/* eslint-disable react/prop-types */
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

const ProductCard = ({ data }) => {
  return (
    <section>
      <div className="container mx-auto">
        <div
          className={`flex items-center gap-[177px] ${
            data?.reverse == 'left' ? 'flex-row-reverse' : ''
          }`}
        >
          {/* Content Section */}
          <div className="w-1/2 flex flex-col text-left">
            <h2 className="text-headingColor text-[32px] font-bold">
              {data?.title}
            </h2>
            <span className="text-buttonColor text-lg mt-7">Products:</span>
            <p className="user-descreption-wrapper mt-5">
              {parse(data?.description)}
            </p>
            <div className="mt-12">
              <Link to={'/productGuidePage'}>
                <Button
                  text={'Explore Cannabis Packaging'}
                  color={'bg-buttonColor'}
                />
              </Link>
            </div>
          </div>
          {/* Image Section */}
          <div className="bg-buttonColor rounded-[70px] w-[694px] h-[580px] relative">
            <img
              className={`absolute w-[694px] h-[580px] top-[-25px]  object-cover rounded-[70px] overflow-hidden transition-all duration-300 hover:scale-105 ${
                data?.reverse == 'left' ? 'right-[25px]' : 'left-[25px]'
              } `}
              src={`${import.meta.env.VITE_SITE_URL}/${data?.image}`}
              alt="Product"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
