# 提取 PDF 中的图片

## PDF.js

+ PDF.js 是一个开源的 JavaScript 库，用于在网页上直接显示和渲染 PDF 文件
+ 它将 PDF 文件解析为 HTML5 元素，使得浏览器可以无插件地加载和查看 PDF 文档
+ PDF.js 支持多种功能，如文本选择、搜索、页面导航等，提供了良好的浏览体验
+ 通过它，开发者可以轻松集成 PDF 查看功能到网站或应用中

+ 为了避免 PDF 解析过程阻塞主线程，PDF.js 使用 `Web Worker` ，因为 PDF 解析是一个 CPU 密集型的操作，涉及大量计算和内存处理

## 安装及使用

+ 步骤1 安装

  ```js
  pnpm add pdfjs-dist
  ```

+ 步骤2 设置路径

  + 安装完成之后，我们需要设置 WebWorker 的路径

  + 我们可以将 node_modules 中 `pdfjs-dist` 目录下的 `build` 目录下 `pdf.worker.mjs` 文件放到 `public/js` 目录下，但是要把 `mjs` 后缀改成 `js`

+ 步骤3 最后在项目中引入即可：

  ```js
  import * as pdfjsLib from "pdfjs-dist";

  pdfjsLib.GlobalWorkerOptions.workerSrc = "/js/pdf.worker.js";
  ```

## 步骤4 处理文件上传

+ 处理文件上传

+ 当用户选择文件时，将文件转化为 `ArrayBuffer` 然后再转为 `Uint8Array` 最终使用 `pdfjsLib.getDocument` 加载 PDF 文件并调用 `loadPDFFile`

  ```js
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const arrayBuffer = await file.arrayBuffer(); // 读取文件为 ArrayBuffer
      const typedarray = newUint8Array(arrayBuffer); // 转换为 Uint8Array
      const loadingTask = pdfjsLib.getDocument(typedarray); // 使用 pdf.js 加载文档
      await loadPDFFile(loadingTask); // 加载 PDF 文件
    } catch (err) {
      setError(err instanceofError ? err.message : "Failed to read file");
      console.error("File reading error:", err);
    }
  };
  ```

## 步骤5 加载 PDF 文件并提取图像和文本

+ loadPDFFile 函数加载 PDF 文件并提取所有页面的图像和文本
+ 通过 getPage 获取每一页，调用 extractImagesFromPage 和 extractTextFromPage 提取数据

  ```js
  const loadPDFFile = async (loadingTask: pdfjsLib.PDFDocumentLoadingTask) => {
    try {
      setIsLoading(true);
      setError(null);
      const pdf = await loadingTask.promise; // 获取 PDF 实例
      const numPages = pdf.numPages; // 获取 PDF 总页数
      const allImages: PDFImage[] = [];
      const allTexts: PDFText[] = [];

      // 循环加载每一页
      for (let pageNumber = 1; pageNumber <= numPages; pageNumber++) {
        const page = await pdf.getPage(pageNumber); // 获取单个页面

        // 提取图像
        const pageImages = await extractImagesFromPage(page, pageNumber);
        allImages.push(...pageImages);

        // 提取文本
        const pageTexts = await extractTextFromPage(page, pageNumber);
        allTexts.push(...pageTexts);
      }

      setImages(allImages); // 更新图像数据
      setTexts(allTexts); // 更新文本数据
    } catch (err) {
      setError(err instanceofError ? err.message : "Failed to process PDF");
      console.error("PDF processing error:", err);
    } finally {
      setIsLoading(false);
    }
  };
  ```

## 步骤6 提取图像

