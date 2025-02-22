import { useState } from "react";
import HaveDesign from "../../components/DesignInformation/HaveDesign/HaveDesign";
import NeedDesign from "../../components/DesignInformation/NeedDesign/NeedDesign";
import { Input } from "@/components/ui/input";

const OrderForms = () => {
  const [selectedOption, setSelectedOption] = useState("I Have a Design");

  const handleCheckboxChange = (option) => {
    setSelectedOption(option === selectedOption ? null : option);
  };

  return (
    <section className="pt-[115px]">
      <div className="container mx-auto border border-[#000F2D33] rounded-[30px] py-[120px] px-[80px]">
        {/* This is the title section */}
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-headingColor text-5xl font-bold">Order Forms</h1>
          <p className="max-w-[697px] text-center mt-6 text-navbarColor font-semibold italic">
            &quot;MOQs vary depending on product specifications and design
            requirements. Accurate MOQs and pricing will be confirmed during the
            quotation process. Thank you for your understanding!&quot;
          </p>
        </div>

        {/* This is the contact information */}
        <div className="mt-12">
          <h1 className="text-center text-buttonColor text-2xl">
            Contact Information
          </h1>
          {/* First Input Column */}
          <div className="flex gap-10 mt-[19px]">
            {/* Full Name */}
            <div className="flex flex-col gap-y-[10.5px] w-[50%]">
              <label className="text-lg text-headingColor font-medium">
                Full Name*
              </label>
              <Input
                className="py-[31px] h-[97px] pl-10 bg-[#D9D9D91A] rounded-[10px] !text-xl text-headingColor"
                type="text"
                placeholder="Full Name"
              />
            </div>
            {/* Email */}
            <div className="flex flex-col gap-y-[10.5px] w-[50%]">
              <label className="text-lg text-headingColor font-medium">
                Email*
              </label>
              <Input
                className="py-[31px] h-[97px] pl-12 bg-[#D9D9D91A] rounded-[10px] !text-xl text-headingColor"
                type="email"
                placeholder="Email"
              />
            </div>
          </div>
          {/* Second Input Column  */}
          <div className="flex gap-10 mt-[19px]">
            <div className="flex flex-col gap-y-[10.5px] w-[50%]">
              <label className="text-lg text-headingColor font-medium">
                Phone*
              </label>
              <Input
                className="py-[31px] h-[97px] pl-12 bg-[#D9D9D91A] rounded-[10px] !text-xl text-headingColor"
                type="number"
                placeholder="Phone"
              />
            </div>
            {/*  */}
            <div className="flex flex-col gap-y-[10.5px] w-[50%]">
              <label className="text-lg text-headingColor font-medium">
                Company Name
              </label>
              <Input
                className="py-[31px] h-[97px] pl-12 bg-[#D9D9D91A] rounded-[10px] !text-xl text-headingColor"
                type="text"
                placeholder="Company Name"
              />
            </div>
          </div>
        </div>

        {/*  */}
        <div className="mt-12">
          <h1 className="text-center text-buttonColor text-2xl">
            Design Information
          </h1>
          <button className="bg-buttonColor w-full text-white text-base font-semibold py-[23px] rounded-[10px] mt-7">
            Do You Have a Completed Design?
          </button>
        </div>
        {/* This is the checkout  */}
        <div className="flex gap-7 justify-center bg-[#FAFBFC] mt-5 py-7 rounded-[10px]">
          <div className="flex gap-2 border border-[#7D7F85] py-[10px] px-[32px] rounded-lg items-center">
            <input
              className="h-4 w-4"
              type="checkbox"
              name="example"
              value="Arefin"
              id="checkboxArefin1"
              checked={selectedOption === "I Have a Design"}
              onChange={() => handleCheckboxChange("I Have a Design")}
            />
            <p>I Have a Design</p>
          </div>

          <div className="flex gap-2 border border-[#7D7F85] py-[10px] px-[32px] rounded-lg items-center">
            <input
              className="h-4 w-4"
              type="checkbox"
              name="example"
              value="Arefin"
              id="checkboxArefin2"
              checked={selectedOption === "I Need a Design"}
              onChange={() => handleCheckboxChange("I Need a Design")}
            />
            <p>I Need a Design</p>
          </div>
        </div>
        <div>
          {/* Content based on selected checkbox */}
          {selectedOption === "I Have a Design" && <HaveDesign />}

          {selectedOption === "I Need a Design" && <NeedDesign />}
        </div>
      </div>
    </section>
  );
};

export default OrderForms;
