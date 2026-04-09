# Cursor vs Github Copilot

>原文连接：https://www.builder.io/blog/cursor-vs-github-copilot
>
>翻译：谢杰
>
>审校：谢杰

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2025-05-19-015715.png" alt="image-20250519095715496" style="zoom:50%;" />

让我们聊聊 AI 编码助手。它们已经成为开发工具领域的新宠，这并不令人意外。AI 编码助手的目标是帮助开发者更高效地编写代码，减少错误，确实相当酷炫。

目前这个领域的竞争者不少，但我们今天聚焦于两个主要选手。一边是老牌选手 GitHub Copilot，另一边是新晋挑战者 Cursor，它正在搅动这片水域。这两者的共同目标，都是让开发者的工作变得更加轻松。

在使用了一段时间的 Copilot 和 Cursor 之后，我觉得有必要把它们进行一下对比分析。无论你是正打算试用其中之一，还是只是想搞清楚它们到底有什么特别，不妨继续往下看。我们将深入探讨一些对开发者来说真正重要的核心功能。

## Cursor AI

[Cursor](https://www.cursor.com/) 本质上是一款“打了激素”的 AI 驱动代码编辑器。它是基于 [Visual Studio Code](https://code.visualstudio.com/) 的一个分支，在熟悉的界面上引入了更强大的 AI 能力。

## **GitHub Copilot**

[GitHub Copilot](https://github.com/features/copilot) 是一款 AI 编码助手，旨在帮助你更高效地编写代码，减少重复劳动，让你可以将更多精力投入到问题解决和团队协作上。

它由 GitHub 与 OpenAI 联合开发，通过机器学习技术在你的代码编辑器中（支持 Visual Studio Code、Visual Studio、Vim/Neovim、JetBrains 系列 IDE）生成代码建议并完成各类任务。

Cursor AI 和 GitHub Copilot 都提供了一系列旨在提升开发效率、支持开发者工作的功能。接下来我们将深入了解这些具体功能，看看这两者究竟有何不同。



## Tab自动补全

你知道那种打字时 IDE 恰好“读懂”你想做什么的感觉吗？我们说的就是这种体验。



**Cursor**

Cursor 的 Tab 补全功能相当惊艳。它不仅能补全多行代码，还会基于整个项目上下文来生成建议。对于 TypeScript 和 Python 文件来说，当 Tab 补全涉及未导入的符号时，Cursor 会自动将对应的 import 加到当前文件中。除此之外，它甚至还会尝试预测你接下来可能编辑的位置。

<video autoplay="autoplay" loop="" preload="metadata" class="builder-video css-cz4v3a" muted="muted" playsinline="playsinline"><source type="video/mp4" src="https://cdn.builder.io/o/assets%2FYJIGb4i01jvw0SRdL5Bt%2F76740aa064914e0abc659948bb1f2bc0%2Fcompressed?apiKey=YJIGb4i01jvw0SRdL5Bt&amp;token=76740aa064914e0abc659948bb1f2bc0&amp;alt=media&amp;optimized=true"></video>



**Copilot**

Copilot 更专注于内联补全。按下 Tab 即可接受建议，继续编码，效率飞快。它通常会根据开发者的编码风格预测下一行逻辑代码，从而显著加快编码流程。需要更多选择？可以使用 Alt+] 或 Alt+[ 切换不同的建议，或者按 Ctrl+Enter 在新标签页中查看多个替代方案。



## 代码生成

精彩的部分来了。想象一下，你只需描述代码要实现的功能，接着——代码就自动生成了。



**Cursor**

Cursor 有一个叫 Composer 的功能，可以根据你的描述生成完整的应用程序。生成代码时它会参考整个项目上下文，因此会尽量贴合你的代码风格。你可以使用 ⌘ + I 打开 Composer，使用 ⌘ + N 创建新的 Composer。

对于内联生成、样板代码以及代码编辑操作，可以使用 ⌘ + K 功能。更厉害的是，它能够在同一个项目中处理多种编程语言，并根据语言自动调整生成的建议。

<video autoplay="autoplay" loop="" preload="metadata" class="builder-video css-cz4v3a" muted="muted" playsinline="playsinline"><source type="video/mp4" src="https://cdn.builder.io/o/assets%2FYJIGb4i01jvw0SRdL5Bt%2Fd92d67af14a04eca9e8557c929e66171%2Fcompressed?apiKey=YJIGb4i01jvw0SRdL5Bt&amp;token=d92d67af14a04eca9e8557c929e66171&amp;alt=media&amp;optimized=true"></video>



**Copilot**

Copilot 更专注于内联建议，但如果你通过 Copilot Chat 提出请求，它也能处理较大块的代码。它的 CLI 工具同样支持自然语言描述生成代码，只需用英文说明你想要实现的功能即可。



## 聊天

有时候你只是想问个问题。但和 AI 聊天真的有用吗？



**Cursor**

Cursor 的聊天功能（⌘ + L）具备上下文感知能力，因此它知道你当前正在处理的内容。你还可以将文件夹拖拽到 Chat 中，提供更多上下文信息，并直接在对话中应用代码建议，这一点非常实用。它甚至支持图像输入，用于提供可视化上下文。

<video autoplay="autoplay" loop="" preload="metadata" class="builder-video css-cz4v3a" muted="muted" playsinline="playsinline"><source type="video/mp4" src="https://cdn.builder.io/o/assets%2FYJIGb4i01jvw0SRdL5Bt%2Ff8b0d453716849699344ceeceec2c18e%2Fcompressed?apiKey=YJIGb4i01jvw0SRdL5Bt&amp;token=f8b0d453716849699344ceeceec2c18e&amp;alt=media&amp;optimized=true"></video>



**Copilot**

GitHub Copilot Chat 也有类似的功能——你可以让它解释代码或提出改进建议。它集成在 VS Code 中，整体体验非常顺滑。最近还上线了一些新功能，比如更完善的聊天记录、拖拽文件夹添加上下文等。不过，如果你已经在使用 Cursor，这些功能可能不会让你感到特别惊喜。



## 终端

终端操作有时会让人头疼，尤其是处理复杂命令的时候。



**Cursor**

Cursor 通过 ⌘ + K 将其 AI 能力延伸到终端操作中，用来把模糊的想法转化为实际命令相当方便。不过，它会占用终端原本用于清屏的快捷键，这点确实有点烦人。

<video autoplay="autoplay" loop="" preload="metadata" class="builder-video css-cz4v3a" muted="muted" playsinline="playsinline"><source type="video/mp4" src="https://cdn.builder.io/o/assets%2FYJIGb4i01jvw0SRdL5Bt%2F5272c7d2c21c4f84a0dcb9dca6bc4c64%2Fcompressed?apiKey=YJIGb4i01jvw0SRdL5Bt&amp;token=5272c7d2c21c4f84a0dcb9dca6bc4c64&amp;alt=media&amp;optimized=true"></video>



**Copilot**

Copilot 提供了一个非常顺畅的终端集成功能，只需按下 ⌘ + I，输入你想做的事，它就会给出对应的命令。不再需要精通 bash——只要用自然语言描述你的意图，按下回车即可搞定。使用 ⌘ + Enter 执行建议命令的快捷方式也非常实用。



## 上下文感知能力

这是个关键点。这些工具到底能否真正理解整个项目，还是只能看到当前文件？



**Cursor**

Cursor 在这方面的表现相当出色。它会分析整个代码库和项目结构。你甚至可以使用 @ 符号来引用项目中的特定部分，比如 @Files、@Folders、@Code 等，非常灵活。

<video autoplay="autoplay" loop="" preload="metadata" class="builder-video css-cz4v3a" muted="muted" playsinline="playsinline"><source type="video/mp4" src="https://cdn.builder.io/o/assets%2FYJIGb4i01jvw0SRdL5Bt%2F8bfdd09bafec4773b902c44c7d989341%2Fcompressed?apiKey=YJIGb4i01jvw0SRdL5Bt&amp;token=8bfdd09bafec4773b902c44c7d989341&amp;alt=media&amp;optimized=true"></video>



**Coplilot**

Copilot 在上下文感知方面也表现得相当智能。它会分析你当前打开的文件，并根据 import、注释和函数名等线索推断你的意图。你可以使用 `#` 引用文件，或者通过 “Attach Context” 按钮手动选择希望 Copilot 参考的内容。

<video autoplay="autoplay" loop="" preload="metadata" class="builder-video css-cz4v3a" muted="muted" playsinline="playsinline"><source type="video/mp4" src="https://cdn.builder.io/o/assets%2FYJIGb4i01jvw0SRdL5Bt%2F7c1d5b7d80ae435fbe5e8e5299a23fad%2Fcompressed?apiKey=YJIGb4i01jvw0SRdL5Bt&amp;token=7c1d5b7d80ae435fbe5e8e5299a23fad&amp;alt=media&amp;optimized=true"></video>



## 多文件协同

支持跨多个文件协同工作，是让 AI 助手理解和修改复杂项目结构的关键能力。

**Cursor**
Cursor 的 Composer 功能可以对整个项目进行修改，这点非常强大。它能够理解不同文件和组件之间的关系，支持一次性生成整个应用所需的文件。我自己就曾用它将一个单一文件重构为更有组织的文件和文件夹结构。



**Copilot**
Copilot 最近新增了 Edits 功能，也非常值得一试。你只需定义一组工作文件，用自然语言描述想要实现的修改，Copilot 就能在多个文件中自动应用变更。你可以逐条审查这些修改，选择合适的方案并不断迭代，直到结果满意为止。

在我们的测试中，这项功能表现不太稳定，有时速度较慢，甚至会卡在无限加载状态，或者对错误的文件进行了更改。

💡 小贴士：建议手动指定要修改的文件，而不是依赖自动识别——虽然多花一点工夫，但结果会更可靠。



## **AI agent**
这里说的是那种可以接管你编辑器的 AI 助手——执行命令、管理文件、处理整个项目范围内的任务。



**Cursor**
 在 Composer 中按下 ⌘.，你就能调用 Cursor Agent，这是一位功能强大的 AI 助手。它会自动获取上下文信息，执行终端命令、操作文件，甚至支持语义代码搜索。需要注意的是，它目前仅支持 Claude 模型，且每次操作都会计入配额。但如果你需要快速完成任务，这确实是个效率神器。

<video autoplay="autoplay" loop="" preload="metadata" class="builder-video css-cz4v3a" muted="muted" playsinline="playsinline"><source type="video/mp4" src="https://cdn.builder.io/o/assets%2FYJIGb4i01jvw0SRdL5Bt%2F0dc168adfc8d40699d1478a4fb250e95%2Fcompressed?apiKey=YJIGb4i01jvw0SRdL5Bt&amp;token=0dc168adfc8d40699d1478a4fb250e95&amp;alt=media&amp;optimized=true"></video>



**Copilot**

Copilot 目前还没有类似的功能。虽然 Copilot Chat 能处理一些类似的任务，但它在项目级集成和自动化操作方面，还达不到 Cursor Agent 那样的能力水平。



## **将 Figma 设计稿转换为代码**
 这里讨论的是与其他 AI 工具（如 [Visual Copilot](https://www.figma.com/community/plugin/747985167520967365/builder-io-ai-powered-figma-to-code-react-vue-tailwind-more)）的兼容性。



**Cursor**
 要将 Figma 设计稿转换为代码，只需启动对应的 Figma 插件，选择你想要转换的元素或画板，点击 “Export to Code”。然后复制生成的命令，粘贴到 Cursor 的终端中。接下来，你可以让 Cursor 添加交互、动画、事件处理函数等增强功能。它会根据你的需求生成所需的全部代码。

<video autoplay="autoplay" loop="" preload="metadata" class="builder-video css-cz4v3a" muted="muted" playsinline="playsinline"><source type="video/mp4" src="https://cdn.builder.io/o/assets%2FYJIGb4i01jvw0SRdL5Bt%2F4cdbce0d4265479f84aa9d85a163e8b8%2Fcompressed?apiKey=YJIGb4i01jvw0SRdL5Bt&amp;token=4cdbce0d4265479f84aa9d85a163e8b8&amp;alt=media&amp;optimized=true"></video>



**Copilot**
 配合 VS Code，Copilot 同样支持从设计到代码的转换。你只需在终端中粘贴生成的命令，然后用自然语言指示 Copilot 按照你的需求优化生成的代码。



## 代码评审
有时候我们都需要“第二双眼睛”。AI 驱动的代码评审可以对代码质量、潜在的 bug，以及是否符合最佳实践提供自动化反馈。



**Cursor**
Cursor 新推出的 bug finder 功能相当实用。它会对比当前代码和 main 分支的差异，扫描潜在 bug 并进行评分。只需一键，即可在编辑器中自动修复问题。不过需要注意的是，这项功能是按次收费的——每次点击可能就要花费一美元或更多。

<video autoplay="autoplay" loop="" preload="metadata" class="builder-video css-cz4v3a" muted="muted" playsinline="playsinline"><source type="video/mp4" src="https://cdn.builder.io/o/assets%2FYJIGb4i01jvw0SRdL5Bt%2F7857571c386f4870ba400c809fd41a57%2Fcompressed?apiKey=YJIGb4i01jvw0SRdL5Bt&amp;token=7857571c386f4870ba400c809fd41a57&amp;alt=media&amp;optimized=true"></video>



**Copilot**
Copilot 最近上线了代码评审功能，体验相当不错（目前仍处于限量发布阶段）。你可以在 Source Control 面板中点击 Review 按钮，它会检查你已暂存或未暂存的改动，并在代码中直接内联提出建议。你可以一键应用喜欢的修改，跳过不需要的部分，整个流程非常简洁高效。



## 自定义能力
编码从来不是“一刀切”的事。这些工具是否能根据你的具体需求进行调整，还是只能接受默认设置？



**Cursor**
Cursor 支持通过设置项和 `.cursorrules` 文件配置自定义指令。你可以根据项目的具体需求对其行为进行调整和优化。



**Copilot**
Copilot 也支持自定义指令，通过 `.github/copilot-instructions.md` 文件实现，方式类似于 Cursor。这允许你指定编码偏好和项目规范，Copilot 在生成代码时会尽量遵循这些规则。



## AI 提交信息生成
来看一下这些工具在 git 提交方面的表现。



**Cursor**
AI 生成的提交信息看起来可能不算什么，但它确实能帮我每天节省几分钟时间，减轻思考提交说明的负担。不过，Cursor 的提交信息有时会显得……有点啰嗦。你可以通过在 `.cursorrules` 文件中添加相关指令来调整这一行为。



**Copilot**
Copilot 在这方面的默认体验不错。只需点击自动生成提交信息按钮即可开始。我发现它生成的信息相比 Cursor 更简洁、清晰，当然，在提交前快速检查一下依然是个好习惯。



## IDE 集成
没有人愿意在多个工具之间来回切换。



**Cursor**
Cursor 是一个独立的编辑器——它基于 VS Code 构建，所以如果你本来就习惯使用 VS Code，上手会非常自然。



**Copilot**
Copilot 则集成进了多个 IDE，包括 VS Code、IntelliJ、Neovim。同时，它的 CLI 工具可以在任意终端中使用，适用场景更加灵活。



## 模型支持

**Cursor**
Cursor 提供多种模型选项，包括 GPT-4o、o1、Claude 3.5 Sonnet，以及自研的 cursor-small 模型。你可以根据需求在速度和能力之间做出权衡选择。



**Copilot**
Copilot 也显著扩展了其模型支持范围。目前你可以在 Claude 3.5 Sonnet、o1、GPT-4o 等多个模型之间选择。这种灵活性让你可以根据任务类型进行优化——无论是快速补全代码，还是需要更复杂的推理和理解。



## 价格
说到底，还要看需要花多少钱。来看看两者的定价模型。



**Cursor**
Cursor 提供一个功能受限的免费 Hobby 套餐，Pro 套餐为每月 $20，Business 套餐为每位用户每月 $40。



**Copilot**
Copilot 目前也推出了一个免费套餐，包含每月约 12,000 次补全等基础功能。Pro 套餐起价为每月 $10，面向团队的 Business 套餐为每位用户每月 $19，Enterprise 套餐则为每位用户每月 $39。



## 总结：最终赢家
在深入体验了 Cursor 和 GitHub Copilot 之后，是时候揭晓谁更胜一筹了。请鼓声响起……最终胜出的是 **Cursor**。它的一系列独特功能，让它在 AI 编码助手领域遥遥领先。

当然，Copilot 依然是一款非常扎实的工具。它在快速补全、广泛 IDE 兼容性方面表现出色。但 Cursor 的整体表现，确实高出了一个维度。

**Cursor 胜出的原因如下：**

- **项目级智能能力强大**：Cursor 对整个代码库的理解和操作能力目前仍无对手。Copilot 虽然具备上下文感知，但在大型项目中容易变慢。
- **速度与稳定性更胜一筹**：在进行项目级操作时，Cursor 的 Composer 表现始终稳定、快速。相比之下，Copilot 的 Edits 虽然潜力十足，但经常会卡顿或反应迟缓。Cursor 则能稳稳完成任务。
- **Agent 模式更强大**：Cursor 拥有成熟的 Agent 模式，能准确理解你的意图并执行复杂操作。

当然，如果你更看重无缝集成、简单上手，Copilot 依然是个很好的选择。它的代码补全能力确实非常优秀。但如果你想真正体验 AI 编码的前沿能力，Cursor 才是更值得投入的方向。



## 我偏好的 AI 技术栈
 我的整体工作流大致如下：

- 编码时，我使用 Cursor 进行迭代式开发
- 设计团队在 Figma 中完成界面设计
- [Builder.io](https://www.builder.io/) 负责将设计稿转换为代码，并在需要时同步更新设计改动

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2025-05-19-024349.png" alt="image-20250519104348988" style="zoom:50%;" />

但这仅仅是我自己的个人偏好，仅做参考。

---

-EOF-
