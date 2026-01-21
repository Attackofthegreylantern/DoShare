import React from 'react';
import { BarChart, Bar, XAxis, ResponsiveContainer, Cell } from 'recharts';

const activityData = [
  { day: '周一', hours: 2.5 },
  { day: '周二', hours: 4 },
  { day: '周三', hours: 3 },
  { day: '周四', hours: 5 },
  { day: '周五', hours: 3.5 },
  { day: '周六', hours: 1.5 },
  { day: '周日', hours: 2 },
];

const colors = ['#D4A5A5', '#A3B899', '#8FA3BF', '#D4C5A5', '#93B5A3', '#BFA8A3', '#9FA3BF'];

export default function ActivityChart() {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-[28px] p-6 border border-[#E8E4DF]/80 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.04)]">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-semibold text-[#3D3D3D] text-base">学习活动</h3>
          <p className="text-sm text-[#9A9A9A] mt-0.5">本周学习进度</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-2xl font-semibold text-[#3D3D3D]">21.5</span>
          <span className="text-sm text-[#9A9A9A]">小时</span>
        </div>
      </div>
      
      <div className="h-32">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={activityData} barCategoryGap="25%">
            <XAxis 
              dataKey="day" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#9A9A9A', fontSize: 12 }}
              dy={8}
            />
            <Bar 
              dataKey="hours" 
              radius={[8, 8, 8, 8]}
            >
              {activityData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index]} fillOpacity={0.8} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}