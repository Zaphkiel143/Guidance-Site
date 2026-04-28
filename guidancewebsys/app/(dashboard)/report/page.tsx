import React from 'react';
import { FileText, Download, TrendingUp, Users, AlertCircle } from 'lucide-react';

export default function ReportsPage() {
  return (
    <div className="p-8 bg-[#F8FAFC] min-h-screen">
      <h1 className="text-2xl font-bold text-slate-800 mb-6">Generated Reports</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Report Generation Section */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <h2 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
              <TrendingUp size={20} className="text-blue-600" /> Analytics Overview
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Users className="text-blue-600" />
                  <span className="font-medium text-slate-700">Monthly Attendance Rate</span>
                </div>
                <span className="font-bold text-blue-700">94.2%</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-rose-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <AlertCircle className="text-rose-600" />
                  <span className="font-medium text-slate-700">Urgent Intervention Cases</span>
                </div>
                <span className="font-bold text-rose-700">3</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <h2 className="text-lg font-bold text-slate-800 mb-4">Generate New Report</h2>
            <div className="grid grid-cols-2 gap-4">
              <button className="p-4 border-2 border-dashed border-slate-200 rounded-xl hover:border-blue-400 hover:bg-blue-50 transition-all text-slate-500 font-medium">
                Monthly Summary
              </button>
              <button className="p-4 border-2 border-dashed border-slate-200 rounded-xl hover:border-blue-400 hover:bg-blue-50 transition-all text-slate-500 font-medium">
                Annual Case Study
              </button>
            </div>
          </div>
        </div>

        {/* Recent Downloads List */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <h2 className="text-lg font-bold text-slate-800 mb-4">Recent Documents</h2>
          <div className="divide-y divide-slate-100">
            {[
              { name: "Student_Behavior_Q1.pdf", size: "1.2 MB", date: "2 hours ago" },
              { name: "Counseling_Impact_2026.xlsx", size: "840 KB", date: "Yesterday" },
              { name: "Final_Capstone_Assessment.pdf", size: "3.5 MB", date: "Apr 25, 2026" }
            ].map((doc, idx) => (
              <div key={idx} className="py-4 flex justify-between items-center group">
                <div className="flex items-center gap-4">
                  <div className="bg-slate-100 p-2 rounded-lg text-slate-500 group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
                    <FileText size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-700">{doc.name}</p>
                    <p className="text-xs text-slate-400">{doc.size} • {doc.date}</p>
                  </div>
                </div>
                <button className="p-2 text-slate-400 hover:text-blue-600 transition-colors">
                  <Download size={20} />
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}