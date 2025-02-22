/* eslint-disable react/prop-types */
import ChooseUsCard from '../../../components/ChooseUsCard/ChooseUsCard';

const WhyChooseUs = ({ data }) => {
  const remainder = data?.length % 3;
  const fullRowsCount = Math.floor(data?.length / 3) * 3;

  return (
    <section className="mt-[158px]">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center text-center">
          <h2 className="headingStyle">Why Choose 777Bags?</h2>
          <p className="subHeadingStyle max-w-[732px] mx-auto mt-6">
            We’re more than just a packaging provider—we’re a partner in your
            success. Here’s what sets us apart:
          </p>
        </div>

        <div className="grid grid-cols-3 gap-[30px] mt-[52px] ">
          {data.slice(0, fullRowsCount).map((item) => (
            <ChooseUsCard key={item?.id} data={item} />
          ))}

          {/* This is the card section */}
          {remainder > 0 && (
            <div className="col-span-3 flex justify-center gap-[30px]">
              {data?.slice(fullRowsCount).map((item) => (
                <ChooseUsCard key={item?.id} data={item} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
