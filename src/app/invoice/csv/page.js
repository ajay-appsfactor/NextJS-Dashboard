"use client";

import { useState } from "react";
import { MdUpload } from "react-icons/md";

export default function CSV() {
  const [csvData, setCsvData] = useState([]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    console.log(file);

    if (!file.name.endsWith(".csv")) {
      throw new Error("Please upload a CSV file.");
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target.result;
      const rows = text.split("\n").map((row) => row.split(","));
      setCsvData(rows);
    };
    console.log(reader);
    reader.readAsText(file);
  };
  return (
    <div>
      <h2 className="text-center text-xl mb-3 font-semibold text-blue-800">
        CSV File Import
      </h2>

      <div className="flex items-center justify-center mb-8">
        <div className=" w-64">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-40 border-2 border-blue-300 border-dashed rounded-lg cursor-pointer bg-gray-50"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-3">
              <MdUpload className="text-xl" />
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                CSV (MAX. 800x400px)
              </p>
            </div>
            <input
              id="dropzone-file"
              type="file"
              accept=".csv"
              className="hidden"
              onChange={handleFileUpload}
            />
          </label>
        </div>
      </div>

      {csvData.length > 0 && (
        <table className="overflow-x-auto w-full border border-gray-200 text-left text-sm sm:text-base rounded">
          <tbody>
            {csvData.map((row, index) => (
              <tr
                key={index}
                className="border-t odd:bg-white even:bg-gray-100"
              >
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="p-3 text-sm">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
