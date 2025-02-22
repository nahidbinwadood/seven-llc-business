/* eslint-disable react/prop-types */
import CardSecondary from '@/components/CardSecondary/CardSecondary';

const MissionAndVision = ({ mission, vision }) => {
  return (
    <section className="bg-buttonColor w-full">
      <div className="py-[100px] px-[224px]">
        <div className="flex gap-[38px]">
          <CardSecondary data={mission} textColor={'#07A0EC'} />
          <CardSecondary data={vision} textColor={'#FFAB99'} />
        </div>
      </div>
    </section>
  );
};

export default MissionAndVision;
