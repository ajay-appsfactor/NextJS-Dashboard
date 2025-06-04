import GetPage from "./getblog/page";
import { Suspense } from "react";
import Link from "next/link";
export default async function Blog() {
  console.log("Sever Blog")
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-center text-2xl mt-5 tex-blue-500 font-semibold text-green-800">
          Blog Page
        </h2>
        <div>
          <Link
            className="text-sm bg-gray-800 hover:bg-gray-600 text-white font-semibold py-2 px-5 rounded"
            href="/"
          >
            Dashboard
          </Link>
        </div>
      </div>
      {/* Get Blog Data */}
      <Suspense fallback={<p className="text-center text-4xl text-gray-800 mt-52 font-mono font-semibold">Loading blog data list</p>}>
        <GetPage />
      </Suspense>
    </div>
  );
}
 