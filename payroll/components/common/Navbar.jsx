"use client";
import React, { useState } from "react";
import { FaBell } from "react-icons/fa6";
import { FaShop } from "react-icons/fa6";
import { ThemeSwitch } from "../theme-switch";
import { useRouter } from "next/navigation";
import Sidebar from "./Sidebar";
import Icon from "@/helper/Icon";
import UserTooltip from "./UserTooltip";
import NotificationTooltip from "./NotificationTooltip";

const Navbar = () => {
  const router = useRouter();
  console.log(router);

  function userLogout() {
    localStorage.removeItem("token");
    setToggle(!toggle);
    router.push("/login");
  }

  const [toggle, setToggle] = useState(false);

  const handleNav = () => {
    setToggle(!toggle);
    console.log(toggle);
  };
  return (
    <>
      <div className="w-[100%] dark:bg-black font-poppins h-[70px] border-b-2  border-secondary bg-white flex justify-between items-center sm:px-[40px]">
        <div className="flex justify-between items-center">
          <div
            onClick={handleNav}
            className="text-[20px] sm:hidden ml-[10px] mr-[5px]"
          >
            <Icon name="Menu"></Icon>
          </div>
          <div className="bg-primary sm:hidden p-2 rounded-xl">
            <img className="w-[28px] h-[28px]" src="./logo.svg" />
          </div>
        </div>

        <div className="flex justify-center items-center">
          <button className="bg-secondary dark:text-black flex justify-center items-center sm:px-[16px] px-[8px] sm:py-[8px] py-[4px] rounded-xl mr-[10px] sm:mr-[20px]">
            <FaShop className="mr-[5px] sm:mr-[10px]" />
            {
              // apiData?.name ||
              "Nancy Shop"
            }
          </button>
          <p className="text-primary justify-center items-center dark:text-white hidden sm:block text-[20px] mx-[10px]">
            <NotificationTooltip />
          </p>
          <ThemeSwitch />
          <div className="w-[45px] mx-[10px] h-[45px] flex justify-center items-center bg-primary rounded-full">
            <UserTooltip />
          </div>
        </div>
      </div>

      {toggle && (
        <div className="z-auto h-screen absolute top-0 w-full shadow-lg shadow-indigo-500/40 backdrop-blur-sm bg-indigo-500/10">
          <div className={`${!toggle ? "hidden" : "flex"} `}>
            <div>
              <Sidebar desktopSidebar={false} />
            </div>
          </div>

          <div
            onClick={handleNav}
            className="absolute top-5 right-5 bg-white p-1 text-block rounded-md text-primary"
          >
            <Icon name="X" />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
