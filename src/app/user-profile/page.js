"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

import Link from "next/link";
import { useFormik } from "formik";
import { userProfileSchema } from "../validations/profileSchema";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoImage } from "react-icons/io5";

const ImageUpload = () => {
  const [data, setData] = useState(null);
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      image: null,
    },
    validationSchema: userProfileSchema,
    onSubmit: async (values, { resetForm }) => {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("image", values.image);

      setData(URL.createObjectURL(values.image));
      console.log(formData);
      try {
        const res = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });
       console.log(res)
        const data = await res.json();

        if (!res.ok) throw new Error(data.error);

        toast.success("Profile uploaded successfully!");
        resetForm();
        
        router.push("/user")
        console.log(data);
      } catch (error) {
        console.error("User Profile error:", error);
        toast.error(error.message || "Something went wrong");
      }
    },
  });
  return (
    <div className="flex items-center justify-center p-4 mt-5">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">User Profile</h2>
        <form onSubmit={formik.handleSubmit}>
          {/* Name */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm text-gray-700 font-medium mb-1 "
            >
              Name <span className="text-red-500">*</span>
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
              Email <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="mt-1 block w-full rounded border-gray-800 shadow-sm p-2 border"
            />
            {formik.touched.email && formik.errors.email ? (
              <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
            ) : null}
          </div>

          {/* Cover Photo */}
          <div className="col-span-full">
            <label
              htmlFor="cover-photo"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Cover Photo <span className="text-red-500">*</span>
            </label>
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
              <div className="text-center">
                <IoImage
                  aria-hidden="true"
                  className="mx-auto size-12 text-gray-300"
                />
                <div className="mt-4 flex flex-col text-sm/6 text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 focus-within:outline-hidden hover:text-indigo-500"
                  >
                    <span className="text-center">Upload a file</span>
                    <input
                      id="file-upload"
                      name="image"
                      type="file"
                      accept="image/*"
                      className="sr-only"
                      onChange={(event) => {
                        const file = event.currentTarget.files[0];
                        formik.setFieldValue("image", file);
                      }}
                    />
                  </label>
                </div>
                {/* <p className="pl-1">or drag and drop</p> */}
                <p className="text-xs/5 text-gray-600">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
            {formik.touched.image && formik.errors.image && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.image}</p>
            )}
          </div>

          <div>
            {data && (
              <img
                src={data}
                alt="Uploaded preview"
                className="w-20 h-20"
                draggable="false"
              />
            )}
          </div>

          <button
            type="submit"
            className="w-full mt-5 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Upload
          </button>
        </form>
        <ToastContainer />

        <div className="text-center text-sm mt-4">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="underline underline-offset-4">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;
