/* eslint-disable react/prop-types */
import ProductsSection from '@/components/ProductsSection/ProductsSection';

const ProductCardSection = ({ data }) => {
  return (
    <section className="mt-[90px]">
      <div className="container mx-auto">
        {/* title */}
        <div className="text-center">
          <h2 className="headingStyle">Products & Services</h2>
        </div>
        <div className="flex flex-col justify-center text-center gap-[150px]">
          {/* This is the Industry Data section */}

          {data?.map((item, idx) => (
            <ProductsSection key={item?.id} data={item} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCardSection;
