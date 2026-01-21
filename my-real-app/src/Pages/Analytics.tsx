import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Clock, Target, Award, Calendar } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import Sidebar from '@/components/Sidebar';

const weeklyData = [
  { day: '周一', hours: 2.5 },
  { day: '周二', hours: 4 },
  { day: '周三', hours: 3 },
  { day: '周四', hours: 5 },
  { day: '周五', hours: 3.5 },
  { day: '周六', hours: 1.5 },
  { day: '周日', hours: 2 },
];

const monthlyData = [
  { month: '1月', datasets: 3, courses: 1 },
  { month: '2月', datasets: 5, courses: 2 },
  { month: '3月', datasets: 4, courses: 1 },
  { month: '4月', datasets: 7, courses: 3 },
];

const categoryData = [
  { name: '经济学', value: 35, color: '#8FA3BF' },
  { name: '环境科学', value: 25, color: '#A3B899' },
  { name: '医疗健康', value: 20, color: '#D4A5A5' },
  { name: '其他', value: 20, color: '#D4C5A5' },
];

const stats = [
  { label: '总学习时长', value: '86 小时', icon: Clock, color: '#A3B899' },
  { label: '完成课程', value: '3 门', icon: Award, color: '#8FA3BF' },
  { label: '使用数据集', value: '12 个', icon: Target, color: '#D4A5A5' },
  { label: '连续学习', value: '15 天', icon: Calendar, color: '#D4C5A5' },
];

export default function Analytics() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAFAF8] via-[#F8F6F3] to-[#F5F3F0]">
      <Sidebar activePage="数据分析" />
      
      <main className="ml-20 min-h-screen p-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="font-serif text-3xl font-medium text-[#3D3D3D] mb-2">
            学习数据
          </h1>
          <p className="text-[#8A8A8A]">追踪您的学习进度和成就</p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.05 }}
              className="bg-white/80 backdrop-blur-sm rounded-[24px] p-6 border border-[#E8E4DF]/80"
            >
              <div className="flex items-center gap-4">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${stat.color}20` }}
                >
                  <stat.icon size={22} style={{ color: stat.color }} />
                </div>
                <div>
                  <p className="text-sm text-[#8A8A8A]">{stat.label}</p>
                  <p className="text-2xl font-semibold text-[#3D3D3D]">{stat.value}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Weekly Activity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="xl:col-span-2 bg-white/80 backdrop-blur-sm rounded-[28px] p-6 border border-[#E8E4DF]/80"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-semibold text-[#3D3D3D] text-lg">本周学习活动</h3>
                <p className="text-sm text-[#8A8A8A]">每日学习时长统计</p>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#A3B899]/10 text-[#6B7F5E]">
                <TrendingUp size={18} />
                <span className="text-sm font-medium">+15% 比上周</span>
              </div>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={weeklyData} barCategoryGap="30%">
                  <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: '#9A9A9A', fontSize: 12 }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9A9A9A', fontSize: 12 }} />
                  <Bar dataKey="hours" radius={[8, 8, 8, 8]} fill="#A3B899" fillOpacity={0.8} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Category Distribution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/80 backdrop-blur-sm rounded-[28px] p-6 border border-[#E8E4DF]/80"
          >
            <h3 className="font-semibold text-[#3D3D3D] text-lg mb-2">数据集分类</h3>
            <p className="text-sm text-[#8A8A8A] mb-6">您使用的数据集类型分布</p>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={80}
                    paddingAngle={4}
                    dataKey="value"
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-3 mt-4">
              {categoryData.map((cat) => (
                <div key={cat.name} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: cat.color }} />
                  <span className="text-sm text-[#6A6A6A]">{cat.name}</span>
                  <span className="text-sm font-medium text-[#3D3D3D] ml-auto">{cat.value}%</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Monthly Trend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="xl:col-span-3 bg-white/80 backdrop-blur-sm rounded-[28px] p-6 border border-[#E8E4DF]/80"
          >
            <h3 className="font-semibold text-[#3D3D3D] text-lg mb-2">月度趋势</h3>
            <p className="text-sm text-[#8A8A8A] mb-6">数据集和课程使用趋势</p>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyData}>
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#9A9A9A', fontSize: 12 }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9A9A9A', fontSize: 12 }} />
                  <Line type="monotone" dataKey="datasets" stroke="#A3B899" strokeWidth={3} dot={{ fill: '#A3B899', strokeWidth: 2 }} />
                  <Line type="monotone" dataKey="courses" stroke="#8FA3BF" strokeWidth={3} dot={{ fill: '#8FA3BF', strokeWidth: 2 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="flex items-center justify-center gap-8 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-4 h-1 rounded-full bg-[#A3B899]" />
                <span className="text-sm text-[#6A6A6A]">数据集</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-1 rounded-full bg-[#8FA3BF]" />
                <span className="text-sm text-[#6A6A6A]">课程</span>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}