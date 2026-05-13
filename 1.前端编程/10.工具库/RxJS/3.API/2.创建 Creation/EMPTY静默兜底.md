# EMPTY 静默兜底

## API

## 示例

+ 示例

  ```js
  .pip(
    catchError(() => {
      return EMPTY
    })
  ).subscribe({
    next: () => {

    }
    error(err) {

    }
  })
  ```
