import React from 'react';
import { motion } from 'framer-motion';

const categories = [
  { id: 'all', label: 'All', icon: '✨' },
  { id: 'Economics', label: 'Economics', icon: '📈' },
  { id: 'Healthcare', label: 'Healthcare', icon: '🏥' },
  { id: 'Environment', label: 'Environment', icon: '🌿' },
  { id: 'Social Science', label: 'Social', icon: '👥' },
  { id: 'Technology', label: 'Technology', icon: '💻' },
  { id: 'Education', label: 'Education', icon: '📚' },
];

export default function CategoryFilter({ selected, onSelect }) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat) => (
        <motion.button
          key={cat.id}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onSelect(cat.id)}
          className={`px-4 py-2.5 rounded-2xl text-sm font-medium transition-all flex items-center gap-2 ${
            selected === cat.id
              ? 'bg-[#4A4A4A] text-white shadow-lg'
              : 'bg-white/60 text-[#7A7A7A] hover:bg-white hover:text-[#4A4A4A] border border-white/60'
          }`}
        >
          <span>{cat.icon}</span>
          <span>{cat.label}</span>
        </motion.button>
      ))}
    </div>
  );
}