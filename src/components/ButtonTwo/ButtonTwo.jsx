import { Link } from "react-router-dom";
import { UpArrowSvg } from "../SvgContainer/SvgConainer";
const ButtonTwo = ({ text, variant }) => {
  return (
    <Link to={"/"}>
      <button
        className={`${
          variant == "transparent"
            ? "bg-transparent text-white hover:bg-white hover:text-buttonColor min-w-[262px]"
            : "bg-[#FFF] text-buttonColor hover:bg-transparent"
        } rounded-[60px] px-8 flex gap-2 justify-center items-center py-4  text-base font-semibold  border hover:border-[#FFF] hover:text-[#FFF] ease-in-out duration-150 group`}
      >
        {text}
        <UpArrowSvg variant={variant} />
      </button>
    </Link>
  );
};

export default ButtonTwo;
