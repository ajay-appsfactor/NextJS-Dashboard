"use client";

import React from "react";
import dynamic from "next/dynamic";
import TableTemplate from "../components/TableTemplate";

const PDFDownloadLink = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFDownloadLink),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);

export default function TablePdf() {
  const data = [
    {
      id: 1,
      name: "Ajay",
      email: "ajay@gmail.com",
      phone: 8191041371,
      address: "Jamalpur Kalan",
      link: "www.google.com",
    },
    {
      id: 2,
      name: "Vijay",
      email: "vijay@gmail.com",
      phone: 9756336275,
      address: "Jamalpur Kalan",
      link: "www.google.com",
    },
    {
      id: 3,
      name: "Sagar",
      email: "sagar@gmail.com",
      phone: 7453664520,
      address: "Jamalpur Kalan",
      link: "www.google.com",
    },
    {
      id: 4,
      name: "Raja",
      email: "raja@gmail.com",
      phone: 8453664520,
      address: "Jamalpur Kalan",
      link: "www.google.com",
    },
    {
      id: 5,
      name: "Hanuman",
      email: "hanuman@gmail.com",
      phone: 8453664520,
      address: "Jamalpur Kalan",
      link: "www.hanuman.com",
    },
  ];
  return (
    <div className="p-4">
      <h2 className="text-center mt-5 text-2xl font-semibold text-rose-700">
        Admin Table
      </h2>

      {/* Table print */}
      <div className="overflow-x-auto rounded shadow mt-8">
        <table className="overflow-x-auto w-full border border-gray-200 text-left text-sm sm:text-base">
          <thead className="bg-gray-200 text-gray-700 uppercase">
            <tr>
              <th className="p-3 text-sm">Name</th>
              <th className="p-3 text-sm">Email</th>
              <th className="p-3 text-sm">Phone</th>
              <th className="p-3 text-sm">Address</th>
            </tr>
          </thead>
          <tbody>
            {data.map((admin) => (
              <tr
                key={admin.id}
                className="border-t odd:bg-white even:bg-gray-100"
              >
                <td className="p-3 text-sm">{admin.name}</td>
                <td className="p-3 text-sm">{admin.email}</td>
                <td className="p-3 text-sm">{admin.phone}</td>
                <td className="p-3 text-sm">{admin.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pdf Download Button */}
      <div className="mt-6 flex justify-center">
        <PDFDownloadLink
          document={<TableTemplate data={data} />}
          fileName={`table-${Date.now()}.pdf`}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer"
        >
          {({ loading, error }) =>
            loading
              ? "Generating PDF..."
              : error
              ? "Failed to load PDF"
              : "Download PDF"
          }
        </PDFDownloadLink>
        {/* <TableTemplate data={data} /> */}
      </div>
    </div>
  );
}
