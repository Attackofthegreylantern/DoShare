import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bookmark, Database, BookOpen, Folder, Trash2, MoreHorizontal } from 'lucide-react';
import Sidebar from '@/components/Sidebar';

const savedItems = [
  { id: 1, type: 'dataset', title: '全球气候数据集', category: '环境科学', savedDate: '2024-01-15' },
  { id: 2, type: 'course', title: '机器学习入门', instructor: '王芳教授', savedDate: '2024-01-14' },
  { id: 3, type: 'dataset', title: '社交媒体情感分析', category: '社会科学', savedDate: '2024-01-12' },
  { id: 4, type: 'dataset', title: '临床试验结果数据库', category: '医疗健康', savedDate: '2024-01-10' },
  { id: 5, type: 'course', title: '数据可视化艺术', instructor: '刘婷教授', savedDate: '2024-01-08' },
];

const collections = [
  { id: 1, name: '毕业论文资料', count: 8, color: '#A3B899' },
  { id: 2, name: '课程学习', count: 5, color: '#8FA3BF' },
  { id: 3, name: '感兴趣的', count: 12, color: '#D4A5A5' },
];

export default function Saved() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredItems = activeTab === 'all' 
    ? savedItems 
    : savedItems.filter(item => item.type === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAFAF8] via-[#F8F6F3] to-[#F5F3F0]">
      <Sidebar activePage="收藏" />
      
      <main className="ml-20 min-h-screen p-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="font-serif text-3xl font-medium text-[#3D3D3D] mb-2">
            我的收藏
          </h1>
          <p className="text-[#8A8A8A]">管理您保存的数据集和课程</p>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="xl:col-span-3">
            {/* Filter Tabs */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex gap-3 mb-6"
            >
              {[
                { key: 'all', label: '全部', icon: Bookmark },
                { key: 'dataset', label: '数据集', icon: Database },
                { key: 'course', label: '课程', icon: BookOpen },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    activeTab === tab.key
                      ? 'bg-[#3D3D3D] text-white shadow-lg'
                      : 'bg-white/60 text-[#6A6A6A] hover:bg-white border border-[#E8E4DF]/60'
                  }`}
                >
                  <tab.icon size={16} />
                  {tab.label}
                </button>
              ))}
            </motion.div>

            {/* Saved Items */}
            <div className="space-y-4">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="group bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-[#E8E4DF]/80 hover:shadow-lg hover:shadow-[#A3B899]/10 transition-all flex items-center gap-4"
                >
                  <div className={`
                    w-12 h-12 rounded-xl flex items-center justify-center
                    ${item.type === 'dataset' ? 'bg-[#A3B899]/15' : 'bg-[#8FA3BF]/15'}
                  `}>
                    {item.type === 'dataset' 
                      ? <Database size={22} className="text-[#6B7F5E]" />
                      : <BookOpen size={22} className="text-[#5C7491]" />
                    }
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-semibold text-[#3D3D3D] mb-1">{item.title}</h3>
                    <p className="text-sm text-[#8A8A8A]">
                      {item.type === 'dataset' ? item.category : item.instructor}
                      <span className="mx-2">·</span>
                      收藏于 {item.savedDate}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 rounded-lg hover:bg-[#F5F3F0] text-[#9A9A9A] hover:text-[#D4A5A5] transition-all">
                      <Trash2 size={18} />
                    </button>
                    <button className="p-2 rounded-lg hover:bg-[#F5F3F0] text-[#9A9A9A] hover:text-[#3D3D3D] transition-all">
                      <MoreHorizontal size={18} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Collections Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-[28px] p-6 border border-[#E8E4DF]/80">
              <h3 className="font-semibold text-[#3D3D3D] mb-4">收藏夹</h3>
              <div className="space-y-3">
                {collections.map((col) => (
                  <button
                    key={col.id}
                    className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-[#F5F3F0] transition-all text-left"
                  >
                    <div 
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${col.color}20` }}
                    >
                      <Folder size={18} style={{ color: col.color }} />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-[#3D3D3D] text-sm">{col.name}</p>
                      <p className="text-xs text-[#9A9A9A]">{col.count} 项</p>
                    </div>
                  </button>
                ))}
              </div>
              
              <button className="w-full mt-4 py-3 rounded-xl border-2 border-dashed border-[#E8E4DF] text-sm text-[#9A9A9A] hover:border-[#A3B899] hover:text-[#6B7F5E] transition-all">
                + 新建收藏夹
              </button>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}