# 提取 Word 文档

## Mammoth

+ Mammoth 是一个 JavaScript 库，专门用于将 `.docx` 格式的文件转换为 HTML 或其他格式
+ 它的目标是提供一个高质量的 Word 文档转换工具，特别适用于将 Word 文档内容转化为干净、结构化的 HTML，而不包含多余的样式和复杂的 HTML 标签
+ 与其他文档转换工具不同，Mammoth 强调简洁和可读性，帮助开发者轻松将 Word 文档的内容嵌入到网页中
+ 它特别适合处理简单的文本内容和基本的格式化

  ```js
  pnpm add mammoth
  ```

+ 用户通过文件上传控件选择一个 .docx 文件，触发 handleFileChange 方法来读取文件并将其转换为 arrayBuffer。然后，processDocxFile 函数使用 mammoth 库对文件进行处理，提取其中的文本和图片。

+ 在提取过程中，mammoth 通过 convertToHtml 方法将 DOCX 文件转换为 HTML，同时通过 convertImage 选项将图片提取为 Base64 编码的格式。提取的文本会经过去除重复内容的处理，最终显示在页面上。图片以 Base64 格式显示，用户可以查看提取的图像。

+ isLoading 状态用于显示文件正在处理中，error 状态用来捕获并显示错误信息。提取的文本和图片被存储在 text 和 images 状态变量中，并在界面上相应地展示

  ```js
  "use client";

  import React, { useState } from"react";
  import mammoth from"mammoth";

  const FileUpload = () => {
  const [images, setImages] = useState<string[]>([]); // 存储图片
  const [text, setText] = useState<string>(""); // 存储提取的文本
  const [error, setError] = useState<string | null>(null); // 存储错误信息
  const [isLoading, setIsLoading] = useState(false); // 加载状态

  // 处理文件上传
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;

      setIsLoading(true);
      setError(null);
      setImages([]);
      setText("");

      try {
        const arrayBuffer = await file.arrayBuffer();
        await processDocxFile(arrayBuffer);
      } catch (err) {
        setError(err instanceofError ? err.message : "Failed to read file");
      } finally {
        setIsLoading(false);
      }
    };

  // 使用 mammoth 提取文本和图片
  const processDocxFile = async (arrayBuffer: ArrayBuffer) => {
      try {
        const extractedImages: string[] = [];

        const options = {
          convertImage: mammoth.images.imgElement((image) => {
            return image.read("base64").then((imageBuffer) => {
              const imageType = image.contentType || "image/png";
              const base64Image = `data:${imageType};base64,${imageBuffer}`;
              extractedImages.push(base64Image);
              return {
                src: base64Image,
                alt: "Extracted image",
              };
            });
          }),
        };

        const result = await mammoth.convertToHtml({ arrayBuffer }, options);

        // 去除重复的文本
        const uniqueText = removeDuplicateText(result.value);
        setText(uniqueText);
        setImages(extractedImages);

        if (result.messages.length > 0) {
          console.log("Conversion messages:", result.messages);
        }
      } catch (err) {
        setError(err instanceofError ? err.message : "Failed to process file");
        console.error("Error processing DOCX:", err);
      }
    };

  // 去除文本中的重复内容
  const removeDuplicateText = (htmlText: string): string => {
      const cleanText = htmlText.replace(/<img[^>]*>/g, ""); // 移除 img 标签
      const paragraphs = cleanText.split("<p>").filter((p) => p.trim());
      const uniqueParagraphs = Array.from(new Set(paragraphs));
      return uniqueParagraphs.map((p) =>`<p>${p}`).join("\n");
    };

  return (
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Upload DOCX File</h1>
        <input
          type="file"
          accept=".docx"
          onChange={handleFileChange}
          className="mb-4 p-2 border rounded"
        />

        {isLoading && <p className="text-blue-500">Processing...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {/* 显示提取的文本 */}
        {text && (
          <div className="mt-4">
            <h3 className="text-xl font-semibold">Extracted Text:</h3>
            <div
              dangerouslySetInnerHTML={{ __html: text }}
              className="mt-2 p-4 border rounded"
            />
          </div>
        )}

        {/* 显示提取的图片 */}
        {images.length > 0 && (
          <div className="mt-4">
            <h3 className="text-xl font-semibold">Extracted Images:</h3>
            <div className="grid grid-cols-3 gap-4 mt-2">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Extracted Image ${index + 1}`}
                  className="max-w-full h-auto border rounded"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  export default FileUpload;
  ```
