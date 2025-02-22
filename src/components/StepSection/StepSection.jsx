/* eslint-disable react/prop-types */
import steponePic1 from '@/assets/images/step1.png';
import steponePic2 from '@/assets/images/step2.png';
import steponePic3 from '@/assets/images/step3.png';
import steponePic4 from '@/assets/images/step4.png';
import Button from '../Button/Button';
import StepCard from '../Cards/StepCard';

const StepSection = ({ title, subtitle, btnText, isAbout, data }) => {
  const stepImages = [steponePic1, steponePic2, steponePic3, steponePic4];

  const updatedData = data?.map((item, index) => ({
    ...item,
    image: stepImages[index] || steponePic4,
    lastItem: data.length - 1 == index,
  }));

  return (
    <section className="">
      <div className="container mx-auto">
        {/* This is title section */}
        <div className="text-center ">
          <h2 className="text-headingColor text-5xl font-bold">{title}</h2>
          <p className="mt-6 text-navbarColor text-[22px]">{subtitle}</p>
        </div>

        <div className="flex flex-row gap-6 mt-16 mb-12">
          {updatedData?.map((item) => (
            <StepCard isAbout={isAbout} key={item?.id} data={item} />
          ))}
        </div>
        {/* */}
        <div className="flex justify-center">
          {/* This is button section */}
          <Button text={btnText} color={'bg-buttonColor'} />
        </div>
      </div>
    </section>
  );
};

export default StepSection;
