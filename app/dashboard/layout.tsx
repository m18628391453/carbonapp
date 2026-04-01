// app/dashboard/layout.tsx
import Header from '../components/Header';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // 外层容器负责背景图 + 全局文字颜色
    <div
      className="relative min-h-screen text-white font-sans"
      style={{
        backgroundImage: `url('/image/background.png')`,
        backgroundSize: 'cover',   // 覆盖整个区域，保持比例
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* 实际内容层，确保在背景之上 */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />

        <div className="flex flex-1 overflow-hidden">
          {/* 侧边栏占位（以后放开 hidden） */}
          {/* <aside className="w-64 bg-[#050D1D] border-r border-[#1A2A4A] p-4 hidden">...</aside> */}
          <main className="flex-1 h-[calc(100vh-56px)] overflow-hidden">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}