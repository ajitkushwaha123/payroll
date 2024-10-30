"use client";
import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import { durationFormatter } from "@/helper/DateFormatter";

const Duration = () => {
  const [value, setValue] = useState({
    startDate: '',
    endDate: '',
  });

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div className="border-2 border-gray-300 outline-none rounded-lg">
      <Datepicker
        value={value}
        showFooter={true}
        showShortcuts={true}
        configs={{
          footer: {
            cancel: "Quit",
            apply: "Done",
          },
        }}
        onChange={handleChange}
        primaryColor={"indigo"}
      />
    </div>
  );
};

export default Duration;
