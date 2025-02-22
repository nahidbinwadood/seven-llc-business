/* eslint-disable react/prop-types */
const CardSecondary = ({ data, textColor }) => {
  return (
    <div className="bg-[#FFF] max-w-[729px] shadow-custom rounded-[20px] py-[81px] px-[117.5px]">
      <div>
        <img
          src={`${import.meta.env.VITE_SITE_URL}/${data?.image_url}`}
          alt={data?.title}
        />
        <h1 className="text-[40px] font-bold mt-8" style={{ color: textColor }}>
          {data?.title}
        </h1>
        <p className="text-navbarColor mt-5 text-lg font-medium">
          {data?.description}
        </p>
      </div>
    </div>
  );
};

export default CardSecondary;
