"use client";

import React, { useState, useEffect, useMemo } from "react";
import dynamic from "next/dynamic";
import TableTemplate from "../../components/TableTemplate";

const BlobProvider = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.BlobProvider),
  { ssr: false }
);

export default function TablePdf() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch("/api/admin/get-admin");
        if (!res.ok) throw new Error("Failed to fetch users");
        const data = await res.json();
        setUsers(data.adminData);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }
    fetchUsers();
  }, []);

  const tableDocument = useMemo(() => <TableTemplate data={users} />, [users]);

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


      {/* Open PDF in New Tab */}
      <div className="mt-6 flex justify-center">
        <BlobProvider document={tableDocument}>
          {({ url, loading, error }) => {
            if (loading) return <p>Generating PDF...</p>;
            if (error) return <p>Failed to generate PDF.</p>;

            return (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 cursor-pointer"
              >
                Open PDF in New Tab
              </a>
            );
          }}
        </BlobProvider>
      </div>
    </div>
  );
}
