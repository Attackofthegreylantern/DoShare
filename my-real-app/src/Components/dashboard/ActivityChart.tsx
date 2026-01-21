import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';

const activityData = [
  { day: 'Mon', hours: 2.5, color: '#A8B5A0' },
  { day: 'Tue', hours: 3.2, color: '#D4A5A5' },
  { day: 'Wed', hours: 1.8, color: '#9BAEC8' },
  { day: 'Thu', hours: 4.1, color: '#A8B5A0' },
  { day: 'Fri', hours: 2.9, color: '#D4A5A5' },
  { day: 'Sat', hours: 1.2, color: '#9BAEC8' },
  { day: 'Sun', hours: 0.8, color: '#A8B5A0' },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white/90 backdrop-blur-md px-3 py-2 rounded-xl shadow-lg border border-white/60">
        <p className="text-sm text-[#4A4A4A] font-medium">{payload[0].value}h studied</p>
      </div>
    );
  }
  return null;
};

export default function ActivityChart() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="p-6 rounded-[32px] bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_rgba(168,181,160,0.12)]"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-serif text-lg text-[#4A4A4A]">Learning Activity</h3>
        <span className="text-xs px-3 py-1 rounded-full bg-[#A8B5A0]/20 text-[#6B7A63]">This Week</span>
      </div>
      
      <div className="h-[180px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={activityData} barCategoryGap="25%">
            <XAxis 
              dataKey="day" 
              axisLine={false} 
              tickLine={false}
              tick={{ fill: '#7A7A7A', fontSize: 12 }}
            />
            <YAxis hide />
            <Tooltip content={<CustomTooltip />} cursor={false} />
            <Bar 
              dataKey="hours" 
              radius={[8, 8, 8, 8]}
              fill="#A8B5A0"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-4 flex items-center justify-center gap-2">
        <div className="w-2 h-2 rounded-full bg-[#A8B5A0]" />
        <span className="text-xs text-[#7A7A7A]">16.5 hours total this week</span>
      </div>
    </motion.div>
  );
}