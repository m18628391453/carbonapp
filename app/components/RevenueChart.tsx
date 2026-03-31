// components/RevenueChart.tsx
'use client';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';

export default function RevenueChart() {
  const option = {
    grid: { top: 30, right: 10, bottom: 20, left: 35 },
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'shadow' },
      backgroundColor: 'rgba(5, 13, 29, 0.9)',
      borderColor: '#1A2A4A',
      textStyle: { color: '#fff', fontSize: 12 }
    },
    xAxis: {
      type: 'category',
      data: ['光伏', '风电', '储能', '辅助服务'],
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { color: '#9CA3AF', fontSize: 10, margin: 12 }
    },
    yAxis: {
      type: 'value',
      max: 700,
      interval: 100,
      splitLine: {
        lineStyle: { color: 'rgba(75, 85, 99, 0.4)', type: 'dashed' }
      },
      axisLabel: { color: '#4B5563', fontSize: 10, fontFamily: 'monospace' }
    },
    series: [
      {
        data: [380, 550, 380, 550], // 这里接你后台的数据就好啦
        type: 'bar',
        barWidth: 14,
        showBackground: true,
        backgroundStyle: {
          color: '#0D1B35', // 深蓝色轨道背景
          borderRadius: 20
        },
        itemStyle: {
          borderRadius: 20,
          // 漂亮的翡翠绿渐变色
          color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
            { offset: 0, color: '#10B981' },
            { offset: 0.5, color: '#34D399' },
            { offset: 1, color: '#6EE7B7' }
          ])
        }
      }
    ]
  };

  return (
    <div className="bg-[#0A162C]/10 rounded-lg p-4 flex flex-col h-full w-full relative overflow-hidden">
      {/* 标题与筛选切换 */}
      <div className="flex items-center justify-between mb-2 shrink-0 relative py-1">
        {/* 标题背景渐变 (完美还原设计稿) */}
        <div className="absolute -left-1 top-[-4px] bottom-[-4px] w-1/2 bg-gradient-to-r from-[#173A6B]/60 to-transparent pointer-events-none"></div>
        <div className="absolute -left-1 top-[-4px] bottom-[-4px] w-1 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.1)]"></div>
        <h3 className="text-sm font-bold text-white ml-4 leading-none z-10">收益分析</h3>

        {/* 右侧筛选按钮 */}
        <div className="flex rounded-md p-0.5 relative z-10">
          <button className="px-2 py-0.5 text-[10px] rounded transition-all bg-cyan-600/30 text-cyan-400 border border-cyan-500/50 cursor-pointer">今日</button>
          <button className="px-2 py-0.5 text-[10px] rounded transition-all text-gray-500 hover:text-gray-300 cursor-pointer">昨日</button>
          <button className="px-2 py-0.5 text-[10px] rounded transition-all text-gray-500 hover:text-gray-300 cursor-pointer">本月</button>
          <button className="px-2 py-0.5 text-[10px] rounded transition-all text-gray-500 hover:text-gray-300 cursor-pointer">今年</button>
        </div>
      </div>

      {/* 确保父容器占满剩余空间并具有相对定位 */}
      <div className="flex-1 min-h-0 w-full relative -mt-3">
        <ReactECharts 
          option={option} 
          style={{ height: '100%', width: '100%' }} 
        />
      </div>
    </div>
  );
}