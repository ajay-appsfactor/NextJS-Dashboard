"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useFormik } from "formik";
import { registerSchema } from "@/app/validations/authSchema";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function verificationEmail() {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: registerSchema,
    onSubmit: async (values, { resetForm }) => {
      console.log(values);
      try {
        const res = await fetch("/api/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message);
        }

        toast.success(data.message || "Registration successful!");
        resetForm();
        router.push("/login");
      } catch (err) {
        console.error("Registration error:", err);
        toast.error(err.message || "Something went wrong");
      }
    },
  });

  return (
    <div className="mt-20 flex items-center justify-center p-4">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-md">
        <h2 className="text-2xl antialiased font-bold mb-6 text-center">
          Resend Verification Email
        </h2>
        <form onSubmit={formik.handleSubmit} noValidate>
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

          <button
            type="submit"
            className="w-full bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Resend Verification
          </button>
        </form>
        <ToastContainer />

        {/* Login Link */}
        <div className="text-start text-sm mt-4">
          Already have an account?
          <Link href="/login" className="ml-3 underline decoration-indigo-500 text-indigo-500">Login</Link>
        </div>

        {/* Reset Password */}
        <div className="text-start text-sm mt-4">
          Forgot your password?
          <Link href="/login" className="ml-3 underline decoration-indigo-500 text-indigo-500">Reset password</Link>
        </div>
      </div>
    </div>
  );
}
