import { NoResultSvg, OrderSummerySvg } from "../SvgContainer/SvgConainer";

const EmptyOrderDetails = () => {
  return (
    <div className="bg-[#FFF] rounded-[20px] border border-[#F8F9FA] shadow-dashboardShadow xlg:mt-5 mt-10 px-7 xxs:px-4 sm:px-4 md:px-0">
      <div className="flex md:mx-8 gap-2 md:gap-[22px] items-center mt-7 mb-[21px]">
        <h1 className="text-headingColor text-base xxs:text-lg md:text-xl font-semibold">
          Order Details
        </h1>
        <OrderSummerySvg />
      </div>
      {/* This is all about progress */}
      <div className="mx-6 rounded-xl mb-[57px]">
        {/* This is the Product Summary */}
        <div className="rounded-lg border p-2 xxs:p-6 border-[rgba(0,15,45,0.20)] bg-[#FAFBFC] xxs:mx-4 mx-0">
          <div className="flex flex-col justify-center items-center py-5">
            <h1 className="text-headingColor text-center text-xs xxs:text-base font-bold opacity-40">
              Nothing to Show Now
            </h1>
            <p className="text-navbarColor opacity-40 text-xs xxs:text-base mt-2 xxs:mt-0">
              Please select a order from below to see the order status.
            </p>
          </div>
        </div>
        {/* This is the No Result Svg */}
        <div className="flex flex-col items-center mt-6">
          <NoResultSvg />
          <h1 className="text-headingColor text-xs xxs:text-base font-bold opacity-40">
            No Results
          </h1>
          <p className="text-navbarColor opacity-40 text-xs xxs:text-base mt-2 xxs:mt-0">
            Sorry, there are no results.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmptyOrderDetails;
