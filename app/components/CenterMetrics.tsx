// components/CenterMetrics.tsx
'use client';

export default function CenterMetrics() {
  const metrics = [
    { title: '今日用电量(kWh)', value: '38,642', change: '↑1.6%', vs: 'vs 昨日', valueColor: 'text-cyan-400', arrowColor: 'text-red-500' },
    { title: '综合电费_风平谷折算(元)', value: '26,814', change: '↓节约', vs: '¥3,280', valueColor: 'text-cyan-400', arrowColor: 'text-emerald-400' },
    { title: '光伏发电量(kWh)', value: '12,380', change: '↑1.6%', vs: 'vs 昨日', valueColor: 'text-cyan-400', arrowColor: 'text-red-500' },
    { title: '储能套利收益_今日(元)', value: '4,156', change: 'SOC 74%', vs: '· 充放21次', valueColor: 'text-cyan-400', arrowColor: 'text-gray-400' },
    { title: '碳排放强度_双碳(tCO₂/万元)', value: '0.382', change: '↓11.4%', vs: 'vs 目标', valueColor: 'text-cyan-400', arrowColor: 'text-emerald-400' },
    { title: '绿电消纳占比_GEC(%)', value: '32.1', change: '↑2.4%', vs: 'vs 上月', valueColor: 'text-cyan-400', arrowColor: 'text-red-500' },
  ];

  return (
    <div className="grid grid-cols-6 gap-2 w-full pt-2">
      {metrics.map((item, idx) => (
        <div key={idx} className="flex flex-col justify-center py-1">
          <p className="text-gray-400 text-[11px] mb-1 font-medium">{item.title}</p>
          <div className="mb-1">
            <span className={`text-[26px] font-bold font-mono tracking-wider leading-none ${item.valueColor}`} style={{ textShadow: '0 0 10px rgba(34,211,238,0.3)' }}>
              {item.value}
            </span>
          </div>
          <div className="flex items-center gap-1 text-[10px]">
            <span className={`font-semibold ${item.arrowColor}`}>{item.change}</span>
            <span className="text-gray-500">{item.vs}</span>
          </div>
        </div>
      ))}
    </div>
  );
}