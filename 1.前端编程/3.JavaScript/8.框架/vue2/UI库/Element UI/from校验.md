# 校验

##

+ code

  ```js
  async submitForm(formName) {
    const valid = await this.$refs[formName].validate();
  }
  ```
