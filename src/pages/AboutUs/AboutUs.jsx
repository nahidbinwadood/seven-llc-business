import ChooseUs from '../Home/ChooseUs/ChooseUs';
import StepSection from '../../components/StepSection/StepSection';
import OurStory from './OurStory/OurStory';
import MissionAndVision from './MissionAndVision/MissionAndVision';
import BetterPlanet from '../Home/BetterPlanet/BetterPlanet';
import commitmentPic from '../../assets/images/commitmentPic.png';
import WhyChooseUs from './WhyChooseUs/WhyChooseUs';
import WhatWeOffer from './WhatWeOffer/WhatWeOffer';
import Loader from '@/components/Loader/Loader';
import { aboutUsPlanetData } from '@/data/data';
import { useAboutUsQuery, useProcessQuery } from '@/hooks/cms.queries';

const AboutUs = () => {
  const { data: aboutUsData, isLoading } = useAboutUsQuery();
  const { data: processData, isLoading: processLoading } = useProcessQuery();

  
  // loader:
  if (isLoading || processLoading) return <Loader />;

  return (
    <div>
      <ChooseUs data={aboutUsData?.data?.ABOUT_US} showBreadcrumb={true} />
      <OurStory data={aboutUsData?.data?.OUR_STORY} />
      <MissionAndVision
        mission={aboutUsData?.data?.OUR_MISSION}
        vision={aboutUsData?.data?.OUR_VISION}
      />
      <WhyChooseUs data={aboutUsData?.data?.WHY_CHOOSE_ITEMS} />
      <div className="bg-[#FAFBFC] pb-[150px] pt-[137px] mt-[150px]">
        <StepSection
          data={processData}
          isAbout={true}
          title={'Our Process'}
          subtitle={'Your Packaging, Simplified'}
          btnText={'Request a Quote'}
        />
      </div>
      <WhatWeOffer />
      <BetterPlanet data={aboutUsPlanetData} backgroundImage={commitmentPic} />
    </div>
  );
};

export default AboutUs;
