"use client";
import { Suspense } from "react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Dropdown from "@/app/components/Dropdown";

export default function User() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const res = await fetch("/api/user");
      const data = await res.json();
      setUsers(data.user);
    }
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <h3 className="text-center text-3xl font-bold text-rose-700 mb-10">
        User Accounts
      </h3>

      <Suspense fallback={<div>Loading Profile...</div>}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {users.map((user) => (
            <div
              key={user._id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 text-center"
            >
              <div className="w-24 h-24 mx-auto mb-4">
                <Image
                  src={user.image}
                  priority
                  width={96}
                  height={96}
                  alt={user.name}
                  className="rounded-full object-cover w-full h-full border-0 cursor-pointer transition duration-700 ease-in-out border-gray-300 hover:-translate-y-1"
                  draggable="false"
                />
              </div>
              <h2 className="text-lg font-semibold text-gray-800">
                {user.name}
              </h2>
              <p className="text-sm text-gray-600">{user.email}</p>
            </div>
          ))}
        </div>
      </Suspense>

      {/* Dropdown list  */}
      <div className="flex justify-center mt-8 mx-auto">
        <Dropdown />
      </div>
    </div>
  );
}
