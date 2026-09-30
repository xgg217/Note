import {defineConfig} from 'vitest/config'

export default defineConfig({
  test: {
    // vitest 启用全局模式，自动的将全局测试方法作为全局变量可用
    globals: true,

    // 配置测试文件的运行环境
    environment: "node"
  },
})