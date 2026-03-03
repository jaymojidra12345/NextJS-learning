"use client";

import { usePathname } from "next/navigation";

export default function Footer() {
    const pathname = usePathname();

    // Don't show footer on login page
    if (pathname === "/login") {
        return null;
    }

    return (
        <footer className="bg-gray-900 text-white py-8 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2">
                        <svg
                            className="w-6 h-6 text-indigo-400"
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
                        <span className="text-lg font-semibold">Delicious Recipes</span>
                    </div>
                    <p className="text-gray-400 text-sm">
                        &copy; {new Date().getFullYear()} Next.js Learning Project. All rights
                        reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
