import { useState } from "react";
import { Input } from "@/components/ui/input";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

const PasswordInput = ({ label, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="px-6 mt-6 relative">
      <label className="text-sm text-headingColor">{label}</label>
      <Input
        className="h-11 mt-2 border bg-[#D9D9D91A] rounded-[2px] !text-sm text-headingColor "
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
      />
      <span
        onClick={() => setShowPassword(!showPassword)}
        className="absolute bottom-[14px] right-[35px]"
      >
        {showPassword ? (
          <IoEyeOutline className="text-xl cursor-pointer" />
        ) : (
          <IoEyeOffOutline className="text-xl text-black cursor-pointer" />
        )}
      </span>
    </div>
  );
};

export default PasswordInput;
