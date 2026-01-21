import React from 'react';
import { Download, ArrowUpRight, FileSpreadsheet } from 'lucide-react';
import { motion } from 'framer-motion';

const categoryColors = {
  '经济学': { bg: 'bg-[#8FA3BF]/15', text: 'text-[#5C7491]', border: 'border-[#8FA3BF]/30' },
  '社会科学': { bg: 'bg-[#D4A5A5]/15', text: 'text-[#A67B7B]', border: 'border-[#D4A5A5]/30' },
  '医疗健康': { bg: 'bg-[#A3B899]/15', text: 'text-[#6B7F5E]', border: 'border-[#A3B899]/30' },
  '环境科学': { bg: 'bg-[#93B5A3]/15', text: 'text-[#5E806C]', border: 'border-[#93B5A3]/30' },
  '科技': { bg: 'bg-[#9FA3BF]/15', text: 'text-[#6B6F91]', border: 'border-[#9FA3BF]/30' },
  '教育': { bg: 'bg-[#D4C5A5]/15', text: 'text-[#A69B7B]', border: 'border-[#D4C5A5]/30' },
  '人口统计': { bg: 'bg-[#BFA8A3]/15', text: 'text-[#8F7A74]', border: 'border-[#BFA8A3]/30' },
};

export default function DatasetCard({ dataset, index = 0 }) {
  const colors = categoryColors[dataset.category] || categoryColors['科技'];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: [0.23, 1, 0.32, 1] }}
      className="group relative"
    >
      <div className="
        relative overflow-hidden
        bg-white/80 backdrop-blur-sm
        rounded-[32px] p-6
        border border-[#E8E4DF]/80
        shadow-[0_4px_24px_-4px_rgba(0,0,0,0.04)]
        hover:shadow-[0_8px_40px_-8px_rgba(163,184,153,0.2)]
        hover:border-[#A3B899]/30
        transition-all duration-500 ease-out
        cursor-pointer
      ">
        {/* Background gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#A3B899]/5 via-transparent to-[#8FA3BF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Content */}
        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className={`
              w-12 h-12 rounded-2xl ${colors.bg} 
              flex items-center justify-center
              border ${colors.border}
            `}>
              <FileSpreadsheet size={22} className={colors.text} strokeWidth={1.5} />
            </div>
            
            <button className="
              w-10 h-10 rounded-xl
              bg-[#F5F3F0] hover:bg-[#A3B899]
              flex items-center justify-center
              transition-all duration-300
              group/btn
            ">
              <ArrowUpRight 
                size={18} 
                className="text-[#7A7A7A] group-hover/btn:text-white transition-colors" 
                strokeWidth={2}
              />
            </button>
          </div>
          
          {/* Title & Description */}
          <h3 className="font-semibold text-[#3D3D3D] text-lg mb-2 leading-tight group-hover:text-[#2D2D2D] transition-colors">
            {dataset.title}
          </h3>
          <p className="text-[#8A8A8A] text-sm leading-relaxed mb-4 line-clamp-2">
            {dataset.description}
          </p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className={`
              px-3 py-1.5 rounded-full text-xs font-medium
              ${colors.bg} ${colors.text} border ${colors.border}
            `}>
              {dataset.category}
            </span>
            {dataset.format && (
              <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-[#F5F3F0] text-[#6A6A6A]">
                {dataset.format}
              </span>
            )}
          </div>
          
          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-[#E8E4DF]/60">
            <span className="text-sm text-[#9A9A9A]">
              {dataset.size || '—'}
            </span>
            <div className="flex items-center gap-1.5 text-sm text-[#8A8A8A]">
              <Download size={14} strokeWidth={2} />
              <span>{dataset.downloads?.toLocaleString() || 0}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}