+ extractImagesFromPage 从页面的操作列表中提取图像对象，并将图像渲染到离屏 OffscreenCanvas 上，最后转换为 Blob 并生成 URL
+ 返回一个包含所有图像的数组

  ```js
  const extractImagesFromPage = async (
    page: pdfjsLib.PDFPageProxy,
    pageNumber: number
  ): Promise<PDFImage[]> => {
    const extractedImages: PDFImage[] = [];
    const ops = await page.getOperatorList(); // 获取页面的操作列表
    const imageNames = ops.fnArray.reduce<string[]>((acc, curr, i) => {
      if ([pdfjsLib.OPS.paintImageXObject, pdfjsLib.OPS.paintXObject].includes(curr)) {
        acc.push(ops.argsArray[i][0]); // 过滤出图像对象名称
      }
      return acc;
    }, []);

    // 提取图像
    for (const imageName of imageNames) {
      try {
        const image = awaitnewPromise<PDFImageObject>((resolve) =>
          page.objs.get(imageName, resolve) // 获取图像对象
        );
        if (!image || !image.bitmap) continue;

        const bmp = image.bitmap;
        const resizeScale = 1 / 4; // 缩放比例
        const width = Math.floor(bmp.width * resizeScale); // 计算缩放后的宽度
        const height = Math.floor(bmp.height * resizeScale); // 计算缩放后的高度

        const canvas = new OffscreenCanvas(width, height); // 创建离屏 canvas
        const ctx = canvas.getContext("bitmaprenderer");
        if (!ctx) continue;

        ctx.transferFromImageBitmap(bmp); // 将图片渲染到 canvas 上
        const blob = await canvas.convertToBlob(); // 转换为 Blob 对象
        const imgURL = URL.createObjectURL(blob); // 生成图像 URL

        extractedImages.push({
          url: imgURL,
          pageNumber,
        });
      } catch (err) {
        console.error(`Error processing image ${imageName}:`, err);
      }
    }

    return extractedImages;
  };
  ```

## 步骤7 提取文本

+ `extractTextFromPage` 使用 `getTextContent` 方法提取页面的文本内容，并将所有文本拼接成一个字符串，返回提取的文本

  ```js
  const extractTextFromPage = async (
    page: pdfjsLib.PDFPageProxy,
    pageNumber: number
  ): Promise<PDFText[]> => {
    const extractedTexts: PDFText[] = [];
    try {
      const textContent = (await page.getTextContent()) as TextContent; // 获取文本内容
      const text = textContent.items.map((item) => item.str).join(" "); // 拼接所有文本
      extractedTexts.push({
        text,
        pageNumber,
      });
    } catch (err) {
      console.error(`Error processing text on page ${pageNumber}:`, err);
    }
    return extractedTexts;
  };
  ```

## 完整代码

