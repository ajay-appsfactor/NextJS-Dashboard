import Link from "next/link";

export default async function BlogId({ params }) {
  const { blogId } = await params;
  //   console.log(blogId);
  const data = await fetch(`https://api.vercel.app/blog/${blogId}`);
  const res = await data.json();

  return (
    <div className="w-full max-w-md bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 mx-auto mt-8">
      <div className="flex flex-col items-center pb-10">
        <h5 className="mb-1 text-2xl font-medium text-gray-900 dark:text-white mt-5">
          {res.author}
        </h5>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-3">
          {res.date}
        </span>
        <span className="text-sm dark:text-gray-400 mb-3 font-mono text-indigo-600">
          {res.category}
        </span>
        <p className="text-gray-700 text-sm">{res.content}</p>
        <div className="flex mt-4 md:mt-6">
          <Link
            href="/"
            className="py-2 px-4  text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Message
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg ms-2 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}

