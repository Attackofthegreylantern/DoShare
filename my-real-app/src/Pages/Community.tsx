import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, MessageCircle, Heart, Share2, Bookmark, TrendingUp, Award, Search } from 'lucide-react';
import Sidebar from '@/components/Sidebar';

const posts = [
  {
    id: 1,
    author: '张明',
    avatar: '张',
    role: '数据科学研究员',
    time: '2 小时前',
    content: '分享一个很棒的经济数据分析技巧：在处理时间序列数据时，记得先检查数据的平稳性。可以使用 ADF 检验来验证。',
    likes: 45,
    comments: 12,
    tags: ['数据分析', '经济学'],
    color: '#A3B899'
  },
  {
    id: 2,
    author: '李华',
    avatar: '李',
    role: '机器学习工程师',
    time: '5 小时前',
    content: '刚完成了一个使用 DoShare 平台上气候数据集的项目！预测模型的准确率达到了 92%。感谢平台提供的高质量数据。',
    likes: 78,
    comments: 23,
    tags: ['机器学习', '环境科学'],
    color: '#8FA3BF'
  },
  {
    id: 3,
    author: '王芳',
    avatar: '王',
    role: '统计学教授',
    time: '1 天前',
    content: '推荐大家学习贝叶斯统计方法，它在处理小样本数据时特别有用。平台上的统计学方法课程有详细的介绍。',
    likes: 112,
    comments: 34,
    tags: ['统计学', '教程'],
    color: '#D4A5A5'
  },
];

const topContributors = [
  { name: '陈刚', points: 2340, rank: 1 },
  { name: '刘婷', points: 1890, rank: 2 },
  { name: '赵强', points: 1650, rank: 3 },
  { name: '孙丽', points: 1420, rank: 4 },
  { name: '周明', points: 1280, rank: 5 },
];

const trendingTopics = [
  { tag: '数据可视化', posts: 156 },
  { tag: '机器学习', posts: 142 },
  { tag: 'Python', posts: 128 },
  { tag: '统计分析', posts: 98 },
];

export default function Community() {
  const [activeTab, setActiveTab] = useState('hot');

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAFAF8] via-[#F8F6F3] to-[#F5F3F0]">
      <Sidebar activePage="社区" />
      
      <main className="ml-20 min-h-screen p-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="font-serif text-3xl font-medium text-[#3D3D3D] mb-2">
            学习社区
          </h1>
          <p className="text-[#8A8A8A]">与其他学习者交流经验、分享见解</p>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="xl:col-span-3">
            {/* Create Post */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/80 backdrop-blur-sm rounded-[24px] p-5 border border-[#E8E4DF]/80 mb-6"
            >
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#A3B899] to-[#8FA3BF] flex items-center justify-center text-white font-medium">
                  用
                </div>
                <input
                  type="text"
                  placeholder="分享您的学习心得..."
                  className="flex-1 px-4 py-3 bg-[#F5F3F0] rounded-xl text-[#3D3D3D] placeholder:text-[#B5B5B5] focus:outline-none focus:ring-2 focus:ring-[#A3B899]/30"
                />
                <button className="px-6 py-3 bg-[#A3B899] text-white rounded-xl font-medium hover:bg-[#8FA991] transition-colors">
                  发布
                </button>
              </div>
            </motion.div>

            {/* Filter Tabs */}
            <div className="flex gap-3 mb-6">
              {[
                { key: 'hot', label: '热门' },
                { key: 'latest', label: '最新' },
                { key: 'following', label: '关注' },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    activeTab === tab.key
                      ? 'bg-[#3D3D3D] text-white'
                      : 'bg-white/60 text-[#6A6A6A] hover:bg-white border border-[#E8E4DF]/60'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Posts */}
            <div className="space-y-5">
              {posts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  className="bg-white/80 backdrop-blur-sm rounded-[24px] p-6 border border-[#E8E4DF]/80 hover:shadow-lg hover:shadow-[#A3B899]/10 transition-all"
                >
                  {/* Author */}
                  <div className="flex items-center gap-3 mb-4">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-medium"
                      style={{ background: `linear-gradient(135deg, ${post.color}, ${post.color}90)` }}
                    >
                      {post.avatar}
                    </div>
                    <div>
                      <h4 className="font-medium text-[#3D3D3D]">{post.author}</h4>
                      <p className="text-sm text-[#8A8A8A]">{post.role} · {post.time}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <p className="text-[#4A4A4A] leading-relaxed mb-4">{post.content}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-[#F5F3F0] text-sm text-[#6A6A6A]">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-6 pt-4 border-t border-[#E8E4DF]/60">
                    <button className="flex items-center gap-2 text-[#8A8A8A] hover:text-[#D4A5A5] transition-colors">
                      <Heart size={18} />
                      <span className="text-sm">{post.likes}</span>
                    </button>
                    <button className="flex items-center gap-2 text-[#8A8A8A] hover:text-[#8FA3BF] transition-colors">
                      <MessageCircle size={18} />
                      <span className="text-sm">{post.comments}</span>
                    </button>
                    <button className="flex items-center gap-2 text-[#8A8A8A] hover:text-[#A3B899] transition-colors">
                      <Share2 size={18} />
                    </button>
                    <button className="flex items-center gap-2 text-[#8A8A8A] hover:text-[#D4C5A5] transition-colors ml-auto">
                      <Bookmark size={18} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Trending Topics */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/80 backdrop-blur-sm rounded-[24px] p-6 border border-[#E8E4DF]/80"
            >
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp size={18} className="text-[#A3B899]" />
                <h3 className="font-semibold text-[#3D3D3D]">热门话题</h3>
              </div>
              <div className="space-y-3">
                {trendingTopics.map((topic, i) => (
                  <button key={topic.tag} className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-[#F5F3F0] transition-all text-left">
                    <span className="text-sm text-[#4A4A4A]">#{topic.tag}</span>
                    <span className="text-xs text-[#9A9A9A]">{topic.posts} 讨论</span>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Top Contributors */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white/80 backdrop-blur-sm rounded-[24px] p-6 border border-[#E8E4DF]/80"
            >
              <div className="flex items-center gap-2 mb-4">
                <Award size={18} className="text-[#D4C5A5]" />
                <h3 className="font-semibold text-[#3D3D3D]">贡献榜</h3>
              </div>
              <div className="space-y-3">
                {topContributors.map((user) => (
                  <div key={user.name} className="flex items-center gap-3 p-2">
                    <span className={`
                      w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold
                      ${user.rank === 1 ? 'bg-[#D4C5A5] text-white' : 
                        user.rank === 2 ? 'bg-[#C4C4C4] text-white' :
                        user.rank === 3 ? 'bg-[#BFA8A3] text-white' :
                        'bg-[#F5F3F0] text-[#8A8A8A]'}
                    `}>
                      {user.rank}
                    </span>
                    <span className="flex-1 text-sm text-[#4A4A4A]">{user.name}</span>
                    <span className="text-sm font-medium text-[#A3B899]">{user.points}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}