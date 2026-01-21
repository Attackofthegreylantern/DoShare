import React from 'react';
import { BookOpen, ChevronRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import ActivityChart from './ActivityChart';

const courses = [
  { title: '数据分析基础', progress: 75, color: '#A3B899' },
  { title: '统计学方法', progress: 45, color: '#8FA3BF' },
  { title: '机器学习入门', progress: 20, color: '#D4A5A5' },
];

export default function UserDashboard({ user }) {
  return (
    <aside className="w-[340px] h-full overflow-y-auto py-8 pr-8 space-y-6">
      {/* User Profile Card */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        className="bg-gradient-to-br from-[#A3B899]/20 via-white to-[#8FA3BF]/10 rounded-[28px] p-6 border border-[#E8E4DF]/60 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.04)]"
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#A3B899] to-[#8FA3BF] flex items-center justify-center text-white font-semibold text-xl shadow-lg shadow-[#A3B899]/20">
            {user?.full_name?.charAt(0) || '用'}
          </div>
          <div>
            <h3 className="font-semibold text-[#3D3D3D] text-lg">{user?.full_name || '用户'}</h3>
            <p className="text-sm text-[#8A8A8A]">{user?.email || 'student@edu.cn'}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 text-center">
            <span className="block text-2xl font-semibold text-[#3D3D3D]">12</span>
            <span className="text-xs text-[#8A8A8A]">数据集</span>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 text-center">
            <span className="block text-2xl font-semibold text-[#3D3D3D]">3</span>
            <span className="text-xs text-[#8A8A8A]">课程</span>
          </div>
        </div>
      </motion.div>

      {/* Activity Chart */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
      >
        <ActivityChart />
      </motion.div>

      {/* My Courses */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
        className="bg-white/80 backdrop-blur-sm rounded-[28px] p-6 border border-[#E8E4DF]/80 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.04)]"
      >
        <div className="flex items-center justify-between mb-5">
          <h3 className="font-semibold text-[#3D3D3D] text-base">我的课程</h3>
          <Link 
            to={createPageUrl('Courses')}
            className="text-sm text-[#A3B899] font-medium hover:text-[#8FA991] transition-colors flex items-center gap-1"
          >
            查看全部
            <ChevronRight size={16} />
          </Link>
        </div>
        
        <div className="space-y-4">
          {courses.map((course, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="flex items-center gap-3 mb-2">
                <div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${course.color}20` }}
                >
                  <BookOpen size={18} style={{ color: course.color }} strokeWidth={1.5} />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-[#3D3D3D] truncate group-hover:text-[#2D2D2D] transition-colors">
                    {course.title}
                  </h4>
                  <span className="text-xs text-[#9A9A9A]">已完成 {course.progress}%</span>
                </div>
              </div>
              <div className="h-1.5 bg-[#F0EDE8] rounded-full overflow-hidden">
                <div 
                  className="h-full rounded-full transition-all duration-500"
                  style={{ 
                    width: `${course.progress}%`,
                    backgroundColor: course.color
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* AI Guide Quick Access */}
      <Link to={createPageUrl('AIGuide')}>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
          className="bg-gradient-to-br from-[#8FA3BF]/20 to-[#A3B899]/20 rounded-[28px] p-6 border border-[#E8E4DF]/60 cursor-pointer group hover:shadow-lg hover:shadow-[#8FA3BF]/10 transition-all duration-300"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/80 flex items-center justify-center shadow-sm">
              <Sparkles size={22} className="text-[#8FA3BF]" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="font-semibold text-[#3D3D3D] group-hover:text-[#2D2D2D] transition-colors">AI 数据助手</h3>
              <p className="text-sm text-[#8A8A8A]">获取个性化帮助</p>
            </div>
          </div>
        </motion.div>
      </Link>
    </aside>
  );
}