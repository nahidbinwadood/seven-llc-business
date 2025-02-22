import { Link } from "react-router-dom";

const ButtonThree = ({ text }) => {
  return (
    <Link to={"/"}>
      <button
        className={`bg-buttonColor rounded-[60px] px-8 flex gap-2 justify-center items-center py-4 text-[#FFF] text-base font-semibold hover:bg-[#FFF] border hover:border-buttonColor hover:text-buttonColor ease-in-out duration-150 w-[261px] `}
      >
        {text}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="#07A0EC"
          className="transition duration-150 ease-in-out group-hover:fill-buttonColor"
        >
          <path
            d="M16.5054 9.6015L7.89838 18.2085L6.48438 16.7945L15.0904 8.1875H7.50538V6.1875H18.5054V17.1875H16.5054V9.6015Z"
            fill="white"
            className="group-hover:fill-buttonColor transition duration-150"
          />
        </svg>
      </button>
    </Link>
  );
};

export default ButtonThree;
