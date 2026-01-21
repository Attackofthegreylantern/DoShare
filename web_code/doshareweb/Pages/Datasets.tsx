import React, { useState, useEffect } from 'react';
import { base44 } from '@/api/base44Client';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { Search, Filter, Grid3X3, List, SlidersHorizontal } from 'lucide-react';
import Sidebar from '@/components/Sidebar';
import DatasetCard from '@/components/DatasetCard';

const categories = ['全部', '经济学', '社会科学', '医疗健康', '环境科学', '科技', '教育', '人口统计'];
const formats = ['全部格式', 'CSV', 'JSON', 'Excel', 'Parquet'];

export default function Datasets() {
  const [activeCategory, setActiveCategory] = useState('全部');
  const [activeFormat, setActiveFormat] = useState('全部格式');
  const [searchQuery, setSearchQuery] = useState('');

  const { data: datasets = [], isLoading } = useQuery({
    queryKey: ['datasets'],
    queryFn: () => base44.entities.Dataset.list('-created_date', 50),
  });

  const filteredDatasets = datasets.filter(d => {
    const matchCategory = activeCategory === '全部' || d.category === activeCategory;
    const matchFormat = activeFormat === '全部格式' || d.format === activeFormat;
    const matchSearch = !searchQuery || 
      d.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.description?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchFormat && matchSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAFAF8] via-[#F8F6F3] to-[#F5F3F0]">
      <Sidebar activePage="数据集" />
      
      <main className="ml-20 min-h-screen p-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="font-serif text-3xl font-medium text-[#3D3D3D] mb-2">
            数据集库
          </h1>
          <p className="text-[#8A8A8A]">浏览和发现适合您研究的数据集</p>
        </motion.div>

        {/* Search & Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white/80 backdrop-blur-sm rounded-[28px] p-6 border border-[#E8E4DF]/80 mb-8"
        >
          {/* Search */}
          <div className="relative mb-6">
            <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9A9A9A]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="搜索数据集名称或描述..."
              className="w-full pl-12 pr-4 py-4 bg-[#F5F3F0] rounded-2xl text-[#3D3D3D] placeholder:text-[#B5B5B5] focus:outline-none focus:ring-2 focus:ring-[#A3B899]/30"
            />
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-4">
            <div className="flex-1">
              <p className="text-sm text-[#8A8A8A] mb-3">分类</p>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                      activeCategory === cat
                        ? 'bg-[#A3B899] text-white'
                        : 'bg-[#F5F3F0] text-[#6A6A6A] hover:bg-[#E8E4DF]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm text-[#8A8A8A] mb-3">格式</p>
              <div className="flex gap-2">
                {formats.map((fmt) => (
                  <button
                    key={fmt}
                    onClick={() => setActiveFormat(fmt)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                      activeFormat === fmt
                        ? 'bg-[#8FA3BF] text-white'
                        : 'bg-[#F5F3F0] text-[#6A6A6A] hover:bg-[#E8E4DF]'
                    }`}
                  >
                    {fmt}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Results count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-[#8A8A8A]">
            找到 <span className="font-semibold text-[#3D3D3D]">{filteredDatasets.length}</span> 个数据集
          </p>
          <div className="flex items-center gap-2">
            <button className="p-2.5 rounded-xl bg-[#3D3D3D] text-white">
              <Grid3X3 size={18} />
            </button>
            <button className="p-2.5 rounded-xl bg-white/60 border border-[#E8E4DF]/60 text-[#7A7A7A]">
              <List size={18} />
            </button>
          </div>
        </div>

        {/* Dataset Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
          {isLoading ? (
            Array.from({ length: 8 }).map((_, i) => (
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
                <Search size={32} className="text-[#B5B5B5]" />
              </div>
              <h3 className="text-lg font-medium text-[#5D5D5D] mb-2">未找到匹配的数据集</h3>
              <p className="text-[#9A9A9A]">请尝试调整筛选条件</p>
            </motion.div>
          )}
        </div>
      </main>
    </div>
  );
}