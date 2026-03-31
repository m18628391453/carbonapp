// components/Header.tsx
'use client';
import Image from 'next/image';
import { UserRound } from 'lucide-react';

export default function Header() {
    const navItems = [
        '首页', '能源管理', '储能管理', '负荷管理', '预测管理',
        '策略管理', '能碳管理', '电力交易', '基础设置', '管理设置'
    ];

    return (
        <header className="relative flex items-center justify-between h-16 px-6 bg-transparent text-white overflow-hidden">
            {/* 左侧：Logo区域 完全保留原有样式 */}
            <div className="flex items-center gap-10 mr-5 mt-1">
                <Image
                    src="/image/logo.png"
                    alt="综合能碳Logo"
                    width={200}
                    height={45}
                    className="object-contain shrink-0"
                    priority
                />
            </div>

            {/* 菜单+操作区整体容器：承载底部线条和左侧凸边，保证样式统一 */}
            <div className="relative flex items-center justify-between h-full flex-1 ml-25">
                {/* 底部贯穿下划线 从菜单最左一直延伸到页面最右，匹配设计稿 */}
                <div className="absolute bottom-3 -left-3 right-0 h-[1px] bg-gradient-to-r from-blue-500/20 via-blue-500/20 to-blue-500/15 z-0" />

                {/* 中间：导航菜单 修正了垂直对齐，保留原有选中效果和hover样式 */}
                <nav className="flex items-center h-full space-x-1 z-10 -mt-3">
                    {navItems.map((item, idx) => (
                        <div key={item} className="relative flex items-center h-4/5 m-auto cursor-pointer">
                            <a
                                href="#"
                                className={`px-5 text-[15px] font-black italic z-10 relative cursor-pointer font-['PingFang_SC','Microsoft_YaHei_UI',sans-serif] ${
                                    idx === 0
                                        ? 'text-cyan-400 '
                                        : 'text-gray-100 hover:text-cyan-300'
                                }`}
                            >
                                {item}
                            </a>
                            {/* 选中项背景微光效果 完全保留原有设计 */}
                            {idx === 0 && (
                                <div
                                    className="absolute inset-0 left-[-20%] w-7/5 h-full bg-gradient-to-r from-transparent via-cyan-900/50 to-transparent cursor-pointer"
                                />
                            )}
                        </div>
                    ))}
                </nav>

                {/* 右侧：操作区与个人信息 修正垂直对齐，保留原有所有按钮和交互 */}
                <div className="flex items-center gap-6 z-10 -mt-3">
                    {/* 搜索按钮 */}
                    <button className="text-gray-300 hover:text-gray-100 cursor-pointer">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                    {/* 全屏按钮 */}
                    <button className="text-gray-300 hover:text-gray-100 cursor-pointer">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                        </svg>
                    </button>
                    {/* 用户信息 */}
                    <div className="flex items-center gap-2 cursor-pointer group">
                        <div className="w-6 h-6 rounded-full overflow-hidden border border-blue-400 group-hover:border-blue-400 ">
                            <div className="w-full h-full bg-blue-400 flex items-center justify-center text-xs text-[#fefefe] font-bold">
                                <UserRound className="w-4 h-4" />
                            </div>
                        </div>
                        <span className="text-sm text-gray-200 group-hover:text-white ">
                            管理员
                        </span>
                    </div>
                    {/* 设置按钮 */}
                    <button className="text-gray-300 hover:text-gray-100 cursor-pointer">
                        <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
}