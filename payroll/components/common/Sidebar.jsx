"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronRight, ChevronDown , MoreVertical , Dot } from "lucide-react";
import { sideBarLinks } from "@/constants";
import Icon from "@/helper/Icon";
import Image from "next/image"

const Sidebar = ({desktopSidebar = true}) => {
  const [activeLink, setActiveLink] = useState(null);
  const [activeSubLink, setActiveSubLink] = useState(null);
  const router = useRouter();

  const handleNavClick = (link) => {
    setActiveLink(link);
    setActiveSubLink(null); 
    router.push(link);
  };

  const handleSubNavClick = (link) => {
    setActiveSubLink(link);
    router.push(link);
  };

  return (
    <aside
      className={`hover:w-[286px] dark:bg-black flex-col shadow-lg shadow-indigo-500/40 backdrop-blur-sm bg-indigo-500/10 justify-between sm:block ${desktopSidebar ? "w-[88px]" : "w-[286px]"} h-screen font-poppins group bg-[#fff]`}
    >
      <nav className="w-[100%] flex h-full pb-[10px] justify-between group-hover:px-[50px] px-[20px] items-center flex-col bg-white dark:bg-black border-r shadow-sm">
        <div className="flex pt-5 justify-center items-center">
          <div className="bg-indigo-500 w-[50px] flex justify-center items-center h-[50px] p-2 rounded-xl">
            <Image src="/logo.svg" alt="logo" width={50} height={50} />
          </div>
          <span
            className={`text-[26px] ${desktopSidebar ? "hidden" : ""} group-hover:block ml-[10px] font-bold`}
          >
            Payroll
          </span>
        </div>

        <div
          className={`p-2 border-t dark:border-gray-600 border-indigo-50 mt-[16px] ${desktopSidebar ? "h-[calc(100vh-100px)]" : "h-[calc(100vh-50px)]"} overflow-y-scroll custom-image flex-col pb-2 flex`}
        >
          <ul className="flex flex-col justify-center items-start font-poppins">
            {sideBarLinks.map((nav, index) => {
              const [showSubmenu, setShowSubmenu] = useState(false);
              return (
                <div key={index}>
                  <li
                    className={`flex w-full font-medium justify-between items-center h-[44px] cursor-pointer hover:bg-[#7252f31a] hover:text-primary hover:border-l-primary hover:border-3 rounded-r-lg group-hover:w-[233px] text-[20px] px-[14px] group-hover:px-[30px] my-[3px] ${
                      activeLink === nav.link
                        ? "bg-[#7252f31a] border-l-3 rounded-r-lg border-l-primary rounded-none text-primary"
                        : ""
                    }`}
                    aria-label={nav.title}
                    onClick={() => {
                      setShowSubmenu(!showSubmenu);
                      handleNavClick(nav?.link);
                    }}
                  >
                    <div className="flex justify-center items-center">
                      <Icon name={nav.icon} />
                      <span
                        className={`${desktopSidebar ? "group-hover:block hidden" : "block"} ml-[10px]`}
                      >
                        {nav.title}
                      </span>
                    </div>
                    {nav.subSideBarLinks && (
                      <span className="justify-end ml-8 group-hover:block hidden items-end">
                        {showSubmenu ? (
                          <ChevronDown />
                        ) : (
                          <ChevronRight size={20} />
                        )}
                      </span>
                    )}
                  </li>
                  {showSubmenu && nav.subSideBarLinks && (
                    <div>
                      {nav.subSideBarLinks.map((subNav, subIndex) => (
                        <li
                          key={subIndex}
                          className={`flex items-center h-[44px] cursor-pointer hover:bg-primary rounded-lg group-hover:w-[233px] hover:text-white text-[20px] px-[14px] group-hover:px-[30px] my-[3px] ${
                            activeSubLink === subNav.link
                              ? "bg-primary text-white"
                              : ""
                          }`}
                          aria-label={subNav.title}
                          onClick={() => handleSubNavClick(subNav?.link)}
                        >
                          <span className="text-[28px] text-success-200">
                            <Dot />
                          </span>
                          <span className="hidden group-hover:block ml-[10px]">
                            {subNav.title}
                          </span>
                        </li>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </ul>
        </div>

        <div className="border-t h-12 py-2 flex justify-between dark:border-gray-600 border-4-indigo-800 group-hover:px-3">
          <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            alt="avatar"
            className="w-10 h-10 rounded-md"
          />
          <div
            className={`group-hover:flex ${desktopSidebar ? "hidden" : ""} justify-between items-center overflow-hidden transition-all`}
          >
            <div className="leading-4 ml-3">
              <h4 className="font-semibold">John Roe</h4>
              <span className="text-xs dark:text-gray-400 text-gray-600">
                Johndoe@gmail.com
              </span>
            </div>
            <MoreVertical size={20} />
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;