+ 完整代码

  ```jsx
  "use client";

  import { useState } from "react";
  import * as pdfjsLib from "pdfjs-dist";

  pdfjsLib.GlobalWorkerOptions.workerSrc = "/js/pdf.worker.js";

  interface PDFImage {
    url: string;
    pageNumber: number;
  }

  interface PDFText {
    text: string;
    pageNumber: number;
  }

  interface PDFImageObject {
    bitmap: ImageBitmap;
  }

  interface TextItem {
    str: string;
    dir: string;
    width: number;
    height: number;
    transform: number[];
    fontName: string;
  }

  interface TextStyle {
    fontFamily: string;
    ascent: number;
    descent: number;
    vertical: boolean;
  }

  interface TextContent {
    items: TextItem[];
    styles: Record<string, TextStyle>;
  }

  export default function Home() {
    const [images, setImages] = useState<PDFImage[]>([]);
    const [texts, setTexts] = useState<PDFText[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // 提取图像
    const extractImagesFromPage = async (
      page: pdfjsLib.PDFPageProxy,
      pageNumber: number
    ): Promise<PDFImage[]> => {
      const extractedImages: PDFImage[] = [];
      const ops = await page.getOperatorList();
      const imageNames = ops.fnArray.reduce<string[]>((acc, curr, i) => {
        if (
          [pdfjsLib.OPS.paintImageXObject, pdfjsLib.OPS.paintXObject].includes(
            curr
          )
        ) {
          acc.push(ops.argsArray[i][0]);
        }
        return acc;
      }, []);

      for (const imageName of imageNames) {
        try {
          const image = await new Promise<PDFImageObject>((resolve) =>
            page.objs.get(imageName, resolve)
          );
          if (!image || !image.bitmap) continue;

          const bmp = image.bitmap;
          const resizeScale = 1 / 4;
          const width = Math.floor(bmp.width * resizeScale);
          const height = Math.floor(bmp.height * resizeScale);

          const canvas = new OffscreenCanvas(width, height);
          const ctx = canvas.getContext("bitmaprenderer");

          if (!ctx) continue;

          ctx.transferFromImageBitmap(bmp);
          const blob = await canvas.convertToBlob();
          const imgURL = URL.createObjectURL(blob);

          extractedImages.push({
            url: imgURL,
            pageNumber,
          });
        } catch (err) {
          console.error(`Error processing image ${imageName}:`, err);
        }
      }

      return extractedImages;
    };

    // 提取文本
    const extractTextFromPage = async (
      page: pdfjsLib.PDFPageProxy,
      pageNumber: number
    ): Promise<PDFText[]> => {
      const extractedTexts: PDFText[] = [];
      try {
        const textContent = (await page.getTextContent()) as TextContent;
        const text = textContent.items.map((item) => item.str).join(" ");
        extractedTexts.push({
          text,
          pageNumber,
        });
      } catch (err) {
        console.error(`Error processing text on page ${pageNumber}:`, err);
      }
      return extractedTexts;
    };

    // 加载 PDF 文件
    const loadPDFFile = async (loadingTask: pdfjsLib.PDFDocumentLoadingTask) => {
      try {
        setIsLoading(true);
        setError(null);
        const pdf = await loadingTask.promise;
        const numPages = pdf.numPages;
        const allImages: PDFImage[] = [];
        const allTexts: PDFText[] = [];

        for (let pageNumber = 1; pageNumber <= numPages; pageNumber++) {
          const page = await pdf.getPage(pageNumber);

          // 提取图像
          const pageImages = await extractImagesFromPage(page, pageNumber);
          allImages.push(...pageImages);

          // 提取文本
          const pageTexts = await extractTextFromPage(page, pageNumber);
          allTexts.push(...pageTexts);
        }

        setImages(allImages);
        setTexts(allTexts); // 设置提取的文本
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to process PDF");
        console.error("PDF processing error:", err);
      } finally {
        setIsLoading(false);
      }
    };

    // 处理文件上传
    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;

      try {
        const arrayBuffer = await file.arrayBuffer();
        const typedarray = new Uint8Array(arrayBuffer);
        const loadingTask = pdfjsLib.getDocument(typedarray);
        await loadPDFFile(loadingTask);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to read file");
        console.error("File reading error:", err);
      }
    };

    const handleImageLoad = (imgURL: string) => {
      // Clean up object URL when image is loaded
      URL.revokeObjectURL(imgURL);
    };

    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">PDF 图像提取器</h1>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            选择 PDF 文件
            <input
              type="file"
              accept="application/pdf"
              onChange={handleFileChange}
              className="mt-1 block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-blue-50 file:text-blue-700
                hover:file:bg-blue-100"
            />
          </label>
        </div>

        {isLoading && (
          <div className="text-center py-4">
            <p className="text-blue-600">正在处理 PDF 文件，请稍候...</p>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
            <p className="text-red-700">{error}</p>
          </div>
        )}

        {!isLoading && images.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">提取的图像：</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {images.map((image, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <img
                    src={image.url}
                    alt={`Extracted Image ${index + 1} from page ${
                      image.pageNumber
                    }`}
                    className="max-w-full h-auto"
                    onLoad={() => handleImageLoad(image.url)}
                  />
                  <p className="text-sm text-gray-600 mt-2">
                    来自第 {image.pageNumber} 页
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {!isLoading && !error && images.length === 0 && (
          <p className="text-gray-600 text-center py-8">
            上传 PDF 文件以提取其中的图像
          </p>
        )}

        {/* 显示提取的文本 */}
        {!isLoading && texts.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">提取的文本：</h2>
            <div className="space-y-4">
              {texts.map((text, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <p className="text-sm text-gray-600">{text.text}</p>
                  <p className="text-sm text-gray-600 mt-2">
                    来自第 {text.pageNumber} 页
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {!isLoading && !error && texts.length === 0 && (
          <p className="text-gray-600 text-center py-8">
            上传 PDF 文件以提取其中的文本
          </p>
        )}
      </div>
    );
  }
  ```
