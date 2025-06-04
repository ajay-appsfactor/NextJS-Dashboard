"use client";

import React, {useState, useEffect} from "react";
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
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const res = await fetch("/api/admin/get-admin");
      const data = await res.json();
      setUsers(data.adminData);
    }
    fetchUsers();
  }, []);

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
            {users.map((admin) => (
              <tr
                key={admin._id}
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
          document={<TableTemplate data={users} />}
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
