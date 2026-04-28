import Link from "next/link";

export default function Home() {
  return (
      <main>
        <div className="bg-gray-50 font-sans text-gray-900">
              {/*SideBar*/}
          <div className="flex h-screen overflow-hidden">
            <aside className="w-64 bg-[#0B172A] text-white hidden md:flex flex-col">
              <div className="p-6 text-xl font-bold">
                Guide<span className="text-blue-500">Management</span>
              </div>
              
              <nav className="flex-1 px-4 space-y-2">
                <Link href="/dashboard" className="block px-4 py-3 bg-blue-600 rounded-lg text-sm font-medium">
                  Dashboard
                </Link>

                <Link href="/dashboard/student" className="block px-4 py-3 hover:bg-slate-800 rounded-lg text-sm font-medium">
                  Students
                </Link>

                <Link href="/dashboard/appointments" className="block px-4 py-3 hover:bg-slate-800 rounded-lg text-sm font-medium">
                  Appointments
                </Link>
                <Link href="/dashboard/report" className="block px-4 py-3 hover:bg-slate-800 rounded-lg text-sm font-medium">
                  Report
                </Link>
              </nav>
            </aside>
                          {/*Main Dashboard*/}
            <main className="flex-1 overflow-y-auto p-8">
              <header className="flex justify-between items-center mb-8">
                  <h1 className="text-2xl font-bold text-slate-800">Student Management</h1>
                    
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
                    <input type="text" id="searchInput" placeholder="Search students..." className="border rounded-lg px-4 py-2 w-72 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                      <div className="space-x-2">
                          <button className="px-3 py-1 border rounded text-sm hover:bg-white transition">Filter</button>
                          <button className="px-3 py-1 border rounded text-sm hover:bg-white transition">Export</button>
                      </div>
                    
                  </div>
                  <table className="w-full text-left border-collapse">
                      <thead className="bg-gray-50 text-gray-600 text-sm uppercase">
                          <tr>
                              <th className="p-4 font-semibold">Student Name</th>
                              <th className="p-4 font-semibold">ID Number</th>
                              <th className="p-4 font-semibold">Status</th>
                              <th className="p-4 font-semibold">Last Visit</th>
                              <th className="p-4 font-semibold text-center">Actions</th>
                          </tr>
                      </thead>
                      <tbody id="studentTableBody" className="divide-y divide-gray-100"></tbody>
                  </table>
                </div>
            </main>
  
          </div>
        </div>
      </main>      
  );

}
