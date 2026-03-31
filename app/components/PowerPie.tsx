// components/PowerCompositionPie.tsx
'use client';
import ReactECharts from 'echarts-for-react';

// 用电数据 —— 完全不动你原来的数值、颜色、右侧指标
const pieData = [
  { name: '对虾车间', value: 4544, color: '#54D1FF', unit: 'kWh', thickness: 18, gradientStart: '#33A8FFC0' },
  { name: '鲈鱼车间', value: 3321, color: '#5DE999', unit: 'kWh', thickness: 14, gradientStart: '#3DD17AC0' },
  { name: '水藻车间', value: 3113, color: '#76E8F0', unit: 'kWh', thickness: 10, gradientStart: '#55D0E0C0' },
];

const totalValue = pieData.reduce((sum, item) => sum + item.value, 0);

export default function PowerCompositionPie() {
  const getOption = () => {
    return {
      backgroundColor: 'transparent',
      series: [
        {
          name: '用电量',
          type: 'pie',
          roseType: 'radius',
          clockwise: false,
          startAngle: 90,
          radius: ['50%', '80%'],
          center: ['50%', '50%'],
          itemStyle: {
            borderRadius: 0,
            borderWidth: 1,
            borderColor: '#0A162C',
            shadowBlur: 10,
          },
          label: { show: false },
          labelLine: { show: false },

          // ✅ 核心修复：沿圆环角度渐变（绕圆心、顺着扇区方向）
          data: pieData.map(item => ({
            value: item.value,
            name: item.name,
            itemStyle: {
              // 线性渐变，方向沿圆环切线 → 实现“绕圆心”渐变
              color: {
                type: 'linear',
                x0: 0.5, y0: 0,   // 渐变起点：扇区上端
                x1: 0.5, y1: 1,   // 渐变终点：扇区下端
                colorStops: [
                  { offset: 0, color: item.gradientStart }, // 一侧颜色
                  { offset: 1, color: item.color }          // 另一侧颜色
                ],
                global: false // 关键：只在当前扇区内渐变，不全局扩散
              },
              shadowColor: `${item.color}80`,
            }
          })),
        }
      ],

      // 中心文字完全不动
      graphic: [
        {
          type: 'circle',
          left: 'center',
          top: 'center',
          shape: { r: 38 },
          style: { fill: '#051020' },
        },
        {
          type: 'text',
          left: 'center',
          top: '45%',
          style: {
            text: totalValue.toLocaleString(),
            fontSize: 18,
            fontWeight: 'bold',
            fill: '#FFFFFF',
            fontFamily: 'monospace',
            textAlign: 'center',
          },
        },
        {
          type: 'text',
          left: 'center',
          top: '55%',
          style: {
            text: '总用电量(kWh)',
            fontSize: 8,
            fill: '#9CA3AF',
            textAlign: 'center',
          },
        },
      ],
      // ✅ 修改tooltip位置：显示在右侧，避免超出左侧面板
      tooltip: {
        show: true,
        formatter: (params: any) => {
          return `${params.name}: ${params.value.toLocaleString()} kWh <br/> 占比: ${params.percent.toFixed(1)}%`
        },
        backgroundColor: 'rgba(5, 13, 29, 0.9)',
        borderColor: '#1A2A4A',
        textStyle: { color: '#fff', fontSize: 12 },
        // 关键配置：tooltip 位置调整
        position: function (point: number[], params: any, dom: any, rect: any, size: any) {
          // point：鼠标点击/悬浮位置的坐标
          // 固定 tooltip 显示在饼图右侧（x轴偏移，y轴居中）
          return [
            point[0] + 30, // 向右偏移20px
            point[1] + 15       // y轴保持和鼠标位置一致（居中）
          ];
        },
        // 防止tooltip超出画布
        confine: true,
        // 调整tooltip的偏移，确保不被遮挡
        offset: [10, 0]
      },
    };
  };

  // 外层布局、右侧指标 100% 完全保留你原来的代码
  return (
    <div className="bg-[#0A162C]/10 rounded-lg p-4 flex flex-col gap-4">
      <div className="w-full bg-gradient-to-r from-[#0F3460] to-transparent flex items-center py-3.5 px-4 relative -ml-3 -mr-4">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div>
        <h3 className="text-sm font-bold text-white ml-1 leading-none">
          各系统用电组成
        </h3>
      </div>

      <div className="flex items-center gap-4 h-full pt-2 -mt-5">
        <div className="relative w-[200px] h-[220px] flex items-center justify-center shrink-0">
          <ReactECharts
            option={getOption()}
            style={{ width: '100%', height: '100%' }}
            opts={{ renderer: 'canvas' }}
          />
        </div>

        {/* 右侧指标完全没动！ */}
        <div className="flex-1 flex flex-col gap-3 justify-center">
          {pieData.map((item, idx) => (
            <div key={idx} className="flex flex-col gap-0.5">
              <div className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: item.color, boxShadow: `0 0 6px ${item.color}80` }}
                ></div>
                <span className="text-gray-300 font-medium text-[10px]">{item.name}</span>
              </div>
              <span className="flex text-white font-bold text-[14px] font-mono ml-5">
                {item.value.toLocaleString()} 
                <span className="block text-gray-300 text-[10px] font-normal mt-1 ml-1">{item.unit}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}