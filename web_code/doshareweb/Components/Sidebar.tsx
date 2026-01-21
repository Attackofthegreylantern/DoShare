import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { 
  LayoutGrid, 
  Database, 
  BookOpen, 
  Sparkles, 
  Settings,
  Bookmark,
  TrendingUp,
  Users
} from 'lucide-react';

const navItems = [
  { icon: LayoutGrid, label: '工作台', page: 'Home' },
  { icon: Database, label: '数据集', page: 'Datasets' },
  { icon: BookOpen, label: '课程', page: 'Courses' },
  { icon: Sparkles, label: 'AI 助手', page: 'AIGuide' },
  { icon: Bookmark, label: '收藏', page: 'Saved' },
  { icon: TrendingUp, label: '数据分析', page: 'Analytics' },
  { icon: Users, label: '社区', page: 'Community' },
];

export default function Sidebar({ activePage = '工作台' }) {
  return (
    <aside className="fixed left-0 top-0 h-screen w-20 bg-white/70 backdrop-blur-xl border-r border-[#E8E4DF] flex flex-col items-center py-8 z-50">
      {/* Logo */}
      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#A3B899] to-[#8FA3BF] flex items-center justify-center mb-10 shadow-lg shadow-[#A3B899]/20">
        <span className="text-white font-serif font-bold text-lg">D</span>
      </div>
      
      {/* Navigation */}
      <nav className="flex-1 flex flex-col gap-2">
        {navItems.map((item) => {
          const isActive = activePage === item.label;
          return (
            <Link
              key={item.label}
              to={createPageUrl(item.page)}
              className={`
                group relative w-12 h-12 rounded-2xl flex items-center justify-center
                transition-all duration-300 ease-out
                ${isActive 
                  ? 'bg-[#A3B899]/15 text-[#6B7F5E]' 
                  : 'text-[#9B9B9B] hover:bg-[#F5F3F0] hover:text-[#5D5D5D]'
                }
              `}
            >
              <item.icon 
                size={22} 
                strokeWidth={isActive ? 2 : 1.5}
                className="transition-all duration-300"
              />
              
              {/* Tooltip */}
              <div className="absolute left-full ml-4 px-3 py-2 bg-[#3D3D3D] text-white text-sm rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap font-medium shadow-xl z-50">
                {item.label}
                <div className="absolute right-full top-1/2 -translate-y-1/2 border-8 border-transparent border-r-[#3D3D3D]" />
              </div>
              
              {/* Active indicator */}
              {isActive && (
                <div className="absolute -left-[2px] top-1/2 -translate-y-1/2 w-1 h-6 bg-[#A3B899] rounded-full" />
              )}
            </Link>
          );
        })}
      </nav>
      
      {/* Settings */}
      <Link
        to={createPageUrl('Settings')}
        className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 group relative
          ${activePage === '设置' ? 'bg-[#A3B899]/15 text-[#6B7F5E]' : 'text-[#9B9B9B] hover:bg-[#F5F3F0] hover:text-[#5D5D5D]'}
        `}
      >
        <Settings size={22} strokeWidth={1.5} />
        <div className="absolute left-full ml-4 px-3 py-2 bg-[#3D3D3D] text-white text-sm rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap font-medium shadow-xl z-50">
          设置
          <div className="absolute right-full top-1/2 -translate-y-1/2 border-8 border-transparent border-r-[#3D3D3D]" />
        </div>
      </Link>
    </aside>
  );
}