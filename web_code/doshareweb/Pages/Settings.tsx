import React, { useState, useEffect } from 'react';
import { base44 } from '@/api/base44Client';
import { motion } from 'framer-motion';
import { User, Bell, Shield, Palette, Globe, LogOut, ChevronRight, Moon, Sun } from 'lucide-react';
import Sidebar from '@/components/Sidebar';

const settingSections = [
  {
    id: 'profile',
    title: '个人资料',
    icon: User,
    description: '管理您的个人信息和头像',
    color: '#A3B899'
  },
  {
    id: 'notifications',
    title: '通知设置',
    icon: Bell,
    description: '自定义邮件和推送通知',
    color: '#8FA3BF'
  },
  {
    id: 'privacy',
    title: '隐私与安全',
    icon: Shield,
    description: '密码、两步验证等安全设置',
    color: '#D4A5A5'
  },
  {
    id: 'appearance',
    title: '外观设置',
    icon: Palette,
    description: '主题、颜色和显示偏好',
    color: '#D4C5A5'
  },
  {
    id: 'language',
    title: '语言与地区',
    icon: Globe,
    description: '语言、时区和日期格式',
    color: '#93B5A3'
  },
];

export default function Settings() {
  const [user, setUser] = useState(null);
  const [activeSection, setActiveSection] = useState('profile');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    base44.auth.me().then(setUser).catch(() => {});
  }, []);

  const handleLogout = () => {
    base44.auth.logout();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAFAF8] via-[#F8F6F3] to-[#F5F3F0]">
      <Sidebar activePage="设置" />
      
      <main className="ml-20 min-h-screen p-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="font-serif text-3xl font-medium text-[#3D3D3D] mb-2">
            设置
          </h1>
          <p className="text-[#8A8A8A]">管理您的账户和偏好设置</p>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Settings Menu */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-3"
          >
            {settingSections.map((section, index) => (
              <motion.button
                key={section.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
                onClick={() => setActiveSection(section.id)}
                className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all text-left ${
                  activeSection === section.id
                    ? 'bg-white shadow-lg shadow-[#A3B899]/10 border border-[#A3B899]/20'
                    : 'bg-white/60 hover:bg-white border border-transparent'
                }`}
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${section.color}15` }}
                >
                  <section.icon size={22} style={{ color: section.color }} />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-[#3D3D3D]">{section.title}</h3>
                  <p className="text-sm text-[#8A8A8A]">{section.description}</p>
                </div>
                <ChevronRight size={18} className="text-[#C5C5C5]" />
              </motion.button>
            ))}

            {/* Logout */}
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-4 p-4 rounded-2xl bg-[#D4A5A5]/10 hover:bg-[#D4A5A5]/20 transition-all text-left mt-6"
            >
              <div className="w-12 h-12 rounded-xl bg-[#D4A5A5]/15 flex items-center justify-center">
                <LogOut size={22} className="text-[#D4A5A5]" />
              </div>
              <div>
                <h3 className="font-medium text-[#A67B7B]">退出登录</h3>
                <p className="text-sm text-[#C4A5A5]">安全退出您的账户</p>
              </div>
            </button>
          </motion.div>

          {/* Settings Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="xl:col-span-2 bg-white/80 backdrop-blur-sm rounded-[28px] p-8 border border-[#E8E4DF]/80"
          >
            {activeSection === 'profile' && (
              <div>
                <h2 className="text-xl font-semibold text-[#3D3D3D] mb-6">个人资料</h2>
                
                {/* Avatar */}
                <div className="flex items-center gap-6 mb-8 pb-8 border-b border-[#E8E4DF]">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#A3B899] to-[#8FA3BF] flex items-center justify-center text-white text-3xl font-semibold">
                    {user?.full_name?.charAt(0) || '用'}
                  </div>
                  <div>
                    <h3 className="font-medium text-[#3D3D3D] mb-2">头像</h3>
                    <p className="text-sm text-[#8A8A8A] mb-3">支持 JPG、PNG 格式，最大 2MB</p>
                    <button className="px-4 py-2 bg-[#F5F3F0] rounded-xl text-sm text-[#5D5D5D] hover:bg-[#E8E4DF] transition-colors">
                      更换头像
                    </button>
                  </div>
                </div>

                {/* Form */}
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-[#5D5D5D] mb-2">姓名</label>
                    <input
                      type="text"
                      defaultValue={user?.full_name || ''}
                      placeholder="请输入您的姓名"
                      className="w-full px-4 py-3 bg-[#F5F3F0] rounded-xl text-[#3D3D3D] focus:outline-none focus:ring-2 focus:ring-[#A3B899]/30"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#5D5D5D] mb-2">邮箱</label>
                    <input
                      type="email"
                      defaultValue={user?.email || ''}
                      disabled
                      className="w-full px-4 py-3 bg-[#F5F3F0] rounded-xl text-[#8A8A8A] cursor-not-allowed"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#5D5D5D] mb-2">个人简介</label>
                    <textarea
                      rows={4}
                      placeholder="介绍一下自己..."
                      className="w-full px-4 py-3 bg-[#F5F3F0] rounded-xl text-[#3D3D3D] focus:outline-none focus:ring-2 focus:ring-[#A3B899]/30 resize-none"
                    />
                  </div>
                  <button className="px-6 py-3 bg-[#A3B899] text-white rounded-xl font-medium hover:bg-[#8FA991] transition-colors">
                    保存更改
                  </button>
                </div>
              </div>
            )}

            {activeSection === 'appearance' && (
              <div>
                <h2 className="text-xl font-semibold text-[#3D3D3D] mb-6">外观设置</h2>
                
                <div className="space-y-6">
                  {/* Theme Toggle */}
                  <div className="flex items-center justify-between p-4 bg-[#F5F3F0] rounded-2xl">
                    <div className="flex items-center gap-4">
                      {darkMode ? <Moon size={22} className="text-[#8FA3BF]" /> : <Sun size={22} className="text-[#D4C5A5]" />}
                      <div>
                        <h3 className="font-medium text-[#3D3D3D]">深色模式</h3>
                        <p className="text-sm text-[#8A8A8A]">切换深色/浅色主题</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setDarkMode(!darkMode)}
                      className={`w-14 h-8 rounded-full transition-colors relative ${darkMode ? 'bg-[#8FA3BF]' : 'bg-[#E8E4DF]'}`}
                    >
                      <div className={`absolute top-1 w-6 h-6 rounded-full bg-white shadow transition-transform ${darkMode ? 'translate-x-7' : 'translate-x-1'}`} />
                    </button>
                  </div>

                  {/* Color Theme */}
                  <div>
                    <h3 className="font-medium text-[#3D3D3D] mb-3">主题颜色</h3>
                    <div className="flex gap-3">
                      {['#A3B899', '#8FA3BF', '#D4A5A5', '#D4C5A5', '#93B5A3'].map((color) => (
                        <button
                          key={color}
                          className="w-10 h-10 rounded-xl border-2 border-transparent hover:border-[#3D3D3D]/20 transition-all"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSection !== 'profile' && activeSection !== 'appearance' && (
              <div className="flex flex-col items-center justify-center h-64 text-center">
                <div className="w-16 h-16 rounded-2xl bg-[#F5F3F0] flex items-center justify-center mb-4">
                  {settingSections.find(s => s.id === activeSection)?.icon && 
                    React.createElement(settingSections.find(s => s.id === activeSection).icon, { 
                      size: 28, 
                      className: 'text-[#B5B5B5]' 
                    })
                  }
                </div>
                <h3 className="text-lg font-medium text-[#5D5D5D] mb-2">
                  {settingSections.find(s => s.id === activeSection)?.title}
                </h3>
                <p className="text-[#9A9A9A]">此功能正在开发中，敬请期待</p>
              </div>
            )}
          </motion.div>
        </div>
      </main>
    </div>
  );
}