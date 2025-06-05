"use client";

import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { adminSchema } from "@/app/validations/adminSchema";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function EditAdmin() {
  const router = useRouter();
  const params = useParams();
  const { id } = params;
  console.log(id);
  const [initialValues, setInitialValues] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`http://localhost:3000/api/admin/${id}`);
      const { adminData } = await res.json();
      setInitialValues({
        name: adminData.name || "",
        email: adminData.email || "",
        phone: adminData.phone || "",
        address: adminData.address || "",
      });
    }

    fetchData();
  }, [id]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    validationSchema: adminSchema,
    onSubmit: async (values) => {
      console.log("Submitting:", values);
      try {
        await updateAdmin(id, values);
        console.log("Admin updated successfully");
      } catch (err) {
        console.log("Update failed", err);
      }
    },
  });

  const updateAdmin = async (id, data) => {
    try {
      await fetch(`http://localhost:3000/api/admin/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body:JSON.stringify(data)
      });
       
      toast.success("Admin Update Successfully")
      router.push('/admin')
    } catch (error) {
      toast.error("Failed to update admin")
      console.error("Error updating admin", error);
    }
  };

  return (
    <div className="bg-white p-6 w-full max-w-4xl mx-auto my-5 shadow-md">
      <h3 className="text-xl text-yellow-500 font-bold mb-4 text-center">
        Edit Admin
      </h3>
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        {/* Name */}
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className="mt-1 block w-full rounded border-gray-800 shadow-sm p-2 border"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="mt-1 block w-full rounded border-gray-800 shadow-sm p-2 border"
          />
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
            className="mt-1 block w-full rounded border-gray-800 shadow-sm p-2 border"
          />
        </div>

        {/* Address */}
        <div className="mb-4">
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-700"
          >
            Address
          </label>
          <input
            id="address"
            name="address"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address}
            className="mt-1 block w-full rounded border-gray-800 shadow-sm p-2 border"
          />
        </div>

        <div className="flex flex-col sm:flex-row justify-end gap-3 mt-4">
          <Link
            href="/admin"
            className="w-full sm:w-auto text-white px-5 bg-gray-800 hover:bg-gray-500 py-2 font-semibold transition flex items-center justify-center gap-2"
          >
            Back
          </Link>
          <button
            type="submit"
            className="w-full sm:w-auto text-white px-5 py-2 font-semibold bg-yellow-500 hover:bg-yellow-600"
          >
            Update
          </button>
        </div>
      </form>
        <ToastContainer />
    </div>
  );
}
