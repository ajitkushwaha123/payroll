import React from "react";
import TooltipComponent from "./TooltipComponent";
import Icon from "@/helper/Icon";
import TextField from "@/components/reuseableComponent/TextField";

const TextEditor = ({ inputData, textArea = true }) => {
  const textOptions = [
    {
      icon: "Paperclip",
      name: "attachment",
      title: "Paperclip",
      tooltipText: "Attach file",
      color: "primary",
      placement: "bottom",
    },
    {
      icon: "LocateFixed",
      name: "location",
      title: "LocateFixed",
      tooltipText: "Location",
      color: "primary",
      placement: "bottom",
    },
    {
      icon: "Image",
      name: "image",
      title: "Image",
      tooltipText: "Upload image",
      color: "primary",
      placement: "bottom",
    },
    {
      icon: "FileJson2",
      name: "file",
      title: "FileJson2",
      tooltipText: "Format code",
      color: "primary",
      placement: "bottom",
    },
    {
      icon: "SmilePlus",
      name: "emoji",
      title: "SmilePlus",
      tooltipText: "Add emoji",
      color: "primary",
      placement: "bottom",
    },
    {
      icon: "ListOrdered",
      name: "list",
      title: "ListOrdered",
      tooltipText: "Add list",
      color: "primary",
      placement: "bottom",
    },
    {
      icon: "Settings",
      name: "settings",
      title: "Settings",
      tooltipText: "Settings",
      color: "primary",
      placement: "bottom",
    },
    {
      icon: "AtSign",
      name: "at",
      title: "AtSign",
      tooltipText: "Timeline",
      color: "primary",
      placement: "bottom",
    },
    {
      icon: "Download",
      name: "download",
      title: "Download",
      tooltipText: "Download",
      color: "primary",
      placement: "bottom",
    },
    {
      icon: "Expand",
      name: "expand",
      title: "Expand",
      tooltipText: "Full screen",
      color: "primary",
      placement: "bottom",
    },
  ];

  const handleInputChange = (e) => {
    inputData(e.target.value);
  };

  return (
    <div>
      <form>
        <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
          <div className="flex items-center justify-between px-3 py-2 border-b dark:border-gray-600">
            <div className="flex flex-wrap items-center divide-gray-200 sm:divide-x sm:rtl:divide-x-reverse dark:divide-gray-600">
              {textOptions.map((item, index) => {
                return (
                  <TooltipComponent
                    key={index}
                    title={item.icon}
                    tooltipText={item.tooltipText}
                    color={item.color}
                    placement={item.placement}
                  />
                );
              })}
            </div>
          </div>

          {textArea ? (
            <div className="px-4 py-2 bg-white rounded-b-lg dark:bg-gray-800">
              <label for="editor" className="sr-only">
                Comment
              </label>
              <textarea
                id="editor"
                rows="8"
                className="block w-full outline-none px-0 text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                placeholder="Write an update ..."
                required
                onChange={handleInputChange}
              ></textarea>
            </div>
          ) : (
            // <TextField
            //   className="py-2 px-4 bg-white rounded-b-lg dark:bg-gray-800"
            //   // title={item?.title}
            //   // type={item?.type}
            //   // onInputChange={(values) => handleInputChange(item?.id, values)}
            //   // input={data[item?.id]}
            //   // editable={editable}
            // />
            <div>
              <input
                type="text"
                onChange={handleInputChange}
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default TextEditor;
