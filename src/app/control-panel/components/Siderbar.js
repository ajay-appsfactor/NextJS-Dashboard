

import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="h-screen w-64 bg-gray-800 text-white fixed top-0 left-0 p-5">
      <h2 className="text-2xl font-bold mb-8">Dashboard</h2>
      <nav className="flex flex-col gap-4">
        <Link href="/dashboard">
          <span className="hover:bg-gray-700 px-3 py-2 rounded">Home</span>
        </Link>
        <Link href="/users">
          <span className="hover:bg-gray-700 px-3 py-2 rounded">Users</span>
        </Link>
        <Link href="/settings">
          <span className="hover:bg-gray-700 px-3 py-2 rounded">Settings</span>
        </Link>
      </nav>
    </div>
  );
}
