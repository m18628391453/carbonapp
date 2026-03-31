// components/ForecastChart.tsx
'use client';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';

interface ForecastProps {
  title: string;
}

export default function ForecastChart({ title }: ForecastProps) {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'shadow' },
      backgroundColor: 'rgba(5, 13, 29, 0.9)',
      borderColor: '#1A2A4A',
      textStyle: { color: '#fff', fontSize: 12 }
    },
    legend: {
      data: ['中期', '短期', '中短期', '超短期', '实际'],
      itemWidth: 12,
      itemHeight: 6,
      textStyle: { color: '#9CA3AF', fontSize: 10 },
      top: 0,
      right: 10,
      itemGap: 12
    },
    grid: { top: 35, right: 10, bottom: 20, left: 30 },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '21:00', '24:00'],
      axisLine: { lineStyle: { color: '#1F2937' } },
      axisTick: { show: false },
      axisLabel: { color: '#4B5563', fontSize: 10, fontFamily: 'monospace' }
    },
    yAxis: {
      type: 'value',
      max: 35,
      interval: 5,
      splitLine: { show: false },
      axisLabel: { color: '#4B5563', fontSize: 10, fontFamily: 'monospace' }
    },
    series: [
      {
        name: '中期',
        type: 'line',
        color: '#00D0FF', // 👈 换成明亮的青蓝色
        smooth: true,
        showSymbol: false,
        symbol: 'emptyCircle',
        symbolSize: 6,
        data: [20, 15, 22, 18, 25, 12, 10, 20],
        lineStyle: { color: '#00D0FF', width: 1.5 },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'rgba(0, 208, 255, 0.3)' },
            { offset: 1, color: 'rgba(0, 208, 255, 0)' }
          ])
        }
      },
      {
        name: '短期',
        type: 'line',
        color: '#1DFF8B', // 👈 换成这种嫩绿，更符合设计稿
        smooth: true,
        showSymbol: false,
        symbol: 'emptyCircle',
        symbolSize: 6,
        data: [22, 18, 15, 20, 28, 15, 8, 15],
        lineStyle: { color: '#1DFF8B', width: 1.5 },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'rgba(29, 255, 139, 0.3)' },
            { offset: 1, color: 'rgba(29, 255, 139, 0)' }
          ])
        }
      },
      {
        name: '中短期',
        type: 'line',
        color: '#FFB800', // 👈 设计稿里这个是明黄色的，咱们换上
        smooth: true,
        showSymbol: false,
        symbol: 'emptyCircle',
        symbolSize: 6,
        data: [18, 20, 12, 15, 22, 20, 15, 18],
        lineStyle: { color: '#FFB800', width: 1.5 },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'rgba(255, 184, 0, 0.25)' },
            { offset: 1, color: 'rgba(255, 184, 0, 0)' }
          ])
        }
      },
      {
        name: '超短期',
        type: 'line',
        color: '#FF4D00', // 👈 换成鲜亮的橙红色
        smooth: true,
        showSymbol: false,
        symbol: 'emptyCircle',
        symbolSize: 6,
        data: [25, 22, 18, 25, 20, 18, 12, 10],
        lineStyle: { color: '#FF4D00', width: 1.5 },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'rgba(255, 77, 0, 0.25)' },
            { offset: 1, color: 'rgba(255, 77, 0, 0)' }
          ])
        }
      },
      {
        name: '实际',
        type: 'line',
        color: '#00FFFF', // 👈 实际值用最亮的纯青色，带发光效果
        smooth: true,
        showSymbol: false,
        symbol: 'emptyCircle',
        symbolSize: 6,
        data: [15, 10, 20, 12, 30, 32, 25, 15],
        lineStyle: {
          color: '#00FFFF',
          width: 1.5, // 实际线稍微加粗一点点，更有对比度
          shadowColor: 'rgba(0, 255, 255, 0.6)', // 发光阴影
          shadowBlur: 10
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'rgba(0, 255, 255, 0.3)' },
            { offset: 1, color: 'rgba(0, 255, 255, 0)' }
          ])
        }
      }
    ]
  };

  return (
    <div className="bg-[#0A162C]/10 rounded-lg p-4 flex flex-col h-full w-full">
      {/* 标题 */}
      <div className="w-full bg-gradient-to-r from-[#0F3460] to-transparent flex items-center py-3.5 px-4 relative -ml-1 -mr-4 mb-2">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.1)]"></div>
        <h3 className="text-sm font-bold text-white ml-1 leading-none">
          {title}
        </h3>
      </div>
      <div className="flex-1 min-h-0 w-full relative">
        <ReactECharts
          option={option}
          style={{ height: '100%', width: '100%' }}
        />
      </div>
    </div>
  );
}