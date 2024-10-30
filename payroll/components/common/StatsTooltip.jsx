import { Tooltip } from "@nextui-org/tooltip";
import Icon from "@/helper/Icon";
import PriceFormatter from "@/helper/PriceFormatter";

export default function StatsTooltip() {
  return (
    <Tooltip
      content={
        <div className="px-2 dark:bg-black font-poppins w-[350px] pt-5">
          <ul>
            <li className="dark:text-[#c6c6c6] flex text-gray-500 font-semibold py-1 justify-between items-center w-[100%] text-lg px-2">
              No. of orders <span className="dark:text-white text-lg text-black">16</span>
            </li>
            <li className="dark:text-[#d1d1d1] flex py-1 text-gray-500 font-semibold justify-between items-center w-[100%] text-lg px-2">
              Minimum
              <span className="dark:text-white text-black text-lg">
                <PriceFormatter price={46} />
              </span>
            </li>
            <li className="dark:text-[#d1d1d1] flex py-1 text-gray-500 font-semibold justify-between items-center w-[100%] text-lg px-2">
              Average
              <span className="dark:text-white text-black text-lg">
                <PriceFormatter price={619.81} />
              </span>
            </li>
            <li className="dark:text-[#d1d1d1] flex py-1 text-gray-500 font-semibold justify-between items-center w-[100%] text-lg px-2">
              Maximum
              <span className="dark:text-white font-semibold text-black text-lg">
                <PriceFormatter price={4282} />
              </span>
            </li>
            <li className="dark:text-[#d1d1d1] flex py-1 text-gray-500 font-semibold justify-between items-center w-[100%] text-lg px-2">
              Discount
              <span className="dark:text-white font-semibold text-black text-lg">
                <PriceFormatter price={1089.37} />
              </span>
            </li>
            <li className="dark:text-[#d1d1d1] flex py-1 text-gray-500 font-semibold justify-between items-center w-[100%] text-lg px-2">
              Taxes
              <span className="dark:text-white font-semibold text-black text-lg">
                <PriceFormatter price={474.24} />
              </span>
            </li>

            <li className="dark:text-[#d1d1d1] flex text-gray-500 font-semibold py-2 border-t border-gray-200 justify-between items-center w-[100%] text-lg px-2">
              Total
              <span className="dark:text-white font-semibold text-black text-lg">
                <PriceFormatter price={997} />
              </span>
            </li>
          </ul>
        </div>
      }
    >
      <button>
        <Icon name="EllipsisVertical" />
      </button>
    </Tooltip>
  );
}
