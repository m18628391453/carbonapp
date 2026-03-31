// app/dashboard/overview/page.tsx
import React from 'react';
import TopMetrics from '@/app/components/CenterMetrics';
import AssetPanel from '@/app/components/AssetPanel';
import PowerPie from '@/app/components/PowerPie';
import RevenueChart from '@/app/components/RevenueChart';
import ForecastChart from '@/app/components/ForecastChart';
import BalanceChart from '@/app/components/BalanceChart';

export default function OverviewPage() {
  return (
    <div className="flex w-full h-full p-4 gap-4 box-border overflow-hidden bg-transparent text-white font-sans">

      {/* 👈 左侧 */}
      <div className="min-w-[356px] max-w-[356px] flex flex-col h-full max-h-[100%] shrink-0">
        <div className="flex-9 min-h-0">
          <AssetPanel />
        </div>
        <div className="flex-5 min-h-0">
          <PowerPie />
        </div>
      </div>

      {/* 👇 中间 */}
      <div className="flex-1 flex flex-col gap-4 h-full min-w-[500px]">
        <TopMetrics />

        {/* 3D 厂房视图区域 */}
        <div className="flex-[2.5] min-h-0 relative flex items-center justify-center rounded-lg bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#112344] to-[#030A19] overflow-hidden">
          <div className="absolute w-full h-full pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-cyan-500/10 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* 能源供需平衡分析 */}
        <div className="flex-[1.5] min-h-0">
          <BalanceChart />
        </div>
      </div>

      {/* 👉 右侧 */}
      <div className="min-w-[360px] max-w-[360px] flex flex-col h-full shrink-0">
        {/* 系统运行模式 */}
        <div className="bg-[#0A162C]/10 rounded-lg h-[90px] px-4 justify-between shrink-0 relative overflow-hidden">
          <div className="w-full bg-gradient-to-r from-[#0F3460] to-transparent flex py-3.5 px-4 relative -ml-1 -mr-4">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.1)]"></div>
            <h3 className="text-sm font-bold text-white ml-1 leading-none">
              系统运行模式
            </h3>
          </div>
          <div className="w-full text-center mt-4 z-100">
            <span className="px-3 py-1 bg-emerald-900/40 text-emerald-400 border border-emerald-500/10 rounded-full text-[13px] font-bold">自动模式</span>
          </div>
        </div>

        {/* 统一为 flex-1，并加上 min-h-0 防止撑破高度 */}
        <div className="flex-10 min-h-0">
          <RevenueChart />
        </div>

        <div className="flex-11 min-h-0 -mt-2">
          <ForecastChart title="发电预测" />
        </div>

        <div className="flex-11 min-h-0 -mt-2">
          <ForecastChart title="负荷预测" />
        </div>
      </div>

    </div>
  );
}