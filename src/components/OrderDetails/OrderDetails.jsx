import { MdCheck } from "react-icons/md";
import {
  DeliveredSvg,
  OnTheRoadSvg,
  OrderPlacedSvg,
  OrderSummerySvg,
  PackagingSvg,
} from "../SvgContainer/SvgConainer";

const OrderDetails = ({ checkedData }) => {
  console.log(checkedData);
  return (
    <div className="bg-[#FFF] rounded-[20px] border border-[#F8F9FA] shadow-dashboardShadow mt-10 xmd:mt-5">
      <div className="flex ml-8 gap-[22px] items-center mt-7 mb-[21px]">
        <h1 className="text-headingColor text-xl font-semibold ">
          Order Details
        </h1>
        <OrderSummerySvg />
      </div>
      {/* This is all about progress */}
      <div className="mx-6 rounded-xl mb-[57px]">
        {/* This is the Product Summary */}
        <div className="rounded-lg border p-6 border-[rgba(0,15,45,0.20)] bg-[#FAFBFC] mx-4">
          {/* This is the first div */}
          <div className="flex flex-col md:flex-row gap-5 xmd:gap-0 text-center md:text-left justify-between items-center">
            <div>
              <h1 className="text-base md:text-xl text-headingColor">
                #96459761
              </h1>
              <div className="flex flex-col justify-center md:flex-row items-center gap-1 md:gap-6 mt-2">
                <p className="text-navbarColor">4 Products</p>
                <li className="text-navbarColor text-sm md:text-base">
                  Order Placed in 05 Jan, 2025 at 9:48 AM
                </li>
              </div>
            </div>
            {/*  */}
            <div>
              <h1 className="text-buttonColor text-base md:text-[28px]">
                $1450.00
              </h1>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="mt-7">
          <h1 className="font-medium text-navbarColor">
            Order expected arrival{" "}
            <span className="text-headingColor font-medium">12 Jan, 2025</span>
          </h1>
        </div>
        {/* This is the progress style */}
        <div className="grid grid-cols-4 max-w-[953px] mt-10 ml-8 md:ml-[107px]">
          {/* First Phase */}
          <div className="bg-buttonColor relative h-2">
            <span className="bg-buttonColor w-6 h-6 rounded-full text-white absolute -left-3 -top-2 grid place-items-center">
              <MdCheck className="text-xl" />
            </span>
          </div>

          {/* Second Phase */}
          <div className="bg-[rgba(0,_15,_45,_0.20)] relative h-2">
            <span className="bg-buttonColor w-6 h-6 rounded-full text-white absolute -left-3 -top-2 grid place-items-center">
              {/* <MdCheck className="text-xl" /> */}
            </span>
          </div>

          {/* Third Phase */}
          <div className="bg-[rgba(0,_15,_45,_0.20)] relative h-2">
            <span className="bg-white border border-buttonColor w-6 h-6 rounded-full text-white absolute -left-3 -top-2 grid place-items-center">
              <MdCheck className="text-xl" />
            </span>
          </div>
          {/* Final Check Icon (Fix) */}
          <div className="relative h-2">
            <span className="bg-white border border-buttonColor w-6 h-6 rounded-full text-white absolute -left-3 -top-2 grid place-items-center">
              {/* <MdCheck className="text-xl" /> */}
            </span>
          </div>
        </div>

        {/* Progress text */}
        <div className="mt-7 flex gap-2 sm:gap-9 md:gap-[50px] xmd:gap-[100px] lg:gap-[150px]  md:ml-[60px]">
          {/* This is the Order Placed */}
          <div className="flex flex-col items-center gap-y-3">
            <OrderPlacedSvg />
            <h1 className="text-xs xxs:text-sm font-publicSans text-[#191C1F] font-medium">
              Order Placed
            </h1>
          </div>
          {/* This is the packaging */}
          <div className="flex flex-col items-center gap-y-3">
            <PackagingSvg />
            <h1 className="text-xs xxs:text-sm font-publicSans text-[#191C1F] font-medium">
              Packaging
            </h1>
          </div>
          {/* This is the on the road */}
          <div className="flex flex-col items-center gap-y-3">
            <OnTheRoadSvg />
            <h1 className="text-xs xxs:text-sm font-publicSans text-[#191C1F] font-medium">
              On The Road
            </h1>
          </div>
          {/* This is the Delivered */}
          <div className="flex flex-col items-center gap-y-3">
            <DeliveredSvg />
            <h1 className="text-xs xxs:text-sm font-publicSans text-[#191C1F] font-medium">
              Delivered
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
