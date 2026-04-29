"use client";

import React, { useState } from 'react';
import { 
  MoreVertical, 
  UserCircle, 
  Settings, 
  CheckCircle, 
  Trash2, 
  ListFilter, 
  Calendar, 
  Activity, 
  ArrowDownAZ // Replaced SortAlphaDown with the correct Lucide icon name
} from 'lucide-react';
import { students, getStatusColor } from '../../../student_data'; 

const StudentList = () => {
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="w-full bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              <th className="px-6 py-4">Student Name</th>
              <th className="px-6 py-4">ID Number</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Last Visit</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {students.map((student) => (
              <tr key={student.id} className="hover:bg-blue-50/30 transition-colors group">
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
                
                <td className="px-6 py-4 text-right relative">
                  <button 
                    type="button"
                    onClick={() => setOpenMenuId(openMenuId === student.id ? null : student.id)}
                    className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all"
                  >
                    <MoreVertical size={20} />
                  </button>

                  {openMenuId === student.id && (
                    <>
                      <div className="fixed inset-0 z-10" onClick={() => setOpenMenuId(null)} />
                      <div className="absolute right-12 top-0 w-48 bg-white rounded-xl shadow-xl border border-gray-100 z-20 py-2 animate-in fade-in zoom-in duration-150 origin-top-right">
                        <button className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-3 text-left">
                          <UserCircle size={14} className="text-blue-500" />
                          View Profile
                        </button>
                        <button className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-3 text-left">
                          <Settings size={14} className="text-gray-500" />
                          Edit Details
                        </button>
                        <button className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-3 text-left">
                          <CheckCircle size={14} className="text-green-500" />
                          Change Status
                        </button>
                        <div className="my-1 border-t border-gray-50" />
                        <button className="w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center gap-3 text-left font-medium">
                          <Trash2 size={14} />
                          Remove Record
                        </button>
                      </div>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Pagination Footer with Filter Button */}
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between overflow-visible"> 
            <span className="text-xs text-gray-500 font-medium">Showing 1 to 3 of 1,284 students</span>
            
            <div className="flex gap-2 items-center">
              {/* FILTER BUTTON SECTION */}
              <div className="relative">
                <button 
                  type="button"
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className="flex items-center gap-2 px-3 py-1 text-xs border border-gray-300 rounded bg-white hover:bg-gray-50 text-gray-600 transition-all font-medium relative z-20"
                >
                  <ListFilter size={14} />
                  Filter
                </button>

                {isFilterOpen && (
                  <>
                    {/* Click-away backdrop - higher z-index */}
                    <div className="fixed inset-0 z-30" onClick={() => setIsFilterOpen(false)} />
                    
                    {/* Filter Popup Menu - set to z-40 to stay on top */}
                    <div className="absolute bottom-full right-0 mb-3 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 z-40 py-2 animate-in fade-in slide-in-from-bottom-2 duration-150">
                      <div className="px-4 py-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest border-b border-gray-50 mb-1">
                        Arrange By
                      </div>
                      
                      <button className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 flex items-center gap-3 text-left transition-colors">
                        <Calendar size={14} className="text-blue-500" />
                        Date
                      </button>
                      
                      <button className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 flex items-center gap-3 text-left transition-colors">
                        <Activity size={14} className="text-emerald-500" />
                        Status
                      </button>
                      
                      <button className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 flex items-center gap-3 text-left transition-colors">
                        <ArrowDownAZ size={14} className="text-amber-500" />
                        Alphabetical (A-Z)
                      </button>
                    </div>
                  </>
                )}
              </div>

          <div className="flex gap-1">
            <button className="px-3 py-1 text-xs border border-gray-300 rounded bg-white hover:bg-gray-50 text-gray-600">Prev</button>
            <button className="px-3 py-1 text-xs border border-gray-300 rounded bg-white hover:bg-gray-50 text-gray-600">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentList;