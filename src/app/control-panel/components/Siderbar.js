"use client";

import { usePathname } from "next/navigation";
import Dropdown from "@/app/control-panel/components/Dropdown";
import Link from "next/link";

function NavLink({ href, children }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={`px-3 py-2 rounded font-semibold ${
        isActive
          ? "text-blue-800 bg-blue-200"
          : "text-white hover:bg-gray-700"
      }`}
    >
      {children}
    </Link>
  );
}

export default function Siderbar() {
  return (
    <div className="h-full bg-gray-800 text-white p-5">
      <h2 className="text-2xl font-bold mb-8">Dashboard</h2>
      <nav className="flex flex-col gap-4">
        <NavLink href="/invoice/home">Home</NavLink>
        <NavLink href="/users">Users</NavLink>
        <NavLink href="/settings">Settings</NavLink>
        <NavLink href="/invoice/upload">Upload Image</NavLink>
        <NavLink href="/invoice/table-pdf">PDF Download</NavLink>
        <NavLink href="/invoice/profile">User Profile</NavLink>
        <NavLink href="/invoice/csv">CSV File</NavLink>
        <NavLink href="/invoice/date">Date Picker</NavLink>
        <NavLink href="/invoice/faq">FAQs</NavLink>
        <Dropdown />
      </nav>
    </div>
  );
}
