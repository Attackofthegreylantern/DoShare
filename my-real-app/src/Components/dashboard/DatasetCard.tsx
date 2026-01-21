import React from 'react';
import { motion } from 'framer-motion';
import { Download, Star, Database, FileText } from 'lucide-react';

const categoryColors = {
  'Economics': { bg: '#A8B5A0', light: '#A8B5A020' },
  'Healthcare': { bg: '#D4A5A5', light: '#D4A5A520' },
  'Environment': { bg: '#9BAEC8', light: '#9BAEC820' },
  'Social Science': { bg: '#C4B7A6', light: '#C4B7A620' },
  'Technology': { bg: '#A8B5C8', light: '#A8B5C820' },
  'Education': { bg: '#B5A8B5', light: '#B5A8B520' },
};

const formatIcons = {
  'CSV': FileText,
  'JSON': Database,
  'XML': FileText,
  'Parquet': Database,
  'Excel': FileText,
};

export default function DatasetCard({ dataset, index = 0, size = 'normal' }) {
  const colors = categoryColors[dataset.category] || categoryColors['Technology'];
  const FormatIcon = formatIcons[dataset.format] || FileText;
  
  const isLarge = size === 'large';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`group relative rounded-[32px] bg-gradient-to-br from-white/90 to-white/60 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_rgba(168,181,160,0.08)] hover:shadow-[0_16px_48px_rgba(168,181,160,0.16)] transition-all cursor-pointer overflow-hidden ${isLarge ? 'p-8' : 'p-6'}`}
    >
      {/* Decorative gradient orb */}
      <div 
        className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-30 blur-2xl transition-opacity group-hover:opacity-50"
        style={{ background: `radial-gradient(circle, ${colors.bg}, transparent)` }}
      />
      
      {/* Category tag */}
      <div className="flex items-center justify-between mb-4">
        <span 
          className="px-3 py-1.5 rounded-full text-xs font-medium"
          style={{ backgroundColor: colors.light, color: colors.bg }}
        >
          {dataset.category}
        </span>
        <div className="flex items-center gap-1 text-[#7A7A7A]">
          <Star className="w-3.5 h-3.5 fill-[#D4A5A5] text-[#D4A5A5]" />
          <span className="text-xs">{dataset.rating?.toFixed(1) || '4.5'}</span>
        </div>
      </div>
      
      {/* Title and description */}
      <h3 className={`font-serif text-[#4A4A4A] mb-2 line-clamp-2 ${isLarge ? 'text-xl' : 'text-lg'}`}>
        {dataset.title}
      </h3>
      <p className="text-sm text-[#7A7A7A] line-clamp-2 mb-4">
        {dataset.description || 'Comprehensive dataset for academic research and analysis.'}
      </p>
      
      {/* Tags */}
      {dataset.tags && dataset.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {dataset.tags.slice(0, 3).map((tag, i) => (
            <span key={i} className="px-2 py-1 rounded-lg bg-[#F7F5F2] text-xs text-[#7A7A7A]">
              {tag}
            </span>
          ))}
        </div>
      )}
      
      {/* Metadata */}
      <div className="flex items-center justify-between pt-4 border-t border-[#E8E4DF]/60">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <FormatIcon className="w-4 h-4 text-[#9BAEC8]" />
            <span className="text-xs text-[#7A7A7A]">{dataset.format || 'CSV'}</span>
          </div>
          <span className="text-xs text-[#7A7A7A]">{dataset.size || '1.2 GB'}</span>
        </div>
        <div className="flex items-center gap-1.5 text-[#7A7A7A]">
          <Download className="w-4 h-4" />
          <span className="text-xs">{dataset.downloads?.toLocaleString() || '1.2k'}</span>
        </div>
      </div>
    </motion.div>
  );
}