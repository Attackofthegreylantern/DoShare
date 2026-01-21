import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function UserProfile({ user }) {
  const displayName = user?.full_name || 'Student';
  const initials = displayName.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 rounded-[32px] bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_rgba(168,181,160,0.12)]"
    >
      <div className="flex items-center gap-4">
        <div className="relative">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#A8B5A0] to-[#9BAEC8] flex items-center justify-center text-white font-serif text-xl shadow-lg">
            {initials}
          </div>
          <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#D4A5A5] flex items-center justify-center shadow-md">
            <Sparkles className="w-3 h-3 text-white" />
          </div>
        </div>
        <div>
          <h3 className="font-serif text-lg text-[#4A4A4A]">{displayName}</h3>
          <p className="text-sm text-[#7A7A7A]">{user?.email || 'student@university.edu'}</p>
        </div>
      </div>
      
      <div className="mt-6 grid grid-cols-3 gap-3">
        {[
          { label: 'Datasets', value: '12' },
          { label: 'Courses', value: '4' },
          { label: 'Hours', value: '28' },
        ].map((stat, i) => (
          <div key={i} className="text-center p-3 rounded-2xl bg-[#F7F5F2]/80">
            <p className="font-serif text-xl text-[#4A4A4A]">{stat.value}</p>
            <p className="text-xs text-[#7A7A7A] mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}