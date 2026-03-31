module.exports = {
  apps: [{
    name: "Nextalk",       // 你的应用名
    script: "npm",               // 启动脚本
    args: "start",               // 传给脚本的参数
    cwd: "/Users/mac/Workspace/工作代码/ChatApp/Nextalk", // 你的项目绝对路径
    instances: "max",            // 使用所有CPU核心（集群模式）
    exec_mode: "cluster",        // 集群模式，提升性能
    env: {
      NODE_ENV: "production",
      PORT: 3000,                // 你的Next.js应用端口
    },
  }]
}
