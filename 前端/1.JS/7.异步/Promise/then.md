# then

## Promise.prototype.then()

  - `then` 方法的第一个参数是 `resolved` 状态的回调函数，第二个参数（可选）是 `rejected` 状态的回调函数

  - then方法必定会返回一个新的 Promise。可以理解为 后续处理也是一个任务

## 新任务的状态取决于后续处理

  - 若没有相关的后续处理，新任务的状态和前任务一致，数据为前任务的数据

    ```javascript
    /*
    * pro1 只处理了失败成功状态没有处理失败状态，所以
    * pro2 也是失败状态
    */
    const pro1 = new Promise((res, rej) => {
      console.log('学习');
      rej(); // 失败状态
    });

    // 只处理了成功状态，没有处理失败状态
    const pro2 = pro1.then((res) => {
      console.log('考试1');
    });
    setTimeout(() => {
      console.log(pro2); // 失败状态
    }, 16)
    ```

    ```javascript
    /*
    * pro1 只处理了失败成功状态没有处理失败状态，所以
    * pro2 也是失败状态
    */
    const pro1 = new Promise((res, rej) => {
      console.log('学习');
      res(); // 成功状态
    });

    // 只处理了失败状态，没有处理成功状态
    const pro2 = pro1.catch((res) => {
      console.log('考试1');
    });
    setTimeout(() => {
      console.log(pro2); // 成功状态
    }, 16)
    ```

  - 若后续处理但还未执行，新任务挂起

    ```javascript
    const pro1 = new Promise((res, rej) => {
      console.log('学习');
      setTimeout(() => {
        res(1);
      }, 100);
    });

    const pro2 = pro1.then((res) => {
      console.log('考试1');
    });

    setTimeout(() => {
      console.log(pro2); // pending 状态
    }, 16)
    ```

  - 若后续处理执行了，则根据后续处理的情况确定新任务的状态

      - 后续处理执行无错，新任务的状态为完成，数据为后续任务的返回值

      - 后续处理执行有错，新任务的状态为失败，数据为异常对象

      - 后续执行后返回的第一个任务对象，新任务的状态和数据与该任务对象一致

        ```typescript
        const pro1 = new Promise<number>((res, rej) => {
          console.log('学习');
          res(1);
        });

        // 返回的 Promise 的状态对应 pro2 的状态
        const pro2 = pro1.then((res) => {
          return new Promise<number>((res, rej) => {
            console.log('学习');
            res(1);
          });
        });

        setTimeout(() => {
          console.log(pro2);
        }, 16)
        ```
