"use client";

import { LogOut } from "lucide-react";
import router from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

export default function Sidebar() {
const pathname = usePathname();
const router = useRouter();

  // You can define your links here to keep the JSX clean

const links = [
    { href: '/dashboard',     label: 'Dashboard' },
    { href: '/student',       label: 'Student' },
    { href: '/appointment',   label: 'Appointment' },
    { href: '/message',      label: 'Messages' },
    { href: '/report',        label: 'Report' },
]
const handleLogout = () => {
    router.push('/login');
  };


return (
    <aside className="w-64 bg-[#0B172A] text-white hidden md:flex flex-col h-screen sticky top-0">
    <div className="p-10 text-4xl font-bold">
        E - <span className="text-blue-500">Gabay</span>
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
        <div className="mt-auto border-t border-slate-800 p-4">
        <button
        onClick={handleLogout}
        className="flex items-center gap-3 w-full px-4 py-3 text-slate-400 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-all duration-200 group"
        >
        <LogOut size={20} className="group-hover:-translate-x-1 transition-transform" />
        <span className="text-sm font-medium">Logout</span>
        </button>
    </div>

    </aside>
);
}