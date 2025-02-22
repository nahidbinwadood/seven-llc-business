import React from "react";
import {
  OrderSummerySvg,
  ProductLineBorder,
} from "../../../../components/SvgContainer/SvgConainer";

import productSummeryPic1 from "../../../../assets/images/productSummery/productSummeryPic.png";
import productSummeryPic2 from "../../../../assets/images/productSummery/productSummeryPic2.png";
import productSummeryPic3 from "../../../../assets/images/productSummery/productSummeryPic3.png";
import { DataTableDemo } from "@/components/DataTableDemo/DataTableDemo";
import SecondTable from "./SecondTable";

const Dashboard = () => {
  const productSummaries = [
    {
      img: productSummeryPic1,
      category: "Paper Packaging",
      name: "Bakery Boxes",
    },
    {
      img: productSummeryPic2,
      category: "Glass Packaging",
      name: "Flower Jars",
    },
    {
      img: productSummeryPic3,
      category: "Eco-Friendly Packaging",
      name: "Bamboo-Topped Jars",
    },
    {
      img: productSummeryPic1,
      category: "Eco-Friendly Packaging",
      name: "Bamboo-Topped Jars",
    },
    {
      img: productSummeryPic1,
      category: "Eco-Friendly Packaging",
      name: "Bamboo-Topped Jars",
    },
  ];

  return (
    <section className="">
      <div className="md:px-10 px-3">
        <h1 className="text-lg sm:text-xl lg:text-4xl">
          Welcome{" "}
          <span className="text-headingColor font-semibold text-lg sm:text-xl lg:text-4xl">
            Michael!
          </span>
        </h1>
        {/*  */}
        <div className="bg-[#FFF] rounded-[20px] border border-[#F8F9FA] shadow-dashboardShadow mt-5 px-2 xxs:px-4 sm:px-4 md:px-0">
          <div className="flex ml-8 gap-[22px] items-center mt-7 mb-[21px]">
            <h1 className="text-headingColor text-base xxs:text-lg md:text-xl font-semibold ">
              Order Summery
            </h1>
            <OrderSummerySvg />
          </div>
          {/*  */}
          <div
            style={{
              background: "linear-gradient(107deg, #F8FEFF 0%, #FFF9F8 100%)",
            }}
            className="mx-2 md:mx-6 rounded-xl mb-[57px]"
          >
            <h1 className="text-lg lg:text-2xl text-headingColor font-semibold ml-5 md:ml-[38px] pt-[26px]">
              Product Summary
            </h1>
            {/* This is the Product Summary */}
            <div className="grid xxs:grid-cols-2 xmd:grid-cols-3 xlg:grid-cols-5 md:flex-row justify-between items-center mt-5 pb-12 xlg:ml-[38px] gap-5 px-5 xxl:px-0">
              {productSummaries?.map((product, index) => (
                <div
                  key={index}
                  className="flex items-center justify-left gap-2 md:gap-3 w-full"
                >
                  <img src={product.img} alt={product.category} />
                  <div className="xxl:pr-[70px]">
                    <p className="text-headingColor font-bold text-xs xxs:text-sm">
                      {product.category}
                    </p>
                    <p className="text-headingColor text-xs xxs:text-sm">
                      {product.name}
                    </p>
                  </div>
                  {index < productSummaries.length - 1 && (
                    <div className="hidden xlg:block">
                      <ProductLineBorder />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* This is the product table div */}
        <div className="pb-10 px-8 rounded-[10px] shadow-dashboardShadow bg-[#FFF] border border-[#F8F9FA] mt-8">
          <div className="flex gap-[22px] items-center mt-[28px] mb-[39px]">
            <p className="text-headingColor text-xl font-semibold">
              Product (02)
            </p>
            <OrderSummerySvg />
          </div>
          <DataTableDemo />
        </div>
        {/* This is thr third div */}
        <div className="my-8">
          <SecondTable />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
