"use client";

import Link from "next/link";
import { logout } from "@/features/auth/api";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    // Don't show navbar on login page to keep it clean
    if (pathname === "/login") {
        return null;
    }

    return (
        <header className="bg-white shadow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2 group">
                    <svg
                        className="w-8 h-8 text-indigo-600 group-hover:text-indigo-500 transition-colors"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                        />
                    </svg>
                    <h1 className="text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                        Delicious Recipes
                    </h1>
                </Link>
                <nav className="flex items-center gap-4">
                    <button
                        onClick={() => logout()}
                        className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                    >
                        Logout
                    </button>
                </nav>
            </div>
        </header>
    );
}
