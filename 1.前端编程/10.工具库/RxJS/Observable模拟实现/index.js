function createStream (produceFn) {
  return {
    subscribe (observer) {
      let done = false; // 标志位，流是否终止
      let cleanup;
      const safeObserver = {
        next (v) {
          if (!done) observer.next?.(v) // ?. 防止调用者没传next
        },
        error (e) {
          if (!done)
          {
            done = true
            observer.error?.(e)
            cleanup?.() // 出错需要触发清理
          }
        },
        complete () {
          if (!done)
          {
            done = true
            observer.complete?.()
            cleanup?.() // 结束需要触发清理
          }
        }
      }

      cleanup = produceFn(safeObserver);

      return {
        unsubscribe () {
          if (!done)
          {
            done = true
            cleanup?.() // 取消订阅需要触发清理
          }
        }
      }
    },

    pipe (...operators) {
      return operators.reduce((prev, op) => op(prev), this)
    }
  }
}

// const myStream = createStream(observer => {
//   console.log("立即执行")
//   observer.next('1')
//   observer.error(new Error('出错了'))
//   observer.next('2')
//   observer.complete()
//   observer.next('3')

// })

// // const p = new Promise(resolve => {
// //   console.log("立即执行")
// //   resolve('Hello Promise')
// // })

// myStream.subscribe({
//   next(value) {
//     console.log(value)
//   }
// })


// const ticker = createStream(observer => {
//   let count = 0
//   const id = setInterval(() => {
//     observer.next(count++)
//   }, 1000)

//   return () => {
//     clearInterval(id) // 返回清理函数，取消定时器
//     console.log("定时器已清理")
//   }
// })

// const sub = ticker.subscribe({
//   next(value) {
//     console.log(value)
//   }
// })

// setTimeout(() => {
//   sub.unsubscribe() // 5秒后取消订阅，停止输出
// }, 5000)


// ======================操作符处理=====================
function map (transformFn) {
  // 操作符函数，需要接受源Observable，返回新的Observable
  return (source) => createStream(observer => {
    // 订阅
    const sub = source.subscribe({
      next (value) {
        // 这里的核心，其实是对值做转换后再发给下游
        observer.next(transformFn(value)) // 转换后发送
      },
      error (e) {
        observer.error(e) // 错误直接传递
      },
      complete () {
        observer.complete() // 完成直接传递
      }
    })

    return () => sub.unsubscribe() // 返回清理函数，取消订阅
  })
}

function filter (predicateFn) {
  // 操作符函数，需要接受源Observable，返回新的Observable
  return (source) => createStream(observer => {
    // 订阅
    const sub = source.subscribe({
      next (value) {
        // 这里的核心，其实是对值做转换后再发给下游
        if (predicateFn(value)) observer.next(value)
      },
      error (e) {
        observer.error(e) // 错误直接传递
      },
      complete () {
        observer.complete() // 完成直接传递
      }
    })

    return () => sub.unsubscribe() // 返回清理函数，取消订阅
  })
}

function pipe (source, ...operators) {
  return operators.reduce((prev, op) => op(prev), source)
}

const source = createStream(observer => {
  [1, 2, 3, 4, 5].forEach(v => observer.next(v))
  observer.complete()
})

// const result = pipe(
//   source,
//   filter(x => x % 2 === 0), // 过滤偶数
//   map(x => x * 10) // 将偶数乘以10
// )

// result.subscribe({
//   next(value) {
//     console.log(value) // 输出20, 40
//   },
//   complete() {
//     console.log("完成")
//   }
// })

source.pipe(
  filter(x => x % 2 === 0), // 过滤偶数
  map(x => x * 10) // 将偶数乘以10
)
  .subscribe({
    next (value) {
      console.log(value) // 输出20, 40
    },
    complete () {
      console.log("完成")
    }
  })