"use client";

import React, { useRef } from "react";
import Flatpickr from "react-flatpickr";
import { SlCalender } from "react-icons/sl";
import "flatpickr/dist/flatpickr.css";

const Date = () => {
  const flatpickrInstanceRef = useRef(null);

  return (
    <div>
      <h2 className="text-center mt-5 text-2xl text-rose-800 font-semibold">
        Date Picker
      </h2>

      <div className="flex items-center justify-center mt-4 gap-2">
        <div className="relative">
          <Flatpickr
            options={{ dateFormat: "Y-m-d" }}
            onReady={(_, __, fp) => {
              flatpickrInstanceRef.current = fp;
            }}
            placeholder="Select a date"
            className="border px-4 py-2 pr-10 rounded w-64"
          />
          <SlCalender className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
        </div>

        <button
          type="button"
          className="bg-rose-500 text-white px-4 py-2 rounded"
          onClick={() => {
            if (flatpickrInstanceRef.current) {
              flatpickrInstanceRef.current.clear();
            }
          }}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default Date;
