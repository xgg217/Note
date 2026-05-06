# 父组件调用form表单校验

## code

+ 子组件

  ```js
  // 校验
  const submitForm = async (): Promise<[boolean, string]> => {
    const { title } = props;

    const formEl = ruleFormRef.value;

    if (!formEl) return [false, ''];
    // console.log(formData.tableData.length);

    if (formData.tableData.length === 0) {
      return [false, title + '请至少添加一行数据'];
    }

    const arr: [boolean, string] = [true, ''];
    await formEl.validate((valid) => {
      if (valid) {
        return true;
      } else {
        arr[0] = false;
        arr[1] = title + '校验不通过';
        return false;
      }
    });

    return arr;
  };

  // 向父组件提供方法
  defineExpose({
    submit: submitForm, // 校验
  });
  ```

+ 父组件

  ```js
  try {
    const [isBool, msg] = await mainRowRef.value?.submit()!;
    // console.log(isBool);
    if (!isBool) {
      ElMessage.error(msg);
      return false;
    }
  } catch (error) {
    console.error(error);
  }
  ```
