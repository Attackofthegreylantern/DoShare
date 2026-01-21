import React from 'react';
import { motion } from 'framer-motion';
import { Play, ChevronRight } from 'lucide-react';

const mockCourses = [
  { id: 1, title: 'Data Analysis Fundamentals', instructor: 'Dr. Sarah Chen', progress: 72, color: '#A8B5A0' },
  { id: 2, title: 'Statistical Methods', instructor: 'Prof. James Miller', progress: 45, color: '#D4A5A5' },
  { id: 3, title: 'Python for Research', instructor: 'Dr. Emily Brooks', progress: 88, color: '#9BAEC8' },
];

export default function MyCourses({ courses = mockCourses }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="p-6 rounded-[32px] bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_rgba(168,181,160,0.12)]"
    >
      <div className="flex items-center justify-between mb-5">
        <h3 className="font-serif text-lg text-[#4A4A4A]">My Courses</h3>
        <button className="text-xs text-[#7A7A7A] hover:text-[#4A4A4A] transition-colors flex items-center gap-1">
          View All <ChevronRight className="w-3 h-3" />
        </button>
      </div>
      
      <div className="space-y-3">
        {courses.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * index }}
            className="group p-4 rounded-2xl bg-[#F7F5F2]/60 hover:bg-[#F7F5F2] transition-all cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div 
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105"
                style={{ backgroundColor: `${course.color}20` }}
              >
                <Play className="w-4 h-4" style={{ color: course.color }} />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium text-[#4A4A4A] truncate">{course.title}</h4>
                <p className="text-xs text-[#7A7A7A]">{course.instructor}</p>
              </div>
              <span className="text-xs font-medium" style={{ color: course.color }}>{course.progress}%</span>
            </div>
            <div className="mt-3 h-1.5 rounded-full bg-[#E8E4DF] overflow-hidden">
              <motion.div 
                className="h-full rounded-full"
                style={{ backgroundColor: course.color }}
                initial={{ width: 0 }}
                animate={{ width: `${course.progress}%` }}
                transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}