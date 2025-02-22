import { Dropdown, Space } from "antd";
import {
  DashboardSvg,
  OrderHistorySvg,
  SettingsSvg,
  SettingUploadSvg,
  SignOutSvg,
  WorldIconSvg,
  WorldSvg,
} from "../../../components/SvgContainer/SvgConainer";
import dashboardHumanPic from "../../../assets/images/DashboardLogo/dashboardHumanPic.png";
import Logo from "../../../assets/images/logo.png";
import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";


const Navbar = () => {
  const [isSideBarOpen, setisSideBarOpen] = useState(false);
  const currentLocation = useLocation()?.pathname;

  const sideBarRef = useRef(null);
  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          Industry
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          Material
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          Function
        </a>
      ),
    },
  ];

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

  useEffect(() => {
    const handleOutsideClick = event => {
      if (sideBarRef.current && !sideBarRef.current.contains(event.target)) {
        setisSideBarOpen(false);
      }
    };

    if (isSideBarOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isSideBarOpen]);

  return (
    <>
      {/* {desktop version navbar } */}
      {/* Sidebar with Animation */}
      <div ref={sideBarRef} className="z-[500]">
        <AnimatePresence>
          {isSideBarOpen && (
            <motion.section
              ref={sideBarRef}
              className="xlg:hidden h-[100vh] w-full"
              initial={{ x: -280 }} // Initial off-screen position
              animate={{ x: 0 }} // Animate to the open position
              exit={{ x: -280 }} // Animate back to the closed position
              transition={{
                type: "tween",
                ease: "easeInOut",
                duration: 0.5,
              }} // Smooth transition
            >
              <div
                ref={sideBarRef}
                className="fixed top-0 left-0 h-[100vh] z-[999] bg-[#fff] shadow-lg px-0 w-[280px] py-8"
              >
                <section>
                  <div className="w-full xlg:hidden pb-5">
                    <div className="flex w-full items-center justify-between px-5 xlg:px-10">
                      <img
                        src={Logo}
                        alt="Logo"
                        className="h-[50px] w-[60px] object-cover"
                      />
                      {/* Close Button */}
                      <div
                        onClick={() => setisSideBarOpen(false)}
                        className="relative cursor-pointer transition-all ease-linear duration-300 w-[40px] h-[40px] flex items-center justify-center"
                      >
                        <div className="absolute w-[30px] h-[2px] bg-headingColor rotate-45"></div>
                        <div className="absolute w-[30px] h-[2px] bg-headingColor -rotate-45"></div>
                      </div>
                    </div>
                  </div>
                </section>
                <div className="px-5 w-full pt-5 space-y-4">
                  {/* Sidebar Links */}
                  {dashboardSidebarNavLinks?.map(link => (
                    <NavLink
                      onClick={() => setisSideBarOpen(false)}
                      key={link?.path}
                      to={link?.path}
                      className={({ isActive }) =>
                        `flex gap-4 items-center max-w-[250px] py-3 px-3 rounded-2xl text-[#FFF] ${
                          isActive
                            ? "bg-buttonColor text-white text-sm"
                            : "bg-white text-navbarColor text-sm"
                        }`
                      }
                    >
                      <link.svg isActive={currentLocation === link?.path} />
                      <span>{link?.title}</span>
                    </NavLink>
                  ))}
                  {/* Sign Out */}
                  <NavLink
                    onClick={() => setisSideBarOpen(false)}
                    to="/"
                    className={({ isActive }) =>
                      `flex gap-4 items-center py-3 px-3 rounded-2xl text-[#FFF] ${
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
            </motion.section>
          )}
        </AnimatePresence>
      </div>
      <section>
        <div className="w-full hidden  xlg:block  ">
          <div className="flex w-full justify-between px-10 ">
            <h1 className="text-headingColor text-4xl font-semibold py-[35px]">
              Dashboard
            </h1>
            {/* This is the right side */}
            <div className="flex">
              <div className="flex gap-3 items-center">
                <img
                  className="h-[60px] w-[60px] object-cover"
                  src={dashboardHumanPic}
                  alt=""
                />
                <div>
                  <p className="text-base text-headingColor font-semibold">
                    Michael
                  </p>
                  <p className="text-navbarColor">Customer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* mobile version navbar */}
      <section>
        <div className="w-full xlg:hidden py-5 bg-[#fff] ">
          <div className="flex w-full items-center justify-between px-5 xlg:px-10 ">
            <img
              src={Logo}
              alt="not found"
              className="h-[50px] w-[60px] object-cover "
            />
            {/* This is the right side */}
            {!isSideBarOpen && (
              <div
                onClick={() => setisSideBarOpen(true)}
                className="flex relative flex-col ease-linear duration-300 items-center cursor-pointer gap-y-2 justify-center px-1 h-[40px] w-[40px] border-[2px] border-solid rounded-[10px]"
              >
                <span className="w-full h-[1px] bg-headingColor"></span>
                <span className="w-full h-[1px] bg-headingColor"></span>
                <span className="w-full h-[1px] bg-headingColor"></span>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
