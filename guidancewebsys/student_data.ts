
export const students = [
    { id: '2024-0001', name: 'Alice Johnson', status: 'Active', lastVisit: '2026-04-20', email: 'alice.j@school.edu' },
    { id: '2024-0042', name: 'Marcus Chen', status: 'Pending', lastVisit: '2026-04-15', email: 'm.chen@school.edu' },
    { id: '2023-0812', name: 'Sarah Miller', status: 'Resolved', lastVisit: '2026-03-28', email: 'smiller@school.edu' },
    { id: '2023-0813', name: 'James Miller', status: 'Resolved', lastVisit: '2026-03-14', email: 'James@school.edu' },
    { id: '2023-0814', name: 'Bryan walker', status: 'Resolved', lastVisit: '2026-03-13', email: 'bryan.w@school.edu' },
    { id: '2023-0815', name: 'Shane Doe', status: 'Active', lastVisit: '2026-04-26', email: 'shane.d@school.edu' },
    { id: '2023-0816', name: 'Alex Johnson', status: 'Active', lastVisit: '2026-04-27', email: 'alex.j@school.edu' },
    { id: '2023-0817', name: 'Jamie Smith', status: 'Pending', lastVisit: '2026-04-27', email: 'jamie.s@school.edu' },
  ];

export const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-700 border-green-200';
      case 'Pending': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'Resolved': return 'bg-blue-100 text-blue-700 border-blue-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };
export const statusStyles: Record<string, string> = {
  Pending:  "bg-yellow-100 text-yellow-700",
  Completed: "bg-green-100  text-green-700",
  Rejected: "bg-red-100    text-red-700",
};

export const appointments = [
  { name: 'John Patrick Doe', date: 'Apr 30, 2026 • 10:00 AM', type: 'Career Guidance', status: 'Pending', id: '1', lastvisit: '2026-04-20' },
  { name: 'Emily Rose Smith', date: 'Apr 30, 2026 • 11:30 AM', type: 'Academic Counseling', status: 'Completed', id: '2', lastvisit: '2026-04-21' },
  { name: 'Michael Lee', date: 'May 1, 2026 • 9:00 AM', type: 'Personal Counseling', status: 'Pending', id: '3', lastvisit: '2026-04-22' },
  { name: 'Sophia Davis', date: 'May 1, 2026 • 2:00 PM', type: 'Career Guidance', status: 'Completed', id: '4', lastvisit: '2026-04-23' },
  { name: 'David Kim', date: 'May 2, 2026 • 10:30 AM', type: 'Academic Counseling', status: 'Rejected', id: '5', lastvisit: '2026-04-24' },
];
