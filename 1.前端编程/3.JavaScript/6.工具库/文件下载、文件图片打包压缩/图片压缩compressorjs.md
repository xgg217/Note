# Compressor.js图片压缩

## 概述

+ Compressor.js 是一个基于 JavaScript 的轻量级图片压缩库（仅4KB），无需后端支持即可在浏览器端实现高质量的图片压缩
+ 它通过Canvas实现图片处理，支持调整压缩质量、尺寸缩放、格式转换等核心功能

核心优势：

  + 零依赖，纯客户端处理
  + 支持主流图片格式（JPEG/PNG/WEBP）
  + 保留EXIF方向信息
  + 提供丰富的配置选项
  + 兼容现代浏览器（包括移动端）

## 使用场景

+ 上传图片前的客户端预处理
+ 移动端H5应用的图片优化
+ 节省服务器带宽和存储空间
+ 提升用户上传体验

## 注意事项

+ 格式转换限制：Safari 14以下不支持WEBP格式

+ 质量设置建议：

  + JPEG推荐0.6-0.8
  + PNG推荐保持1.0（无损）

+ 性能优化：大文件（>5MB）建议先分片读取

+ 兼容性处理：对于旧版浏览器需要polyfill：

  ```js
  // 添加Promise polyfill
  if (typeof Promise === 'undefined') {
    script.async = false;
    document.write('<script src="https://cdn.jsdelivr.net/npm/es6-promise@4.2.8/dist/es6-promise.auto.min.js"><\/script>');
  }
  ```

## 安装

+ 安装

  ```bash
  npm install compressorjs
  ```

  ```html
  <script src="https://cdn.jsdelivr.net/npm/compressorjs@1.2.1/dist/compressor.min.js"></script>
  ```

## 基础使用

+ code

  ```js
  // 获取文件对象（例如通过input[type=file]）
  const file = document.querySelector('input[type=file]').files[0];

  // 初始化压缩器
  new Compressor(file, {
  quality: 0.8, // 压缩质量（0-1）
  maxWidth: 1920, // 最大宽度
  maxHeight: 1080, // 最大高度
    success(result) {
      // 压缩成功回调
      const formData = new FormData();
      formData.append('file', result, result.name);

      // 上传到服务器示例
      fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
    },
    error(err) {
      console.error('压缩失败:', err);
    },
  });
  ```

## 进阶配置说明

+ 进阶配置说明

  ```js
  new Compressor(file, {
  // 压缩质量配置
  quality: 0.6,

  // 尺寸限制
  width: 800,      // 固定宽度
  height: 600,     // 固定高度
  resize: 'cover', // 缩放模式（cover/contain等）

  // 格式转换
  convertSize: 102400, // 超过100KB自动转成JPEG
  mimeType: 'auto',    // 自动检测最佳格式

  // 高级处理
  strict: true,      // 严格模式（精确尺寸）
  orient: true,      // 保持EXIF方向信息
  checkOrientation: true, // 检查EXIF方向

  // 钩子函数
    beforeDraw(ctx, canvas) {
      // 压缩前可对Canvas进行额外处理
      ctx.filter = 'grayscale(100%)';
    },

    drew(ctx, canvas) {
      // 压缩后可进行后处理
      const watermark = document.createElement('img');
      watermark.onload = () => {
        ctx.drawImage(watermark, 10, 10, 100, 50);
      };
      watermark.src = '/watermark.png';
    },
  });
  ```

## 示例

+ 示例

  ```html
  <!DOCTYPE html>
  <input type="file" accept="image/*" id="uploader">
  <div id="preview"></div>

  <script src="https://cdn.jsdelivr.net/npm/compressorjs@1.2.1/dist/compressor.min.js"></script>
  <script>
  document.getElementById('uploader').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;

    new Compressor(file, {
      quality: 0.7,
      maxWidth: 1024,
      convertSize: 500000, // 超过500KB转成WEBP
      success(result) {
        // 显示压缩前后对比
        const preview = document.getElementById('preview');

        // 原始文件预览
        const origin = new Image();
        origin.src = URL.createObjectURL(file);
        origin.style = 'width: 300px; border: 2px solid red;';

        // 压缩后预览
        const compressed = new Image();
        compressed.src = URL.createObjectURL(result);
        compressed.style = 'width: 300px; border: 2px solid green;';

        // 显示文件信息
        const info = document.createElement('div');
        info.innerHTML = `
          原始大小：${(file.size/1024).toFixed(2)}KB
          压缩后：${(result.size/1024).toFixed(2)}KB
          压缩率：${(100 - (result.size/file.size*100)).toFixed(1)}%
        `;

        preview.append(origin, compressed, info);
      },
      error(err) {
        alert(`压缩失败: ${err.message}`);
      }
    });
  });
  </script>
  ```

