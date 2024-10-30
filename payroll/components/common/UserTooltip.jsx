import { Tooltip } from "@nextui-org/tooltip";
// import { Button } from "@nextui-org/react";
import Icon from "@/helper/Icon";


export default function UserTooltip() {
  return (
    <Tooltip
      content={
        <div className="px-2 dark:bg-black font-poppins w-[280px] py-4">
          <div className="flex justify-center items-center">
            <div className="w-[55px] mx-[10px] h-[55px] flex justify-center items-center bg-primary rounded-full">
              <img
                width={"50px"}
                height={"50px"}
                className="rounded-full w-[50px] h-[50px] object-cover"
                src={
                  // apiData?.profile ||
                  "https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg"
                }
              />
            </div>
            <div className="ml-3">
              <div className="text-lg font-bold">Intan Fauziah</div>
              <div className="text-md">Cashier</div>
            </div>
          </div>

          <div className="flex dark:bg-darkPrimary px-5 my-5 py-3 rounded-xl bg-bodyBg justify-between items-center">
            <div>
              <p className="text-md">Clock In</p>
              <p className="text-lg font-bold">08 : 24</p>
            </div>

            <div className="border-2 h-[50px] border-gray-300"></div>

            <div>
              <p className="text-md">Clock Out</p>
              <p className="text-lg font-bold">18 : 24</p>
            </div>
          </div>

          <div className="flex border-2-t border-gray-100 justify-between items-center">
            <button className="flex bg-primary border-2 px-3 py-2 rounded-md text-white shadow-lg border-primary-500 justify-center items-center">
              <Icon name="CircleUser" />
              <span className="ml-3 text-lg">Profile</span>
            </button>

            <div className="border-2 h-[50px] border-r-gray-100 "></div>

            <button className="flex shadow-lg bg-white border-2 border-primary px-3 py-2 rounded-md text-primary justify-center items-center">
              <Icon name="LogOut" />
              <span className="ml-3 text-lg">Logout</span>
            </button>
          </div>
        </div>
      }
    >
      <button>
        <img
          width={"40px"}
          height={"40px"}
          className="rounded-full w-[40px] h-[40px] object-cover"
          src={
            // apiData?.profile ||
            "https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg"
          }
        />
      </button>
    </Tooltip>
  );
}
