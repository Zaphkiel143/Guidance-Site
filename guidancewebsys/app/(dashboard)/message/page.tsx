"use client";

import { LucideProps } from 'lucide-react';
import React, { useState } from 'react';
import { Search, Filter, MessageSquare, User, CheckCircle2, Send} from 'lucide-react';

const MessagesPage = () => {
  const [activeChat, setActiveChat] = useState('Sarah Williams');

  return (
    <div className="p-8 bg-gray-50 min-h-screen font-sans text-gray-900">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-[#1e3a8a]">Student Messages</h1>
        <p className="text-gray-500">Respond to student inquiries and questions</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard icon={<MessageSquare />} label="Total Messages" value="5" color="bg-[ffffff]" textColor="text-[#1e1b4b]"  />
        <StatCard icon={<User />} label="Unread Messages" value="2" color="bg-[ffffff]" textColor="text-[#1e1b4b]" />
        <StatCard icon={<CheckCircle2 />} label="Replied Today" value="2" color="bg-[ffffff]" textColor="text-[#1e1b4b]"/>
      </div>

      <div className="grid grid-cols-12 gap-6 h-150">
        <div className="col-span-4 bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col overflow-hidden">
          <div className="p-4 space-y-4 border-b">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="Search messages..." 
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-600 rounded-md text-sm font-medium">
              <Filter size={14} /> Show All
            </button>
          </div>
          <div className="flex-1 overflow-y-auto custom-scrollbar">
            <MessageItem name="Marcus Johnson" date="Mar 17" text="How do I request a transcript?" active={activeChat === 'Marcus Johnson'} onClick={setActiveChat} />
            <MessageItem name="Sarah Williams" date="Mar 17" text="Thank you for your help with my college applications!" active={activeChat === 'Sarah Williams'} onClick={setActiveChat} isReplied />
            <MessageItem name="David Rodriguez" date="Mar 17" text="What documents do I need for college applications?" hasUnread active={activeChat === 'David Rodriguez'} onClick={setActiveChat} />
          </div>
        </div>
        <div className="col-span-8 bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col overflow-hidden">
          {/* Chat Header */}
          <div className="p-4 border-b flex items-center gap-4">
            <div className="w-10 h-10 bg-[#1e3a8a] rounded-full flex items-center justify-center text-white font-bold">SW</div>
            <div>
              <h3 className="font-bold text-blue-900 leading-tight">{activeChat}</h3>
              <p className="text-xs text-gray-400">sarah.w@school.edu</p>
            </div>
          </div>
          <div className="flex-1 p-6 space-y-6 overflow-y-auto bg-gray-50/30">
            <div className="flex gap-3 max-w-[80%]">
              <div className="w-8 h-8 bg-[#fbbf24] rounded-full shrink-0" />
              <div className="p-4 bg-white border border-gray-100 rounded-2xl rounded-tl-none shadow-sm">
                <p className="text-sm">I'm working on my college applications and need some guidance.</p>
                <span className="text-[10px] text-gray-400 mt-2 block">10:00 AM</span>
              </div>
            </div>
            <div className="flex gap-3 max-w-[80%] ml-auto flex-row-reverse">
              <div className="w-8 h-8 bg-[#2563eb] rounded-full shrink-0" />
              <div className="p-4 bg-[#fbbf24] text-[#1e1b4b] rounded-2xl rounded-tr-none shadow-sm">
                <p className="text-sm">Of course! Let's schedule a time to discuss your application strategy. What colleges are you considering?</p>
                <span className="text-[10px] opacity-70 mt-2 block font-medium">10:15 AM</span>
              </div>
            </div>
          </div>
          <div className="p-4 border-t">
            <div className="flex gap-2">
              <input 
                type="text" 
                placeholder="Type your reply..." 
                className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none"
              />
              <button className="px-6 py-2 bg-[#fbbf24] text-[#1e1b4b] font-bold rounded-xl flex items-center gap-2 hover:bg-[#f59e0b] transition-colors">
                <Send size={18} /> Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  color: string;
  textColor?: string;
}

const StatCard = ({ 
  icon, 
  label, 
  value, 
  color, 
  textColor = "text-white" 
}: StatCardProps) => (
  <div className={`${color} ${textColor} p-6 rounded-2xl shadow-lg transition-transform hover:scale-[1.02]`}>
    <div className="mb-4 opacity-80">
      {React.isValidElement(icon) ? React.cloneElement(icon as React.ReactElement<LucideProps>, { size: 28 }) : icon}
    </div>
    <div className="text-4xl font-bold mb-1">{value}</div>
    <div className="text-sm font-medium opacity-90">{label}</div>
  </div>
);

interface MessageItemProps {
  name: string;
  date: string;
  text: string;
  active: boolean;
  onClick: (name: string) => void;
  isReplied?: boolean;
  hasUnread?: boolean;
}

const MessageItem = ({ 
  name, 
  date, 
  text, 
  active, 
  onClick, 
  isReplied = false, 
  hasUnread = false 
}: MessageItemProps) => (
  <div 
    onClick={() => onClick(name)}
    className={`p-4 border-b cursor-pointer transition-colors ${active ? 'bg-blue-50/50' : 'hover:bg-gray-50'}`}
  >
    <div className="flex justify-between items-start mb-1">
      <h4 className="font-bold text-[#1e3a8a] text-sm flex items-center gap-2">
        {name} {hasUnread && <span className="w-2 h-2 bg-[#fbbf24] rounded-full" />}
      </h4>
      <span className="text-[10px] text-gray-400 font-medium">{date}</span>
    </div>
    <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">{text}</p>
    {isReplied && (
      <div className="mt-2 text-[10px] text-green-600 font-bold flex items-center gap-1">
        ✓ Replied
      </div>
    )}
  </div>
);

export default MessagesPage;