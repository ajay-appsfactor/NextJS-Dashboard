"use client";

import Link from "next/link";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AdminTable({ data }) {
  const [admins, setAdmins] = useState(data);

  const adminDelete = async (id) => {
    try {
      await fetch(`http://localhost:3000/api/admin/${id}`, {
        method: "DELETE",
      });
      toast.success("Admin Delete Successfully");
      setAdmins((prev) => prev.filter((admin) => admin._id !== id));
    } catch (error) {
      console.error("Failed to delete admin", error);
      toast.error("Failed to delete admin");
    }
  };

  return (
    <div className="overflow-x-auto rounded shadow mt-8">
      <table className="overflow-x-auto w-full border border-gray-200 text-left text-sm sm:text-base">
        <thead className="bg-gray-200 text-gray-700 uppercase">
          <tr>
            <th className="p-3 text-sm">Name</th>
            <th className="p-3 text-sm">Email</th>
            <th className="p-3 text-sm">Phone</th>
            <th className="p-3 text-sm">Address</th>
            <th className="p-3 text-sm">Actions</th>
          </tr>
        </thead>
        <tbody>
          {admins.map((admin) => (
            <tr
              key={admin._id}
              className="border-t odd:bg-white even:bg-gray-100"
            >
              <td className="p-3 text-sm">{admin.name}</td>
              <td className="p-3 text-sm">{admin.email}</td>
              <td className="p-3 text-sm">{admin.phone}</td>
              <td className="p-3 text-sm">{admin.address}</td>
              <td className="p-3 flex items-center gap-3">
                <Link
                  href={`/admin/${admin._id}`}
                  className="text-blue-600 hover:text-blue-800 cursor-pointer"
                >
                  Edit
                </Link>
                <button
                  onClick={() => adminDelete(admin._id)}
                  className="text-red-600 hover:text-red-800 cursor-pointer"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ToastContainer />
    </div>
  );
}
