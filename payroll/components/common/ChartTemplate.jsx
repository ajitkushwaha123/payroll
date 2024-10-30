import React from "react";
import Duration from "./Duration";
import DiscountChart from "@/charts/DiscountChart";

const ChartTemplate = ({ graph: Graph , title }) => {
  return (
    <div className="bg-white h-auto rounded-xl p-5">
      <div className="flex justify-between items-center">
        <span>{title}</span>
        <div>
          <Duration />
        </div>
      </div>

      <div className="w-[100%] mt-7 flex justify-center items-center h-[360px]">
        {Graph}
      </div>
    </div>
  );
};

export default ChartTemplate;
