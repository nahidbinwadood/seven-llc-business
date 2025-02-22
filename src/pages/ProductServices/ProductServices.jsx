import StepSection from '../../components/StepSection/StepSection';
import BetterPlanet from '../Home/BetterPlanet/BetterPlanet';
import ProductBanner from './ProductBanner/ProductBanner';
import ProductCardSection from './ProductCardSection/ProductCardSection';
import commitmentPic from '../../assets/images/commitmentPic.png';
import { aboutUsPlanetData } from '@/data/data';
import {
  useProcessQuery,
  useProductsAndServicesQuery,
} from '@/hooks/cms.queries';
import Loader from '@/components/Loader/Loader';

const ProductServices = () => {
  const { data: allProductsAndServicesData, isLoading } =
    useProductsAndServicesQuery();
  const { data: processData, isLoading: processLoading } = useProcessQuery();

  // loader:
  if (isLoading || processLoading) return <Loader />;
  return (
    <div>
      <ProductBanner showBreadcrumb={true} />
      <ProductCardSection data={allProductsAndServicesData} />
      <div className="bg-[#FAFBFC] pb-[150px] pt-[137px] mt-[150px]">
        <StepSection
          data={processData}
          isAbout={true}
          title={'Our Process'}
          subtitle={'Your Packaging, Simplified'}
          btnText={'Request a Quote'}
        />
      </div>
      <BetterPlanet data={aboutUsPlanetData} backgroundImage={commitmentPic} />
    </div>
  );
};

export default ProductServices;
