"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
const pathname = usePathname();

  // You can define your links here to keep the JSX clean

const links = [
    { href: '/dashboard',     label: 'Dashboard' },
    { href: '/student',       label: 'Student' },
    { href: '/appointment',   label: 'Appointment' },
    { href: '/report',        label: 'Report' },
]


return (
    <aside className="w-64 bg-[#0B172A] text-white hidden md:flex flex-col h-screen sticky top-0">
    <div className="p-6 text-xl font-bold">
        Guide<span className="text-blue-500">Management</span>
    </div>
    
        <nav className="flex-1 px-4 space-y-2">
            {links.map(link => (
            <Link
                key={link.href}
                href={link.href}
                className={pathname === link.href
                ? "block px-4 py-3 bg-slate-800 rounded-lg text-sm font-medium"
                : "block px-4 py-3 hover:bg-slate-800 rounded-lg text-sm font-medium"
                }
            >
                {link.label}
            </Link>
            ))}
        </nav>
    </aside>
);
}