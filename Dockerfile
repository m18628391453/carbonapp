# Dockerfile.local - 使用本地构建产物的超级优化版本
# 注意：在运行这个Dockerfile之前，先在本地执行 pnpm run build

# 阶段一：直接使用alpine作为基础镜像，只需要复制构建产物
FROM node:22-alpine AS builder
WORKDIR /app

# 只需要复制本地构建好的 .next 目录和必要文件
COPY .next/standalone ./
COPY .next/static ./.next/static
COPY public ./public
# 如果有其他静态资源也需要复制
# COPY assets ./assets

# 阶段二：运行阶段
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# 创建非root用户
RUN addgroup --system --gid 1001 nodegroup && \
    adduser --system --uid 1001 nextuser

# 从builder阶段复制构建产物
COPY --from=builder --chown=nextuser:nodegroup /app ./

USER nextuser
EXPOSE 3000
CMD ["node", "server.js"]