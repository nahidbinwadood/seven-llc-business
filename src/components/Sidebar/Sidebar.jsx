import { Link, NavLink, useLocation } from "react-router-dom";
import dashboardLogo from "../../assets/images/DashboardLogo/dashboardLogo.png";

import {
  DashboardSvg,
  OrderHistorySvg,
  SettingsSvg,
  SignOutSvg,
} from "../SvgContainer/SvgConainer";
import { useState } from "react";
const dashboardSidebarNavLinks = [
  {
    path: "/dashboardLayout/mainDashboard",
    svg: DashboardSvg,
    title: "Dashboard",
  },
  {
    path: "/dashboardLayout/orderHistory",
    svg: OrderHistorySvg,
    title: "Order History",
  },
  {
    path: "/dashboardLayout/paymentHistory",
    svg: DashboardSvg,
    title: "Payment History",
  },
  {
    path: "/dashboardLayout/settings",
    svg: SettingsSvg,
    title: "Settings",
  },
];

const Sidebar = () => {
  const currentLocation = useLocation()?.pathname;


  return (
    <>
      {/* desktop navbar */}
      <section>
        <div className="  bg-[#FFF] shadow-sm h-[100vh]">
          {/* This is the dashboard logo */}
          <div className="flex justify-center mt-[47.8px] mb-[37.36px]">
            <Link to="/">
              <img
                className=" w-[100px] xl:w-[118px] h-[75px] xl:h-[89px] object-cover "
                src={dashboardLogo}
                alt=""
              />
            </Link>
          </div>
          <div className=" px-6 xl:px-12 space-y-4">
            {/* This is the dashboard */}
            {dashboardSidebarNavLinks?.map(link => (
              <NavLink
                key={link?.path}
                to={link?.path}
                className={({ isActive }) =>
                  `flex gap-4 items-center  py-4 px-6 rounded-xl xl:rounded-2xl text-[#FFF] ${
                    isActive
                      ? "bg-buttonColor text-white text-lg"
                      : "bg-white text-navbarColor text-lg"
                  }`
                }
              >
                <link.svg
                  isActive={currentLocation == link?.path ? true : false}
                />

                <span>{link?.title}</span>
              </NavLink>
            ))}

            {/* This is the Sign Out */}
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex gap-4 items-center py-4 px-6 rounded-2xl text-[#FFF] ${
                  isActive
                    ? "bg-buttonColor text-white text-lg"
                    : "bg-white text-navbarColor text-lg"
                }`
              }
            >
              <SignOutSvg />
              <span>Sign Out</span>
            </NavLink>
          </div>
        </div>
        {/* </div> */}
      </section>
    </>
  );
};

export default Sidebar;
