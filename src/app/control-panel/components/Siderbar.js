"use client";

import { usePathname } from "next/navigation";
import Dropdown from "@/app/control-panel/components/Dropdown";
import Link from "next/link";

function NavLink({ href, children, pathname }) {
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={
        isActive
          ? "text-blue-800 font-semibold bg-blue-200 px-3 py-2 rounded"
          : "text-white font-semibold hover:bg-gray-700 px-3 py-2 rounded"
      }
    >
      {children}
    </Link>
  );
}

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="h-screen w-64 bg-gray-800 text-white fixed top-0 left-0 p-5">
      <h2 className="text-2xl font-bold mb-8">Dashboard</h2>
      <nav className="flex flex-col gap-4">
        <NavLink href="/invoice/home" pathname={pathname}>Home</NavLink>
        <NavLink href="/users" pathname={pathname}>Users</NavLink>
        <NavLink href="/settings" pathname={pathname}>Settings</NavLink>
        <NavLink href="/invoice/upload" pathname={pathname}>Upload Image</NavLink>
        <NavLink href="/invoice/table-pdf" pathname={pathname}>PDF Download</NavLink>
        <NavLink href="/invoice/profile" pathname={pathname}>User Profile</NavLink>
        <NavLink href="/invoice/csv" pathname={pathname}>CSV File</NavLink>
        <Dropdown />
      </nav>
    </div>
  );
}
