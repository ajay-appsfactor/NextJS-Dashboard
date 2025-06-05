"use client";

import { adminSchema } from "@/app/validations/adminSchema";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddAdmin() {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
    },
    validationSchema: adminSchema,
    onSubmit: async (values, { resetForm }) => {
      console.log(values);
      try {
        const res = await fetch("/api/admin/add-admin", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });
        if (!res.ok) {
          const data = await res.json();
          throw new Error(data.message);
        }

        const data = await res.json();
        console.log(data)
        toast.success("Admin Added successful!");
        router.push("/admin");
        resetForm();
      } catch (err) {
        toast.error("Failed to add admin")
        console.log(err);
      }
    },
  });
  return (
    <div className="bg-white p-6 w-full max-w-4xl mx-auto my-5 shadow-md">
      <h3 className="text-xl text-yellow-500 font-bold mb-4 text-center">
        Add New Admin
      </h3>
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        {/* Name */}
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm text-gray-700 font-medium mb-1 "
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
          {formik.touched.name && formik.errors.name ? (
            <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
          ) : null}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm text-gray-700 font-medium mb-1 "
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
          {formik.touched.email && formik.errors.email ? (
            <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
          ) : null}
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-sm text-gray-700 font-medium mb-1 "
          >
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="phone"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
            className="mt-1 block w-full rounded border-gray-800 shadow-sm p-2 border"
          />
          {formik.touched.phone && formik.errors.phone ? (
            <p className="text-red-500 text-sm mt-1">{formik.errors.phone}</p>
          ) : null}
        </div>

        {/* Address */}
        <div className="mb-4">
          <label
            htmlFor="address"
            className="block text-sm text-gray-700 font-medium mb-1 "
          >
            Address
          </label>
          <input
            id="address"
            name="address"
            type="address"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address}
            className="mt-1 block w-full rounded border-gray-800 shadow-sm p-2 border"
          />
          {formik.touched.address && formik.errors.address ? (
            <p className="text-red-500 text-sm mt-1">{formik.errors.address}</p>
          ) : null}
        </div>

        <div className="flex flex-col sm:flex-row justify-end gap-3 mt-4">
          <Link
            href="/admin"
            className="w-full sm:w-auto text-white px-5 bg-gray-800 hover:bg-gray-500 py-2 font-semibold  transition flex items-center justify-center gap-2 "
          >
            Back
          </Link>
          <button
            type="submit"
            className={`w-full sm:w-auto text-white px-5  py-2 font-semibold  transition flex items-center justify-center gap-2 ${
              formik.isSubmitting || !formik.isValid
                ? "bg-yellow-500 cursor-not-allowed"
                : "bg-yellow-500 hover:bg-yellow-600 cursor-pointer"
            }`}
            disabled={formik.isSubmitting || !formik.isValid}
          >
            Submit
          </button>
        </div>
      </form>

      <ToastContainer />
    </div>
  );
}
