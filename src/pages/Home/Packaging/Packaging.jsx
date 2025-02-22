/* eslint-disable react/prop-types */
import Button from '@/components/Button/Button';
import Card from '@/components/Card/Card';

const Packaging = ({ data }) => {
  const remainder = data?.length % 4;
  const fullRowsCount = Math.floor(data?.length / 4) * 4;
  return (
    <section>
      <div className="custom-gradient py-[150px] px-[220px]">
        {/* This is the title section */}
        <div className="flex flex-col items-center">
          <h1 className="text-headingColor text-5xl font-bold max-w-[952px]">
            Packaging Solutions for Every Industry
          </h1>
          <p className="text-navbarColor mt-6 max-w-[553px] text-[22px]">
            No Matter the Industry, 777Bags has you covered.
          </p>
        </div>
        {/* This is the card section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {/* Full rows */}
          {data?.slice(0, fullRowsCount).map((item,idx) => (
            <Card key={idx} data={item} />
          ))}

          {/* Remainder cards - centered */}
          {remainder > 0 && (
            <div className="col-span-4 flex justify-center gap-4">
              {data?.slice(fullRowsCount).map((item,idx) => (
                <Card key={idx} data={item} />
              ))}
            </div>
          )}
        </div>
        {/* This is the button section */}
        <div className="flex flex-col items-center mt-12">
          <div className="border max-w-[914px] border-buttonColor py-4 px-8 rounded-[60px] text-buttonColor text-lg font-medium">
            Don’t see what you need? Fill out our form to the best of your
            ability and we’ll get you a quote!
          </div>
          <div className="mt-12">
            <Button text={'Explore All Products'} color={'bg-buttonColor'} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packaging;
