"use client";

import { students,getStatusColor } from '../../../student_data';
import { useState } from 'react';


export default function Home() {    
    const [query, setQuery] = useState<string>("");

    const filteredStudents = students.filter((student) =>
        student.name.toLowerCase().includes(query.toLowerCase()) ||
        student.status.toLowerCase().includes(query.toLowerCase())
    );
    return (
        <main>
            <div className="bg-gray-50 font-sans text-gray-900">
            <div className="flex h-screen overflow-hidden">
                
                <main className="flex-1 overflow-y-auto p-8">
                <header className="flex justify-between items-center mb-8">
                    <h1 className="text-2xl font-bold text-slate-800">Dashboard</h1>
                        
                </header>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                        <p className="text-sm text-gray-500 uppercase font-semibold">Total Students</p>
                        <p className="text-3xl font-bold mt-1">1,284</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm border-l-4 border-l-yellow-400">
                        <p className="text-sm text-gray-500 uppercase font-semibold">Pending Sessions</p>
                        <p className="text-3xl font-bold mt-1">12</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm border-l-4 border-l-green-400">
                        <p className="text-sm text-gray-500 uppercase font-semibold">Resolved Cases</p>
                        <p className="text-3xl font-bold mt-1">85</p>
                    </div>
                    </div>

                    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                    <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                        <input type="text" id="searchInput" placeholder="Search students..." value={query} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value) }className="border rounded-lg px-4 py-2 w-72 focus:outline-none focus:ring-2 focus:ring-blue-500"/>

                        
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse min-w-max">
                            <thead className="bg-gray-50/80 border-b border-gray-100">
                            <tr>
                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Student Name</th>
                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">ID Number</th>
                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Last Visit</th>
                            </tr>
                            </thead>
                            
                            <tbody className="divide-y divide-gray-50">
                            {filteredStudents.map((student) => (
                                <tr key={student.id} className="hover:bg-blue-50/30 transition-colors group">
                                    {/**/}
                                <td className="px-6 py-4">
                                    <div className="flex flex-col">
                                    <span className="text-sm font-medium text-gray-900">{student.name}</span>
                                    <span className="text-xs text-gray-400">{student.email}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-600 font-mono">
                                    {student.id}
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(student.status)}`}>
                                    {student.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-500">
                                    {student.lastVisit}
                                </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                        </div>
                    </div>
                </main>
            </div>
            </div>
        </main>
    );
}
