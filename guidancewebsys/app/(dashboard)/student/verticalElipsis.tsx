"use client";

import React, { useState } from 'react';
import { MoreVertical, Edit2, CheckCircle, Trash2 } from 'lucide-react';
import { students } from '@/student_data';

// ... (your existing student data imports/interfaces)

export default function StudentTable() {
  // Track which student ID has an open menu
const [activeMenu, setActiveMenu] = useState<string | null>(null)

const toggleMenu = (id: string) => {
  setActiveMenu(activeMenu === id ? null : id);
};
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        {/* ... thead stays the same ... */}
        <tbody>
          {students.map((student) => (
            <tr key={student.id} className="relative border-b border-gray-50">
              {/* ... other td cells (Name, ID, Status) ... */}

              <td className="px-6 py-4 text-right relative">
                <button 
                  onClick={() => toggleMenu(student.id)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400"
                >
                  <MoreVertical size={18} />
                </button>

                {/* Action Popup Menu */}
                {activeMenu === student.id && (
                  <>
                    {/* Invisible backdrop to close menu when clicking outside */}
                    <div 
                      className="fixed inset-0 z-10" 
                      onClick={() => setActiveMenu(null)} 
                    />
                    
                    <div className="absolute right-12 top-4 w-40 bg-white rounded-xl shadow-xl border border-gray-100 z-20 py-2 animate-in fade-in zoom-in duration-150">
                      <button className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 flex items-center gap-3 transition-colors">
                        <Edit2 size={14} className="text-blue-500" />
                        Edit
                      </button>
                      <button className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 flex items-center gap-3 transition-colors">
                        <CheckCircle size={14} className="text-green-500" />
                        Status
                      </button>
                      <hr className="my-1 border-gray-100" />
                      <button className="w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center gap-3 transition-colors">
                        <Trash2 size={14} />
                        Remove
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
  );
}