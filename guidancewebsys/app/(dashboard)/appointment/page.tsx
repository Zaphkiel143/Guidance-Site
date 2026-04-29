"use client";

import { Plus, Search, Filter } from 'lucide-react';
import { appointments, statusStyles } from '../../../student_data';
import NewAppointmentModal from './AppointmentModal';
import { useState } from 'react';

export default function AppointmentsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="p-8 bg-[#F8FAFC] min-h-screen font-sans">
      <h1 className="text-2xl font-bold text-slate-800 mb-6">Appointment Management</h1>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-600">
          <p className="text-slate-500 text-sm font-semibold uppercase tracking-wider">Todays Sessions</p>
          <p className="text-4xl font-bold text-slate-900 mt-2">8</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-yellow-500">
          <p className="text-slate-500 text-sm font-semibold uppercase tracking-wider">Pending Requests</p>
          <p className="text-4xl font-bold text-slate-900 mt-2">5</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-500">
          <p className="text-slate-500 text-sm font-semibold uppercase tracking-wider">Completed Sessions</p>
          <p className="text-4xl font-bold text-slate-900 mt-2">142</p>
        </div>
      </div>

      {/* Data Table Section */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-100">
        <div className="p-6 flex flex-col md:flex-row justify-between gap-4 border-b border-slate-50">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search appointments..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>
          <div className="flex gap-2">
            <button onClick={() => setIsModalOpen(true)} className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition-colors">
              <Plus size={18} /> New Appointment
            </button>
            <NewAppointmentModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
            />
          </div>
        </div>

        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-slate-400 text-xs uppercase tracking-widest border-b border-slate-50">
              <th className="px-6 py-4 font-semibold">Student Name</th>
              <th className="px-6 py-4 font-semibold">Date & Time</th>
              <th className="px-6 py-4 font-semibold">Type</th>
              <th className="px-6 py-4 font-semibold">Status</th>
              {/* REMOVED: Actions header */}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {appointments.filter((appointment) => 
              appointment.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              appointment.date.includes(searchQuery)
            ).map((appointment) => (
              <tr key={appointment.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4 font-medium text-slate-900">{appointment.name}</td>
                <td className="px-6 py-4 text-slate-600">{appointment.date}</td>
                <td className="px-6 py-4 text-slate-600">{appointment.type}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-tight ${statusStyles[appointment.status]}`}>
                    {appointment.status}
                  </span>
                </td>
                {/* REMOVED: Actions cell and kebab menu logic */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}