"use client";

import { useEffect, useState } from "react";
import { Filter, ExternalLink } from "lucide-react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

export default function Invoice() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://dummyjson.com/users");
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await res.json();
      setUsers(data.users);
    };

    fetchData();
  }, []);

  const exportToExcel = async () => {
    const res = await fetch("https://dummyjson.com/users");
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();
    const dataToExport = data.users.map((pro) => ({
      Id: pro.id,
      Name: pro.username,
      Email: pro.email,
      Gender: pro.gender,
      DOB: pro.birthDate,
    }));

    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(dataToExport);
    XLSX.utils.book_append_sheet(workbook, worksheet, "Users");

    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });

    const blob = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",
    });

    saveAs(blob, "user_data.xlsx");
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <h3 className="text-center text-xl font-bold text-rose-700 mb-10 antialiased ">
        Invoice Data
      </h3>

      <div className="flex justify-end items-center gap-3 mb-5">
        <button
          onClick={exportToExcel}
          className="flex items-center text-sm font-medium border border-purple-700 text-purple-700 px-5 py-2 rounded hover:bg-purple-50 transition"
        >
          <ExternalLink className="w-4 h-4 mr-2" />
          Export Excel
        </button>
        <button className="flex items-center text-sm font-medium text-white bg-orange-700 px-5 py-2 rounded hover:bg-orange-800 transition">
          <Filter className="w-4 h-4 mr-2" />
          Filter
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 text-center"
          >
            <h2 className="text-lg font-semibold text-gray-800 md:text-sm">
              {user.username}
            </h2>
            <p className="text-sm text-gray-600">{user.email}</p>
            <span className="inline-flex items-center rounded-md bg-pink-50 px-2 mt-3 py-1 text-xs font-medium text-pink-700 ring-1 ring-pink-700/10 ring-inset">
              {user.gender}
            </span>
            <span className="inline-flex items-center rounded-md bg-pink-50 px-2 ml-5 mt-3 py-1 text-xs font-medium text-pink-700 ring-1 ring-pink-700/10 ring-inset">
              {user.birthDate}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
