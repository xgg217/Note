# splice

## 语法

  - `array.splice(start, deleteCount, item1, item2, ...)`

      - `start` ：指定修改的开始位置（从0计数）,如果超出了数组的长度，则从数组末尾开始添加内容

      - `deleteCount`（可选）:整数，表示要移除的数组元素的个数.如果 deleteCount 是 0，则不移除元素

      - `item1, item2, ...`（可选）

    ```js
    var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
    myFish.splice(2, 0, 'drum'); // 在索引为2的位置插入'drum'
    // myFish 变为 ["angel", "clown", "drum", "mandarin", "sturgeon"]

    myFish.splice(2, 1); // 从索引为2的位置删除一项（也就是'drum'这一项）
    // myFish 变为 ["angel", "clown", "mandarin", "sturgeon"]
    ```

  - splice方法用于删除原数组的一部分成员，并可以在被删除的位置添加入新的数组成员，返回值是被删除的元素。注意，该方法会改变原数组

  - splice的第一个参数是删除的起始位置，第二个参数是被删除的元素个数。如果后面还有更多的参数，则表示这些就是要被插入数组的新元素

## 注意

  - 改变原数组
