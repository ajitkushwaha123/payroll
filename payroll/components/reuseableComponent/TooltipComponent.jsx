"use client";
import React from 'react'
import { Tooltip } from "@nextui-org/tooltip";
import Icon from "@/helper/Icon";

const TooltipComponent = ( {title="" , tooltipText="" , color="primary" , placement="bottom" , size=20 , component} ) => {
  return (
    <div>
      <Tooltip
        showArrow={true}
        color={color}
        placement={placement || "bottom"}
        content={tooltipText || ""}
      >
        {component || (
          <button
            type="button"
            className="p-2 text-gray-500 rounded-md cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
          >
            <Icon name={title} size={size} />
          </button>
        )}
      </Tooltip>
    </div>
  );
};

export default TooltipComponent
