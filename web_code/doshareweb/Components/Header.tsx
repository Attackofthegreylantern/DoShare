import React from 'react';
import { Search, Bell } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Header({ title = "DoShare", subtitle = "发现、学习与应用数据" }) {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      className="flex items-center justify-between py-6 px-8"
    >
      {/* Logo & Title */}
      <div className="flex-1">
        <h1 className="font-serif text-3xl font-medium text-[#3D3D3D] tracking-tight">
          Do<span className="text-[#A3B899]">Share</span>
        </h1>
        <p className="text-sm text-[#9A9A9A] mt-1">{subtitle}</p>
      </div>
      
      {/* Search */}
      <div className="flex-1 max-w-md mx-8">
        <div className="relative group">
          <Search 
            size={18} 
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9A9A9A] group-focus-within:text-[#A3B899] transition-colors" 
            strokeWidth={2}
          />
          <input
            type="text"
            placeholder="搜索数据集、课程..."
            className="
              w-full pl-12 pr-4 py-3.5
              bg-white/80 backdrop-blur-sm
              border border-[#E8E4DF]
              rounded-2xl
              text-sm text-[#3D3D3D]
              placeholder:text-[#B5B5B5]
              focus:outline-none focus:border-[#A3B899]/50 focus:ring-4 focus:ring-[#A3B899]/10
              transition-all duration-300
            "
          />
        </div>
      </div>
      
      {/* Actions */}
      <div className="flex-1 flex items-center justify-end gap-3">
        <button className="
          relative w-11 h-11 rounded-2xl
          bg-white/80 backdrop-blur-sm
          border border-[#E8E4DF]
          flex items-center justify-center
          text-[#7A7A7A] hover:text-[#3D3D3D]
          hover:border-[#A3B899]/30 hover:bg-[#A3B899]/5
          transition-all duration-300
        ">
          <Bell size={20} strokeWidth={1.5} />
          <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-[#D4A5A5] rounded-full" />
        </button>
      </div>
    </motion.header>
  );
}