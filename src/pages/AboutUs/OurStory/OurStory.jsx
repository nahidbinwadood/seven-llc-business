/* eslint-disable react/prop-types */
import parse from 'html-react-parser';

const OurStory = ({ data }) => {
  return (
    <section className="pr-[210px] bg-[#FAFBFC] pt-28">
      <div className="flex gap-[150px] items-center">
        <div className="">
          <img
            className="w-[829px] h-[714px] object-cover rounded-tl-none rounded-tr-[80px] rounded-br-none rounded-bl-none"
            src={`${import.meta.env.VITE_SITE_URL}/${data?.image_url}`}
            alt={'ourStoryPic'}
          />
        </div>
        <div className="w-1/2">
          <h1 className="text-headingColor text-5xl font-bold max-w-[721px] leading-[67.2px]">
            {data?.title}
          </h1>
          <div className="text-lg text-navbarColor mt-[18px] max-w-[711px]">
            {parse(data?.description)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
