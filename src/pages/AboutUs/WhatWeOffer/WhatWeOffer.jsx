import Button from '../../../components/Button/Button';
import Loader from '@/components/Loader/Loader';
import { useWhatWeOfferQuery } from '@/hooks/cms.queries';

const WhatWeOffer = () => {
  const { data: whatWeOffer, isLoading } = useWhatWeOfferQuery();

  // loader:
  if (isLoading) return <Loader />;
  return (
    <section>
      <div className="max-w-[1480px] mx-auto my-[150px]">
        {/* This is the first div */}
        <div className="flex flex-row gap-[162px]">
          <div className="w-[60%]">
            <h1 className="headingStyle mt-6">What We Offer</h1>
            <p className="text-xl text-navbarColor max-w-[396px] mt-6">
              We provide a wide range of packaging solutions to suit businesses
              of all sizes:
            </p>
            <div className="mt-12">
              {' '}
              <Button
                text={'Request a Quote'}
                color={'bg-buttonColor'}
              ></Button>
            </div>
          </div>
          {/* This is the second div */}
          <div className="flex gap-[61px]">
            {whatWeOffer?.map((item) => {
              return (
                <div className="flex flex-col items-start" key={item?.id}>
                  {/* Render the content of each card here */}
                  <div className="rounded-[133.333px] bg-white shadow-[0px_2.667px_16.667px_rgba(0,0,0,0.10)] size-[80px] p-4">
                    <img
                      className="self-start h-full w-full object-cover"
                      src={`${import.meta.env.VITE_SITE_URL}/${
                        item?.image_url
                      }`}
                      alt={item.heading}
                    />
                  </div>
                  <h1 className="text-headingColor text-xl font-semibold text-left mt-8">
                    {item.title}
                  </h1>
                  <p className="text-navbarColor text-base mt-4 text-left">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
