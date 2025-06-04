"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Sidebar() {
  const pathname = usePathname();

  function NavLink({ href, children }) {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
      <Link
        href={href}
        className={
          isActive
            ? "text-blue-800 font-semibold bg-blue-200 px-3 py-2 rounded"
            : "text-white font-semibold hover:bg-gray-700  px-3 py-2 rounded"
        }
      >
        {children}
      </Link>
    );
  }

  return (
    <div className="h-screen w-64 bg-gray-800 text-white fixed top-0 left-0 p-5">
      <h2 className="text-2xl font-bold mb-8">Dashboard</h2>
      <nav className="flex flex-col gap-4">
        <NavLink href="/invoice/home">
          <span>Home</span>
        </NavLink>
        <NavLink href="/users">
          <span>Users</span>
        </NavLink>
        <NavLink href="/settings">
          <span>Settings</span>
        </NavLink>
        <NavLink href="/invoice/upload">
          <span>Upload Image</span>
        </NavLink>
        <NavLink href="/invoice/table-pdf">
          <span>PDf Download</span>
        </NavLink>
        <NavLink href="/invoice/profile">
          <span>User Profile</span>
        </NavLink>
        <NavLink href="/invoice/csv">
          <span>CSV File</span>
        </NavLink>
      </nav>
    </div>
  );
}
