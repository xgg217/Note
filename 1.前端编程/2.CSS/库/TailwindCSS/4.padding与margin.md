# padding 与 margin

## padding

+ 向一侧添加 `pt-<number>` `pr-<number>` `pb-<number>` `pl-<number>`

  ```html
  <div class="pt-6 ...">pt-6</div>
  <div class="pr-4 ...">pr-4</div>
  <div class="pb-8 ...">pb-8</div>
  <div class="pl-2 ...">pl-2</div>
  ```

+ 左右添加

  ```html
  <div class="px-8 ...">px-8</div>
  ```

+ 上下添加

  ```html
  <div class="py-8 ...">py-8</div>
  ```

+ 自定义 `p-[<value>]` `px-[<value>]` `pb-[<value>]`

  ```js
  <div class="p-[5px] ..."></div>
  <div class="px-[5px] ..."></div>
  <div class="pb-[5px] ..."></div>
  ```

## margin

+ 向一侧添加 `mt-<number>` `mr-<number>` `mb-<number>` `ml-<number>`

  ```html
  <div class="mt-6 ...">mt-6</div>
  <div class="mr-4 ...">mr-4</div>
  <div class="mb-8 ...">mb-8</div>
  <div class="ml-2 ...">ml-2</div>
  ```

+ 左右添加

  ```html
  <div class="mx-8 ...">mx-8</div>
  ```

+ 上下添加

  ```html
  <div class="my-8 ...">my-8</div>
  ```

+ 负值

  ```js
  <div class="-mt-8 bg-sky-300 ...">-mt-8</div>
  ```

+ 自定义 `m-[<value>]` `mx-[<value>]` `mb-[<value>]`

  ```js
  <div class="m-[5px] ..."></div>
  <div class="mx-[5px] ..."></div>
  <div class="mb-[5px] ..."></div>
  ```
