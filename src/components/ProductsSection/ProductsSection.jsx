/* eslint-disable react/prop-types */
import ProductCard from '../ProductCard/ProductCard';

const ProductsSection = ({ data, idx }) => {
  return (
    <div>
      <h4 className="text-buttonColor text-[28px] font-medium mt-2">
        Section {idx + 1} : {data?.name}
      </h4>
      <div className="container mx-auto mt-[77px] space-y-[77px]">
        {data?.products?.map((product) => (
          <ProductCard key={product?.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsSection;
