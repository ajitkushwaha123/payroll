import { Tooltip } from "@nextui-org/tooltip";
// import { Button } from "@nextui-org/react";
import Icon from "@/helper/Icon";
import { FaBell } from "react-icons/fa6";
import Image from "next/image";
import { notificationData } from "@/constants/index";

export default function NotificationTooltip() {
  return (
    <Tooltip
      content={
        <div className="bg-white dark:bg-black py-4 m-0 h-[600px] overflow-y-scroll chalaja font-poppins w-[500px]">
          <div className="text-xl px-4 font-medium  pb-4">Notification</div>

          <div className="pb-[30px]">
            {notificationData.map((data, index) => (
              <div
                key={index}
                className={`flex border-t-2 justify-start px-3 w-[100%] ${data.unread ? "bg-slate-50 dark:bg-black dark:border-darkPrimary" : "bg-white dark:bg-darkPrimary dark:border-black"} py-5 items-start`}
              >
                <div className="bg-secondary p-2 rounded-md">
                  <Image
                    src={data.image}
                    width="35"
                    height="35"
                    alt="Notification Icon"
                  />
                </div>

                <div className="ml-5">
                  <div>
                    <div className="flex justify-start items-center">
                      <span className="text-lg font-bold">{data.name}</span>
                      <div className="flex justify-start items-center">
                        <Icon name="Dot" /> <span>{data.time}</span>
                      </div>
                    </div>
                    <div className="text-tiny">{data.order}</div>
                  </div>

                  <div className="mt-[15px]">
                    {data.items.map((item, index) => (
                      <div
                        key={index}
                        className={`flex my-[10px] bg-white w-full ${data.unread ? "dark:bg-darkPrimary" : "dark:bg-[#111]"} justify-between items-center shadow-md rounded-md py-1 px-[15px]`}
                      >
                        <span className="w-[10%]">{item.quantity}</span>
                        <p className="w-[80%]">{item.name}</p>
                        <span className="w-[10%]">{item.price}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex w-full justify-end mt-[16px] items-end">
                    <button className="px-[14px] py-2 text-primary border-2 border-primary rounded-lg">
                      See Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="fixed bottom-0 left-0 right-0 w-full bg-secondary dark:bg-black shadow-lg rounded-md">
            <div className="flex justify-between items-center text-[17px] px-10 py-3">
              <button className="text-primary text-small">
                Mark all as read
              </button>
              <button className="text-white bg-primary rounded-md px-5 py-2 shadow-sm">
                View all notification
              </button>
            </div>
          </div>
        </div>
      }
    >
      <button className="flex justify-center items-center">
        <FaBell />
      </button>
    </Tooltip>
  );
}
