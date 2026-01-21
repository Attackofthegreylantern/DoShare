import React, { useState, useEffect } from 'react';
import { base44 } from '@/api/base44Client';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { Filter, Grid3X3, List, Sparkles } from 'lucide-react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import DatasetCard from '@/components/DatasetCard';
import UserDashboard from '@/components/UserDashboard';

const categories = ['全部', '经济学', '社会科学', '医疗健康', '环境科学', '科技', '教育', '人口统计'];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('全部');
  const [user, setUser] = useState(null);

  useEffect(() => {
    base44.auth.me().then(setUser).catch(() => {});
  }, []);

  const { data: datasets = [], isLoading } = useQuery({
    queryKey: ['datasets'],
    queryFn: () => base44.entities.Dataset.list('-created_date', 20),
  });

  const filteredDatasets = activeCategory === '全部' 
    ? datasets 
    : datasets.filter(d => d.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAFAF8] via-[#F8F6F3] to-[#F5F3F0]">
      <Sidebar activePage="工作台" />
      
      <main className="ml-20 flex">
        {/* Main Content */}
        <div className="flex-1 min-h-screen">
          <Header subtitle="发现、学习与应用数据" />
          
          <div className="px-8 pb-8">
            {/* Hero Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
              className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#A3B899]/30 via-[#E8E4DF]/20 to-[#8FA3BF]/20 p-8 mb-8 border border-[#E8E4DF]/60"
            >
              <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[#A3B899]/20 to-transparent rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-1/4 w-60 h-60 bg-gradient-to-tr from-[#8FA3BF]/20 to-transparent rounded-full blur-3xl" />
              
              <div className="relative z-10 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-[#E8E4DF]/60 mb-4">
                  <Sparkles size={16} className="text-[#A3B899]" />
                  <span className="text-sm font-medium text-[#5D5D5D]">AI 智能数据发现</span>
                </div>
                <h2 className="text-3xl font-semibold text-[#2D2D2D] mb-3 leading-tight">
                  通过智能引导，发现、理解和应用数据集
                </h2>
                <p className="text-[#6A6A6A] leading-relaxed">
                  探索为您的学术研究精选的数据集。我们的 AI 助手帮助您理解数据结构、建议分析方法，并指导您的学习旅程。
                </p>
              </div>
            </motion.div>

            {/* Filter Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex items-center justify-between mb-6"
            >
              <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`
                      px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap
                      transition-all duration-300
                      ${activeCategory === category
                        ? 'bg-[#3D3D3D] text-white shadow-lg shadow-[#3D3D3D]/20'
                        : 'bg-white/60 text-[#6A6A6A] hover:bg-white hover:text-[#3D3D3D] border border-[#E8E4DF]/60'
                      }
                    `}
                  >
                    {category}
                  </button>
                ))}
              </div>
              
              <div className="flex items-center gap-2 ml-4">
                <button className="p-2.5 rounded-xl bg-white/60 border border-[#E8E4DF]/60 text-[#7A7A7A] hover:bg-white hover:text-[#3D3D3D] transition-all">
                  <Filter size={18} />
                </button>
                <button className="p-2.5 rounded-xl bg-[#3D3D3D] text-white">
                  <Grid3X3 size={18} />
                </button>
                <button className="p-2.5 rounded-xl bg-white/60 border border-[#E8E4DF]/60 text-[#7A7A7A] hover:bg-white hover:text-[#3D3D3D] transition-all">
                  <List size={18} />
                </button>
              </div>
            </motion.div>

            {/* Dataset Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {isLoading ? (
                Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="bg-white/60 rounded-[32px] h-64 animate-pulse" />
                ))
              ) : filteredDatasets.length > 0 ? (
                filteredDatasets.map((dataset, index) => (
                  <DatasetCard key={dataset.id} dataset={dataset} index={index} />
                ))
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="col-span-full text-center py-16"
                >
                  <div className="w-20 h-20 mx-auto mb-4 rounded-3xl bg-[#F5F3F0] flex items-center justify-center">
                    <Grid3X3 size={32} className="text-[#B5B5B5]" />
                  </div>
                  <h3 className="text-lg font-medium text-[#5D5D5D] mb-2">未找到数据集</h3>
                  <p className="text-[#9A9A9A]">请尝试选择其他分类</p>
                </motion.div>
              )}
            </div>
          </div>
        </div>

        {/* Right Dashboard */}
        <UserDashboard user={user} />
      </main>
    </div>
  );
}