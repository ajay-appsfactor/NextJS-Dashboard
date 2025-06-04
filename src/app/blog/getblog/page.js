import { Eye } from "lucide-react";
import Link from "next/link";

export default async function GetPage() {
  const data = await fetch("https://api.vercel.app/blog");
  const res = await data.json();
  return (
    <div>
      {res.map((data) => (
        <div
          key={data.id}
          className="flex  items-center justify-between px-6 py-4 basis-128 border mt-8 rounded border-gray-600"
        >
          <div className="font-bold text-sm mb-2 text-indigo-600">
            {data.author}
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-2">
              {data.date}
            </span>
          </div>
          <p className="text-gray-700 text-sm">{data.content}</p>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-2">
              {data.category}
            </span>
          </div>
          <div className="px-6 pt-4 pb-2">
            <Link
              className=" bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 mb-2 flex items-center hover:bg-gray-100"
              href={`/blog/${data.id}`}
            >
              <Eye className="mr-3" /> View
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
