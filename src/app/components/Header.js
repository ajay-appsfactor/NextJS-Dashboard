"use client";
import Image from "next/image";
import user from "../../../public/user.png"
import { Bell, AlignRight, Search,Scan , Layers2} from "lucide-react";


export default function Header() {
  return (
    <header className="w-full flex items-center justify-between top-0 left-0 px-6 py-3 border-b shadow-md bg-white">
      <div className="font-bold text-purple-700 text-xl flex items-center">
         <span className="mr-2"><Layers2 /> </span>  Dashlead
      </div>
      <div className="flex items-center gap-4">
        {/* Search Icon */}
        <button className="text-gray-600 hover:text-indigo-500">
          <Search className="w-5 h-5" />
        </button>
         {/* Scan Icon */}
        <button className="text-gray-600 hover:text-indigo-500">
          <Scan className="w-5 h-5" />
        </button>
        {/* Bell Icon */}
        <button className="relative">
          <Bell className="w-5 h-5 text-gray-600" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border border-white"></span>
        </button>
        {/* Profile */}
        <div className="w-8 h-8 rounded-full overflow-hidden">
          <Image
            src={user}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Menu */}
        <button
          className="text-gray-600"
        >
          <AlignRight className="w-6 h-6" />
        </button>
      </div>
    </header >
  )
}