"use client";
import { useState } from "react";
import {
    Airplay,
    MapPinned,
    Settings,
    FileArchive,
    ChevronDown,
    Layers,
    Box,
    File,
    ChartNoAxesColumn
} from "lucide-react";

const menuItems = [
    { label: "Dashboard", icon: Airplay, subItems: ["Analytics", "CRM", "Ecommerce"] },
    { label: "Apps", icon: Box, subItems: ["Email", "Calendar", "Chat"] },
    { label: "Maps & Tables", icon: MapPinned, subItems: ["Google Maps", "Data Tables"] },
    { label: "Components", icon: Layers, subItems: ["Alerts", "Buttons", "Cards"] },
    { label: "Forms", icon: File, subItems: ["Form Elements", "Form Layouts"] },
    { label: "Charts", icon: ChartNoAxesColumn, subItems: ["ApexCharts", "Recharts"] },
    { label: "Utilities", icon: Settings, subItems: ["Colors", "Spacing", "Borders"] },
    { label: "Pages", icon: FileArchive, subItems: ["Login", "Register", "Error 404"] },
];

export default function TopNavbar() {
    const [activeDropdown, setActiveDropdown] = useState(null);

    return (
        <nav className="bg-white shadow-md px-6 py-3 flex gap-6 items-center justify-start">
            {menuItems.map((item, index) => {
                const Icon = item.icon;
                return (
                    <div
                        key={item.label}
                        className="relative group"
                        onMouseEnter={() => setActiveDropdown(index)}
                        onMouseLeave={() => setActiveDropdown(null)}
                    >
                        <button className="flex items-center justify-evenly text-gray-700 hover:text-indigo-600 transition-all duration-200 ">
                            <Icon className="w-5 h-5 mb-1 mr-2" />
                            <span className="text-xs font-medium flex items-center gap-1">
                                {item.label}
                                <ChevronDown className="w-3 h-3" />
                            </span>
                        </button>

                        {/* Dropdown */}
                        {activeDropdown === index && (
                            <div className="absolute top-full left-1/2 -translate-x-1/2 bg-white border rounded shadow-lg mt-2 z-10 min-w-[150px]">
                                {item.subItems.map((sub, subIndex) => (
                                    <a
                                        key={subIndex}
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-600 hover:bg-indigo-50 hover:text-indigo-600"
                                    >
                                        {sub}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                );
            })}
        </nav>
    );
}
