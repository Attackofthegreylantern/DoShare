import React from 'react';
import { motion } from 'framer-motion';
import { Search, Sparkles } from 'lucide-react';

export default function SearchBar({ value, onChange, onAIClick }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative"
    >
      <div className="relative flex items-center">
        <Search className="absolute left-5 w-5 h-5 text-[#7A7A7A]" />
        <input
          type="text"
          placeholder="Search datasets, topics, or keywords..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full pl-14 pr-32 py-4 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/60 text-[#4A4A4A] placeholder-[#9A9A9A] focus:outline-none focus:ring-2 focus:ring-[#A8B5A0]/30 focus:border-[#A8B5A0]/50 transition-all shadow-[0_4px_24px_rgba(168,181,160,0.08)]"
        />
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onAIClick}
          className="absolute right-3 px-4 py-2 rounded-xl bg-gradient-to-r from-[#A8B5A0] to-[#9BAEC8] text-white text-sm font-medium flex items-center gap-2 shadow-md hover:shadow-lg transition-shadow"
        >
          <Sparkles className="w-4 h-4" />
          AI Guide
        </motion.button>
      </div>
    </motion.div>
  );
}