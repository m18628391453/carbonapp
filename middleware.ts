// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// 只让中间件处理根路径，其他路径不触发
export const config = {
  matcher: '/',
};

// 路径处理中间件
export function middleware(request: NextRequest) {
  // 获取当前请求的路径
  const { pathname } = request.nextUrl;
  // 如果访问根路径，就重定向到 dashboard/overview
  if (pathname === config.matcher) {
    return NextResponse.rewrite(new URL('/dashboard/overview', request.url));
  }
  // 其他路径正常访问
  return NextResponse.next();
}

