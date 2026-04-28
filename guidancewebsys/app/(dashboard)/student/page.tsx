import { Eye, Edit2 } from 'lucide-react';
import { students, getStatusColor } from '../../../student_data'; 

const StudentList = () => {

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
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button type="button" title="View Details" aria-label="View Student Details" className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md">
                        <Eye size={18} />
                    </button>
                    <button type="button" aria-label="Edit student" title="Edit student" className="p-1.5 text-gray-500 hover:text-emerald-600 hover:bg-emerald-50 rounded-md">
                        <Edit2 size={18} />     
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Pagination Footer */}
      <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
        <span className="text-xs text-gray-500 font-medium">Showing 1 to 3 of 1,284 students</span>
        <div className="flex gap-1">
          <button className="px-3 py-1 text-xs border border-gray-300 rounded bg-white hover:bg-gray-50 text-gray-600">Prev</button>
          <button className="px-3 py-1 text-xs border border-gray-300 rounded bg-white hover:bg-gray-50 text-gray-600">Next</button>
        </div>
      </div>
    </div>
  );
};

export default StudentList;