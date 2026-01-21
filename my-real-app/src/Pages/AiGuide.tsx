import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Send, Bot, User, Lightbulb, Database, BookOpen, TrendingUp } from 'lucide-react';
import Sidebar from '@/components/Sidebar';

const suggestions = [
  { icon: Database, text: '帮我找一个关于气候变化的数据集', color: '#A3B899' },
  { icon: BookOpen, text: '推荐适合入门的数据分析课程', color: '#8FA3BF' },
  { icon: TrendingUp, text: '如何分析时间序列数据？', color: '#D4A5A5' },
  { icon: Lightbulb, text: '解释机器学习中的过拟合问题', color: '#D4C5A5' },
];

const sampleChat = [
  { role: 'assistant', content: '您好！我是 DoShare 的 AI 助手，可以帮您发现数据集、推荐课程、解答数据分析问题。请问有什么可以帮您的？' },
];

export default function AIGuide() {
  const [messages, setMessages] = useState(sampleChat);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;
    
    setMessages(prev => [...prev, { role: 'user', content: input }]);
    setInput('');
    setIsTyping(true);
    
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: '感谢您的提问！我正在为您查找相关信息...\n\n根据您的需求，我建议您可以查看我们平台上的相关数据集和课程。您可以在"数据集"页面使用筛选功能找到合适的数据，或者在"课程"页面学习相关的分析方法。\n\n还有其他问题吗？' 
      }]);
      setIsTyping(false);
    }, 1500);
  };

  const handleSuggestion = (text) => {
    setInput(text);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAFAF8] via-[#F8F6F3] to-[#F5F3F0]">
      <Sidebar activePage="AI 助手" />
      
      <main className="ml-20 min-h-screen p-8 flex flex-col">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#A3B899] to-[#8FA3BF] flex items-center justify-center shadow-lg">
              <Sparkles className="text-white" size={24} />
            </div>
            <div>
              <h1 className="font-serif text-3xl font-medium text-[#3D3D3D]">
                AI 数据助手
              </h1>
              <p className="text-[#8A8A8A]">智能问答，帮您解决数据相关问题</p>
            </div>
          </div>
        </motion.div>

        {/* Chat Container */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex-1 bg-white/80 backdrop-blur-sm rounded-[28px] border border-[#E8E4DF]/80 flex flex-col overflow-hidden"
        >
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {messages.map((msg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
              >
                <div className={`
                  w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0
                  ${msg.role === 'user' 
                    ? 'bg-[#3D3D3D] text-white' 
                    : 'bg-gradient-to-br from-[#A3B899] to-[#8FA3BF] text-white'
                  }
                `}>
                  {msg.role === 'user' ? <User size={18} /> : <Bot size={18} />}
                </div>
                <div className={`
                  max-w-[70%] p-4 rounded-2xl
                  ${msg.role === 'user' 
                    ? 'bg-[#3D3D3D] text-white rounded-tr-md' 
                    : 'bg-[#F5F3F0] text-[#3D3D3D] rounded-tl-md'
                  }
                `}>
                  <p className="whitespace-pre-wrap leading-relaxed">{msg.content}</p>
                </div>
              </motion.div>
            ))}
            
            {isTyping && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#A3B899] to-[#8FA3BF] flex items-center justify-center text-white">
                  <Bot size={18} />
                </div>
                <div className="bg-[#F5F3F0] p-4 rounded-2xl rounded-tl-md">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-[#9A9A9A] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 bg-[#9A9A9A] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 bg-[#9A9A9A] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Suggestions */}
          {messages.length <= 1 && (
            <div className="px-6 pb-4">
              <p className="text-sm text-[#8A8A8A] mb-3">您可以这样问我：</p>
              <div className="flex flex-wrap gap-2">
                {suggestions.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => handleSuggestion(s.text)}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#E8E4DF] hover:border-[#A3B899]/50 hover:bg-[#A3B899]/5 transition-all text-sm text-[#5D5D5D]"
                  >
                    <s.icon size={16} style={{ color: s.color }} />
                    {s.text}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-[#E8E4DF]/60">
            <div className="flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="输入您的问题..."
                className="flex-1 px-5 py-4 bg-[#F5F3F0] rounded-2xl text-[#3D3D3D] placeholder:text-[#B5B5B5] focus:outline-none focus:ring-2 focus:ring-[#A3B899]/30"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="px-6 py-4 bg-gradient-to-r from-[#A3B899] to-[#8FA3BF] text-white rounded-2xl hover:shadow-lg hover:shadow-[#A3B899]/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}