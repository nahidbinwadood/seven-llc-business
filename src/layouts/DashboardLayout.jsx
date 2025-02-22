import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../pages/Dashboard/Navbar/Navbar";

const DashboardLayout = () => {
  return (
    <div className="flex w-full relative max-h-screen overflow-hidden">
      {/* Sidebar - Ensure it is fixed and doesn't affect layout */}
      <div className="hidden xlg:block xlg:w-[345px] fixed h-full">
        <Sidebar />
      </div>

      {/* Main content wrapper */}
      <div className="w-full xlg:ml-[345px] flex flex-col min-h-screen">
        {/* Navbar - Fixed to the top */}
        <div className=" z-[999] h-[60px] xlg:h-[120px] fixed top-0 left-0 xlg:left-[345px] w-full xlg:w-[calc(100%-345px)] ">
          <Navbar />
        </div>

        {/* Content below navbar */}
        <div className="flex-1 z-0 bg-[#FAFBFC] overflow-y-auto mt-[60px] xlg:mt-[120px]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
