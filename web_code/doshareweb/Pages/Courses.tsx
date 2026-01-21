import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Clock, Users, Play, Star, ChevronRight } from 'lucide-react';
import Sidebar from '@/components/Sidebar';

const courses = [
  { 
    id: 1, 
    title: '数据分析基础', 
    instructor: '张明教授',
    description: '学习数据分析的核心概念和工具，包括数据清洗、可视化和基础统计分析。',
    progress: 75, 
    duration: '12 小时',
    students: 2340,
    rating: 4.8,
    color: '#A3B899',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400'
  },
  { 
    id: 2, 
    title: '统计学方法', 
    instructor: '李华博士',
    description: '深入学习统计推断、假设检验和回归分析等高级统计方法。',
    progress: 45, 
    duration: '16 小时',
    students: 1856,
    rating: 4.7,
    color: '#8FA3BF',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400'
  },
  { 
    id: 3, 
    title: '机器学习入门', 
    instructor: '王芳教授',
    description: '从零开始学习机器学习算法，包括监督学习、非监督学习和深度学习基础。',
    progress: 20, 
    duration: '20 小时',
    students: 3102,
    rating: 4.9,
    color: '#D4A5A5',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400'
  },
  { 
    id: 4, 
    title: 'Python 数据处理', 
    instructor: '陈刚博士',
    description: '掌握 Python 中 pandas、numpy 等数据处理库的使用技巧。',
    progress: 0, 
    duration: '14 小时',
    students: 2789,
    rating: 4.6,
    color: '#93B5A3',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400'
  },
  { 
    id: 5, 
    title: '数据可视化艺术', 
    instructor: '刘婷教授',
    description: '学习如何使用图表和交互式可视化有效地传达数据洞察。',
    progress: 0, 
    duration: '10 小时',
    students: 1567,
    rating: 4.8,
    color: '#D4C5A5',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400'
  },
  { 
    id: 6, 
    title: '研究方法论', 
    instructor: '赵强教授',
    description: '学习学术研究的设计、数据收集和论文撰写的完整流程。',
    progress: 0, 
    duration: '8 小时',
    students: 987,
    rating: 4.5,
    color: '#BFA8A3',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400'
  },
];

export default function Courses() {
  const [filter, setFilter] = useState('all');

  const filteredCourses = filter === 'all' 
    ? courses 
    : filter === 'inProgress' 
      ? courses.filter(c => c.progress > 0 && c.progress < 100)
      : courses.filter(c => c.progress === 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAFAF8] via-[#F8F6F3] to-[#F5F3F0]">
      <Sidebar activePage="课程" />
      
      <main className="ml-20 min-h-screen p-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="font-serif text-3xl font-medium text-[#3D3D3D] mb-2">
            学习课程
          </h1>
          <p className="text-[#8A8A8A]">通过精心设计的课程提升您的数据技能</p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex gap-3 mb-8"
        >
          {[
            { key: 'all', label: '全部课程' },
            { key: 'inProgress', label: '学习中' },
            { key: 'notStarted', label: '未开始' },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                filter === tab.key
                  ? 'bg-[#3D3D3D] text-white shadow-lg'
                  : 'bg-white/60 text-[#6A6A6A] hover:bg-white border border-[#E8E4DF]/60'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className="group bg-white/80 backdrop-blur-sm rounded-[28px] overflow-hidden border border-[#E8E4DF]/80 hover:shadow-xl hover:shadow-[#A3B899]/10 transition-all duration-500 cursor-pointer"
            >
              {/* Course Image */}
              <div className="relative h-40 overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-medium text-[#3D3D3D]">
                    {course.duration}
                  </span>
                </div>
                <button 
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: course.color }}
                >
                  <Play size={18} fill="currentColor" />
                </button>
              </div>

              {/* Course Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div 
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${course.color}20` }}
                  >
                    <BookOpen size={16} style={{ color: course.color }} />
                  </div>
                  <span className="text-sm text-[#8A8A8A]">{course.instructor}</span>
                </div>

                <h3 className="font-semibold text-[#3D3D3D] text-lg mb-2 group-hover:text-[#2D2D2D] transition-colors">
                  {course.title}
                </h3>
                <p className="text-sm text-[#8A8A8A] line-clamp-2 mb-4">
                  {course.description}
                </p>

                {/* Stats */}
                <div className="flex items-center gap-4 text-sm text-[#9A9A9A] mb-4">
                  <div className="flex items-center gap-1">
                    <Users size={14} />
                    <span>{course.students.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star size={14} className="fill-[#D4C5A5] text-[#D4C5A5]" />
                    <span>{course.rating}</span>
                  </div>
                </div>

                {/* Progress */}
                {course.progress > 0 ? (
                  <div>
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-[#8A8A8A]">学习进度</span>
                      <span className="font-medium" style={{ color: course.color }}>{course.progress}%</span>
                    </div>
                    <div className="h-2 bg-[#F0EDE8] rounded-full overflow-hidden">
                      <div 
                        className="h-full rounded-full transition-all"
                        style={{ width: `${course.progress}%`, backgroundColor: course.color }}
                      />
                    </div>
                  </div>
                ) : (
                  <button 
                    className="w-full py-3 rounded-xl text-sm font-medium transition-all flex items-center justify-center gap-2"
                    style={{ backgroundColor: `${course.color}15`, color: course.color }}
                  >
                    开始学习
                    <ChevronRight size={16} />
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}