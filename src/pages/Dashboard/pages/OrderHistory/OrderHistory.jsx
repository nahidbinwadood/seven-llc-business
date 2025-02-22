import { DataTableDemo } from "@/components/DataTableDemo/DataTableDemo";
import EmptyOrderDetails from "@/components/EmptyOrderDetails/EmptyOrderDetails";
import OrderDetails from "@/components/OrderDetails/OrderDetails";
import { OrderSummerySvg } from "@/components/SvgContainer/SvgConainer";
import { useState } from "react";

const OrderHistory = () => {
  const [checkedData, setCheckedData] = useState(null);

  return (
    <section className="px-4 md:px-8">
      {checkedData ? (
        <OrderDetails checkedData={checkedData} />
      ) : (
        <EmptyOrderDetails />
      )}
      {/*  */}
      <div className="pb-10 px-8 rounded-[10px] shadow-dashboardShadow bg-[#FFF] border border-[#F8F9FA] mt-8 mb-5 xmd:mb-24">
        <div className="flex gap-2 md:gap-[22px] items-center mt-[28px] mb-2 md:mb-[39px]">
          <p className="text-headingColor text-base xxs:text-lg md:text-xl font-semibold">
            Product (02)
          </p>
          <OrderSummerySvg />
        </div>
        <DataTableDemo setCheckedData={setCheckedData} />
      </div>
    </section>
  );
};

export default OrderHistory;
