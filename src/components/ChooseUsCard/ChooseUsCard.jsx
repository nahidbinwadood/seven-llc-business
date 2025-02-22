/* eslint-disable react/prop-types */
const ChooseUsCard = ({ data }) => {
  return (
    <div className="max-w-[473px] rounded-[20px] bg-[#FAFBFC] pt-[71.5px] pb-16 px-[43px] text-center flex flex-col items-center overflow-hidden transition-all duration-300 hover:scale-105">
      <img
        className="h-16 w-16 object-cover"
        src={`${import.meta.env.VITE_SITE_URL}/${data?.image_url}`}
        alt="Choose Us Logo"
      />
      <h1 className="text-headingColor text-xl font-semibold max-w-[370px] mt-7">
        {data?.title}
      </h1>
      <p className="text-navbarColor max-w-[387px] leading-9 mt-4">
        {data?.description}
      </p>
    </div>
  );
};

export default ChooseUsCard;
