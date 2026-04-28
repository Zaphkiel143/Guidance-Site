
"use client";

import React, { useState } from 'react'
import { Lock, Mail, Eye, EyeOff, GraduationCap } from 'lucide-react';
import Link from 'next/link';

export default function LoginPage() {
const [showPassword, setShowPassword] = useState(false);
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle authentication logic here
    console.log("Logging in with:", { email, password });
};

return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
    <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg border border-slate-200">
        
        {/* Header */}
        <div className="text-center">
        <div className="flex justify-center">
            <div className="bg-blue-600 p-3 rounded-full">
            <GraduationCap className="h-8 w-8 text-white" />
            </div>
        </div>
        <h2 className="mt-6 text-3xl font-bold text-slate-900">Portal Login</h2>
        <p className="mt-2 text-sm text-slate-600">
            Guidance & Counseling Management System
        </p>
        </div>

        {/* Form */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="space-y-4">
            <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                Email Address
            </label>
            <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-slate-400" />
                </div>
                <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="name@school.edu"
                />
            </div>
            </div>

            <div>
            <label htmlFor="password" className="block text-sm font-medium text-slate-700">
                Password
            </label>
                <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-slate-400" />
                </div>
                <input
                id="password"
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full pl-10 pr-10 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="••••••••"
                />
                <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
                >
                {showPassword ? (
                    <EyeOff className="h-5 w-5 text-slate-400" />
                ) : (
                    <Eye className="h-5 w-5 text-slate-400" />
                )}
                </button>
            </div>
            </div>
        </div>

        <div className="flex items-center justify-between">
            <div className="flex items-center">
            <input
                id="remember-me"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300 rounded"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-700">
                Remember me
            </label>
            </div>

            <div className="text-sm">
            <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                Forgot password?
            </a>
            </div>
        </div>

        <nav>
            <Link 
            href="/dashboard"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
            Sign In
            </Link>
        </nav>
        </form>
    </div>
    </div>
);
}

