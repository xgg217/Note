# a.kind

## 定义

  + 定义

    ```ts
    type Rect = {
      hegiht: number
      width: number
      kind: 'Rect'
    }

    type Circle = {
      center: [number, number]
      radius: number
      kind: 'Circle'
    }

    type Shape = Rect | Circle

    const f1 = (a: Shape | string | number) => {
      if(typeof(a) === 'string') {

        return
      }

      if(typeof(a) === 'number') {

        return
      }
      if(a.kind === 'Circle') {

      } else {
        a
      }
    }
    ```
