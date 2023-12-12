# article

## 定位

+ 有着自己完整的、独立的内容

+ `<article>`元素表示文档、页面、应用或网站中的独立结构，其意在成为可独立分配的或可复用的结构

+ 可以看成特殊的 `section` 元素

+ 但是比 `section` 更加强调独立性

+ 一个 `<article>` 元素通常有它自己的标题（一般放在`<header>`元素内），有时还有自己的脚注

## 使用场景

+ 论坛帖子

+ 杂志或新闻文章

+ 博客

+ 用户提交的评论

+ 交互式组件

+ 其他独立的内容项目

## 注意点

+ 当`<article>`元素嵌套使用时，则该元素代表与外层元素有关的文章。例如，代表博客评论的 `<article>` 元素可嵌套在代表博客文章的 `<article>` 元素中

+ `<article>` 元素的作者信息可通过 `<address>` 元素提供，但是不适用于嵌套的 `<article>` 元素

+ `<article>` 元素的发布日期和时间可通过 `<time>` 元素的 `pubdate` 属性表示

## 使用示例

+ 示例（博客）

    ```html
    <article>
      <header>
        <h1>苹果</h1>
        <p>发表日期：<time pubdate="pubdate"> 2010/10/09</time></p>
      </header>
      <p>........(“苹果”文章正文)</p>
      <footer>
        <p>
          <small>著作公司***所有。</small>
        </p>
      </footer>
    </article>
    ```

+ article 嵌套示例（博客）

    ```html
    <article class="film_review">
      <header>
        <h1>苹果</h1>
        <p>发表日期：<time pubdate="pubdate"> 2010/10/09</time></p>
      </header>
      <p>........(“苹果”文章正文)</p>
      <section class="user_reviews">
        <h2>评论</h2>
        <article class="user_review">
           <header>
            <h3>发表者：***</h1>
            <p>发表日期：<time pubdate="pubdate" dateime="2010-10-10T19:10-08:00">一个小时前</time></p>
          </header>
          <p>评论内容.....</p>
        </article>
        <article class="user_review">
           <header>
            <h3>发表者：***</h1>
            <p>发表日期：<time pubdate="pubdate" dateime="2010-10-10T19:10-08:00">一个小时前</time></p>
          </header>
          <p>评论内容.....</p>
        </article>
      </section>
    </article>
    ```

+ `article` 元素也可以用来表示插件，作用是使插件看起来好像内嵌在页面中一样

    ```html
    <article>
      <h1>标题</h1>
      <object>
        <param name="all" value="true">
        <embed src="#" width="600" height="395"></embed>
      </object>
    </article>
    ```

    ```html
    <div>
      <!-- section代表区，块-->
      <section>

        <!--不要直接在section上设置样式，里面嵌套div来设置样式-->
        <div style="">

          <!--section中必须包含一个标题-->
          <h1>国内新闻</h1>

          <!--article代表每篇文章，它里面包含标题，内容，他是完整的独立的，所以就用article-->
          <article></article>

            <!-- 文章的标题 -->
            <h2>白宫抗议白搭！这些不守中国规矩的外航全得整改</h2>

            <!--文章的内容-->
            <div>辅导辅导辅导辅导辅导发的发的发的发股份合格合格后</div>

            <!--文章的评论，文章的评论区域又相当于一个区，块所以用section-->
            <section>

              <!--不要直接在section上设置样式，里面嵌套div来设置样式-->
              <div style="">

                <!--每条评论都有标题，内容，他是完整的独立的，所以就又用article-->
                <article>
                  <h3>留言人：张三</h3>
                  <div>留言的内容</div>
                </article>
              </div>
            </section>
            <footer></footer>
          </article>
        </div>
      </section>
    </div>
    ```
