/* eslint-disable react/prop-types */
const Card = ({ data }) => {
  return (
    <section>
      <div className="mt-12 hover:bg-[#E0E0E0] hover:shadow-custom_shadow ease-out duration-300 p-[10px] hover:rounded-xl group">
        <img
          className="w-[347px] h-[360px] object-cover transition-transform ease-out duration-300 transform group-hover:scale-95 rounded-2xl"
          src={`${import.meta.env.VITE_SITE_URL}/${data?.image}`}
          alt=""
        />
        <h2 className="text-headingColor text-xl font-semibold mt-5 h-20">
          {data?.title}
        </h2>
      </div>
    </section>
  );
};

export default Card;
