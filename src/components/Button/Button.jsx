/* eslint-disable react/prop-types */
const Button = ({ text, color }) => {
  return (
    <button
      className={`${color} rounded-[60px] px-5 sm:px-6 md:px-7 lg:px-8 flex gap-2 justify-center items-center py-4 text-[#FFF] font-semibold hover:bg-transparent border border-buttonColor hover:border-buttonColor hover:text-buttonColor ease-in-out duration-150 group text-sm sm:text-base`}
    >
      {text}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 25 25"
        fill="none"
        className="transition size-5 md:size-6 duration-150 ease-in-out group-hover:fill-buttonColor"
      >
        <path
          d="M16.5054 9.6015L7.89838 18.2085L6.48438 16.7945L15.0904 8.1875H7.50538V6.1875H18.5054V17.1875H16.5054V9.6015Z"
          fill="white"
          className="group-hover:fill-buttonColor transition duration-150"
        />
      </svg>
    </button>
  );
};

export default Button;
