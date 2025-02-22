/* eslint-disable react/prop-types */
import {
  BorderSvg,
  DateSvg,
  HumanSvg,
  LineSvg,
  SubjectSvg,
} from '../SvgContainer/SvgConainer';
import reviewTag from '@/assets/images/reviewSection.png';
import parse from 'html-react-parser';

const BlogDetailsSection = ({ data }) => {
  return (
    <div className="w-[70%] overflow-hidden">
      <div className="w-[972px] h-[596px] overflow-hidden">
        <img
          className="h-full overflow-hidden w-full rounded-2xl object-cover block transition-all duration-300 hover:scale-105"
          src={`${import.meta.env.VITE_SITE_URL}/${data?.image}`}
          alt=""
        />
      </div>
      <div className="flex gap-[84px] mt-7">
        {/* This is the date div */}
        <div className="flex gap-3 items-center">
          <DateSvg />
          <div>
            <h1 className="text-buttonColor font-semibold">Date:</h1>
            <p className="text-navbarColor">{data?.created_date}</p>
          </div>
        </div>
        <LineSvg />
        {/* This is the human div */}
        <div className="flex gap-3 items-center">
          <HumanSvg />
          <div>
            <h1 className="text-buttonColor font-semibold">AUTHOR NAME</h1>
            <p className="text-navbarColor">{data?.author_name}</p>
          </div>
        </div>
        <LineSvg />
        {/* This is the subject div */}
        <div className="flex gap-3 items-center">
          <SubjectSvg />
          <div>
            <h1 className="text-buttonColor font-semibold">SUBJECT</h1>
            <p className="text-navbarColor">{data?.subject}</p>
          </div>
        </div>
      </div>
      {/* This is the border line */}
      <div className="mt-7">
        <BorderSvg />
      </div>
      {/* This is the title section */}
      <h1 className="mt-9 text-headingColor text-[32px] font-bold">
        {data?.title}
      </h1>
      <div className="mt-[23px] text-navbarColor leading-[30.6px]">
        {parse(data?.description)}
      </div>
      {/* This is the review section */}
      <div className="bg-[#FAFBFC] max-w-[973px] shadow-customCard flex flex-col justify-center items-center text-center mt-12 border-l-[6px] border-buttonColor">
        <img className="mt-[45px]" src={reviewTag} alt="" />
        <h1 className="max-w-[668px] mt-6 text-[28px] font-medium">
          Packaging is the first impression of your <br /> product— make it
          count. Together, let’s shape <br /> the future of packaging!
        </h1>
        <h1 className="text-buttonColor text-lg font-bold mt-6 mb-[45px]">
          Albeniz Kerry
        </h1>
      </div>
      <div className="mt-12">
        <h1 className="text-navbarColor text-lg">{data?.descPrimary}</h1>
      </div>
    </div>
  );
};

export default BlogDetailsSection;
