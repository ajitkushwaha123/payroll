import React from "react";
import Icon from "@/helper/Icon";
import Image from "next/image";
import PriceFormatter from "@/helper/PriceFormatter";
import StatsTooltip from "./StatsTooltip";

const Stats = ({
  title,
  amount,
  orders,
  percentage,
  icon,
  bgColor,
  lastUpdated,
}) => {
  return (
    <>
      <div className="bg-white dark:bg-black cursor-pointer font-poppins rounded-t-lg w-[100%] px-5 py-3">
        <div className="flex justify-between items-center">
          <div className="flex justify-center items-center">
            <div className={`bg-${bgColor} p-2 rounded-md shadow-md`}>
              <Icon name={icon} />
            </div>

            <h3 className="ml-3 text-medium">{title}</h3>
          </div>
          <StatsTooltip />
        </div>

        <div className="flex justify-between px-2 items-center pt-5">
          <div>
            <h3 className="text-xl font-bold">{amount}</h3>
          </div>

          <div
            className={`text-md flex justify-center items-center px-3 rounded-md py-2 ${percentage >= 0 ? "text-success bg-[#90ffd158]" : "bg-[#ffa6ae21]  text-danger"}`}
          >
            {percentage >= 0 ? (
              <span>
                <Image src={"/up.png"} width={15} height={15} alt="up-arrow" />
              </span>
            ) : (
              <span>
                <Image
                  width={10}
                  height={10}
                  alt="donw-arrow"
                  src={"/down.png"}
                />
              </span>
            )}
            <p className="ml-2">{Math.abs(percentage)} %</p>
          </div>
        </div>
      </div>

      <div className="w-full text-sm border-t-1 py-3 rounded-b-md text-gray-500 bg-white border-gray-200">
        <span className="px-5">Updated : {lastUpdated}</span>
      </div>
    </>
  );
};

export default Stats;
