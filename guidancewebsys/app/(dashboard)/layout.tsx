import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Sidebar from "./sidebar"; 

const geistSans = Geist({
variable: "--font-geist-sans",
subsets: ["latin"],
});

const geistMono = Geist_Mono({
variable: "--font-geist-mono",
subsets: ["latin"],
});

export const metadata: Metadata = {
title: "Guidance Management System",
description: "STI College Sta. Maria",
};

export default function RootLayout({
children,
}: Readonly<{
children: React.ReactNode;
}>) {
return (
    <html
    lang="en"
    className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
    <body className="bg-gray-50 font-sans text-gray-900 h-full">
        <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 overflow-y-auto">
            {children}
        </main>
        </div>
    </body>
    </html>
);
}
