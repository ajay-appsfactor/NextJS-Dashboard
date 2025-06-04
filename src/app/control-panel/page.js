import Image from "next/image";
import {
  FaHome,
  FaRegUserCircle,
  FaRegFileAlt,
  FaFolder,
  FaAlignLeft,
} from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineNightlightRound } from "react-icons/md";
import { LuBell } from "react-icons/lu";
import { MdFileUpload } from "react-icons/md";
1;
import { GrDocumentCsv } from "react-icons/gr";

import Link from "next/link";

import Invoice from "./components/invoice";

const navItems = [
  {
    icon: <FaHome />,
    name: "Home",
    path: "/",
  },
  {
    icon: <FaFolder />,
    name: "Project",
    path: "/project",
  },
  {
    icon: <FaRegUserCircle />,
    name: "User Profile",
    path: "/profile",
  },
  {
    icon: <FaRegFileAlt />,
    name: "Invoice",
    path: "/invoice",
  },
  {
    icon: <MdFileUpload />,
    name: "Upload Image",
    path: "/upload",
  },
  {
    icon: <GrDocumentCsv />,
    name: "CSV Import",
    path: "/csv",
  },
];

export default function ControlPanel() {
  return (
    <div className="flex">
      <div className="w-1/5 bg-gray-100">
        <div className="flex justify-start">
          <div>
            <Image
              src="/company-logo.jpg"
              width={30}
              height={30}
              alt="company-logo"
            />
          </div>
          <h5 className="text-2xl font-semibold text-zinc-600">appsfactor</h5>
        </div>

        {/* Navlink */}
        <ul className="flex flex-col gap-4 mt-5 ">
          {navItems.map((subItem) => (
            <li key={subItem.name}>
              <Link
                href={subItem.path}
                className={"menu-dropdown-item flex start items-center gap-4"}
              >
                <div>{subItem.icon}</div>
                <div>{subItem.name}</div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Right side  */}
      <div className="w-3/4 ">
        <div className="flex justify-evenly items-center">
          <div className="flex ">
            <div>
              <button className="p-3 border border-gray-100">
                <FaAlignLeft />
              </button>
            </div>
            <div className="relative">
              <div className="absolute top-3 ps-4 flex items-center pointer-events-none">
                <IoSearchOutline className="w-4 h-4 text-gray-500" />
              </div>
              <input
                type="text"
                className="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 outline-none"
                placeholder="Search or type command..."
              />
            </div>
          </div>

          <div className="flex justify-center items-center gap-4">
            <div className="p-3 rounded-full bg-white  hover:bg-gray-200 cursor-pointer">
              <MdOutlineNightlightRound />
            </div>
            <div className="p-3 rounded-full bg-white  hover:bg-gray-200 cursor-pointer">
              <LuBell />
            </div>
            <div className="p-3 rounded-full object-cover cursor-pointer">
              <Image src="/user.avif" width={30} height={30} alt="user" />
            </div>
            <div className="p-3 rounded-full bg-white  hover:bg-gray-200 cursor-pointer">
              <MdOutlineNightlightRound />
            </div>
          </div>
        </div>

        <div>
          <Invoice />
        </div>
      </div>
    </div>
  );
}
