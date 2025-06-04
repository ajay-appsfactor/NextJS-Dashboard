"use client";

import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export const DatePickerComponent = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
//   const [isOpen, setIsOpen] = useState(false);

  const handleChangeDate = (date) => {
    setSelectedDate(date);
  };
  return (
    <div className="">
      <DatePicker
        // showIcon
        // inline
        // isClearable
        placeholderText="Select a date"
        selected={selectedDate}
        onChange={handleChangeDate}
      />
    </div>
  );
};
