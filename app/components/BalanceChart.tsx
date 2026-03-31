// components/BalanceChart.tsx
'use client';
import ReactECharts from 'echarts-for-react';

const BalanceChart = () => {
  // 数据保持不变
  const xAxisData = ['8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'];
  const pvData = [1400, 900, 1200, 800, 1500, 950, 1250, 850, 550, 650, 1050, 1550];
  const gridData = [700, 600, 700, 500, 800, 600, 700, 500, 400, 500, 600, 850];
  const storageData = [600, 400, 500, 400, 600, 400, 500, 400, 350, 350, 450, 550];
  const loadData = [-2400, -1400, -2000, -1100, -2700, -1400, -2000, -1100, -600, -850, -1500, -2700];

  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'shadow' },
      backgroundColor: 'rgba(5, 13, 29, 0.95)',
      borderColor: '#1A2A4A',
      borderWidth: 1,
      extraCssText: 'min-width: 120px; white-space: nowrap; line-height: 1.8; padding: 8px 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.3);',
      position: (
        point: [number, number],
        params: any,
        dom: HTMLElement,
        rect: any,
        size: { viewSize: [number, number]; contentSize: [number, number] }
      ) => {
        const obj: { top: number; left?: number; right?: number } = { top: 10 };
        if (point[0] < size.viewSize[0] / 2) {
          obj.left = point[0] + 20;
        } else {
          obj.right = size.viewSize[0] - point[0] + 20;
        }
        return obj;
      },
      formatter: function (params: any) {
        let res = `<div style="font-weight: bold; margin-bottom: 4px; color: #fff;">${params[0].axisValue}</div>`;
        params.forEach((item: any) => {
          const color = item.color;
          const name = item.seriesName;
          const value = item.value;
          res += `<div style="display: flex; align-items: center; gap: 8px;">
                    <span style="display: inline-block; width: 8px; height: 8px; background: ${color}; border-radius: 2px;"></span>
                    <span style="color: #9CA3AF;">${name}：</span>
                    <span style="color: #fff; font-family: monospace;">${value}</span>
                  </div>`;
        });
        return res;
      },
      confine: true,
      transitionDuration: 0.2,
    },
    legend: {
      data: ['光伏', '市政', '储能充电', '负荷'],
      icon: 'rect',
      itemWidth: 12,
      itemHeight: 12,
      right: 0,
      top: 0,
      textStyle: { color: '#9CA3AF', fontSize: 11 },
      itemGap: 16
    },
    grid: {
      top: 40,
      right: 10,
      bottom: 25,
      left: 45
    },
    xAxis: {
      type: 'category',
      data: xAxisData,
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { color: '#9CA3AF', fontSize: 10, margin: 12, fontFamily: 'monospace' }
    },
    yAxis: {
      type: 'value',
      min: -3000,
      max: 3000,
      interval: 1000,
      splitLine: {
        lineStyle: { color: 'rgba(75, 85, 99, 0.3)', type: 'dashed' }
      },
      axisLabel: { color: '#9CA3AF', fontSize: 10, fontFamily: 'monospace' }
    },
    series: [
      {
        name: '光伏',
        type: 'bar',
        stack: 'Total',
        barWidth: 14,
        itemStyle: { color: '#3B82F6' },
        data: pvData
      },
      {
        name: '市政',
        type: 'bar',
        stack: 'Total',
        itemStyle: { color: '#38BDF8' },
        data: gridData
      },
      {
        name: '储能充电',
        type: 'bar',
        stack: 'Total',
        itemStyle: { color: '#BAE6FD' },
        data: storageData
      },
      {
        name: '负荷',
        type: 'bar',
        stack: 'Total',
        itemStyle: { color: '#34D399' },
        data: loadData
      }
    ]
  };

  return (
    <div className="bg-[#0A162C]/60 rounded-lg p-4 flex flex-col h-full w-full relative overflow-hidden z-10">

      {/* 顶部标题栏 & 控制区 */}
      <div className="flex items-center justify-between mb-2 shrink-0 relative py-1">
        <div className="absolute left-[-16px] top-[-4px] bottom-[-4px] w-1/2 bg-gradient-to-r from-[#173A6B]/60 to-transparent pointer-events-none"></div>
        <div className="absolute left-[-16px] top-[-4px] bottom-[-4px] w-1 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.1)]"></div>
        <h3 className="text-sm font-bold text-white ml-1.5 leading-none z-10">能源供需平衡分析</h3>

        <div className="flex rounded-md p-0.5 relative z-10">
          <button className="px-2 py-0.5 text-[10px] rounded transition-all bg-cyan-600/30 text-cyan-400 border border-cyan-500/50 cursor-pointer">今日</button>
          <button className="px-2 py-0.5 text-[10px] rounded transition-all text-gray-500 hover:text-gray-300 cursor-pointer">昨日</button>
          <button className="px-2 py-0.5 text-[10px] rounded transition-all text-gray-500 hover:text-gray-300 cursor-pointer">本月</button>
          <button className="px-2 py-0.5 text-[10px] rounded transition-all text-gray-500 hover:text-gray-300 cursor-pointer">今年</button>
        </div>
      </div>

      {/* 图表绘图区 */}
      <div className="flex-1 relative min-h-0 w-full mt-2">
        <ReactECharts
          option={option}
          style={{ height: '100%', width: '100%' }}
        />
      </div>

      {/* 底部进度控制条 */}
      <div className="h-10 shrink-0 flex items-end px-[45px] pb-1 w-full relative">
        <div className="relative w-full h-1.5 bg-[#1F2937]/50 rounded-full">
          <div className="absolute left-0 top-0 h-full w-[15%] bg-[#1A2A4A] rounded-full shadow-[inset_0_0_4px_black]"></div>
          
          <div className="absolute left-[15%] top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
            <div className="absolute -top-7 bg-[#0E7490] text-white text-[10px] px-1.5 py-0.5 rounded flex items-center gap-1 shadow-[0_0_8px_rgba(8,145,178,0.8)] whitespace-nowrap">
              7:50 <div className="w-1 h-1 rounded-full bg-white"></div>
            </div>
            <div className="w-3.5 h-3.5 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]"></div>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full flex justify-between px-2 opacity-20 pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="w-[1px] h-1.5 bg-white"></div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default BalanceChart;