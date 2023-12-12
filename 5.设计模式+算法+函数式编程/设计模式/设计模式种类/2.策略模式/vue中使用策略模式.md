# vue 中使用策略模式

## 代码

+ Validator 类

  ```js
  class Validator {
    constructor(strategies) {
      this.cache = []; // 保存xiao'yan
      this.strategies = strategies;
    }

    add(value, rules) {
      for(let i = 0, rule; rule = rules[ i++ ];) {
        ((rule) => {
          const strategyAry = rule.strategy.split(':');
          const errorMsg = rule.errorMsg;

          this.cache.push(() => {
            const strategy = strategyAry.shift();
            strategyAry.unshift(value);
            strategyAry.push(errorMsg);
            console.log(strategy)
            console.log(this.strategies)
            return this.strategies[strategy].apply(value, strategyAry);
          });
        })(rule);
      }
    }

    start() {
      for(let i = 0, validatorFunc; validatorFunc = this.cache[i++];) {
        const msg = validatorFunc(); // 开始校验，并取得校验后的返回信息
        if( msg ) { // 如果有确切的返回值，说明校验没有通过
          return msg;
        }
      }
    }
  };

  export default Validator;
  ```

+ HTML

  ```html
  <form>
    <label for="user">用户名：</label>
    <input v-model="mz" type="text" id="user" placeholder="用户名">
    <br>
    <label for="mm">密码：</label>
    <input v-model="mm" type="text" id="mm" placeholder="密码">
    <br>
    <label for="phone">手机号：</label>
    <input v-model="sjh" type="text" id="phone" placeholder="手机号">
    <br>
    <button @click.stop="tj" type="button">提交</button>
  </form>
  ```

+ js

  ```js
  <script>
  import Validator from "@/tools/clms";

  // 策略对象
  const strategies = {
    isNonEmpty(value, errorMsg) {
      // 不能为空
      if(value === '') {
        return errorMsg;
      }
    },
    minLength(value, length, errorMsg) {
      // 限制最小长度
      if(value.length < length) {
        return errorMsg;
      }
    },
    isMobile(value, errorMsg) {
      console.log(value)
      // 随机号码格式
      if(!/(^1[3|5|8][0-9]{9}$)/.test(value)) {
        return errorMsg;
      }
    }
  };

  export default {
    data() {
      return {
        mz: "3",
        mm: "2",
        sjh:"1"
      }
    },

    methods:{
      validatorFunc () {
        const validator = new Validator(strategies);
        validator.add(this.mz, [{
          strategy: 'isNonEmpty',
          errorMsg: '用户名不能为空'
        }, {
          strategy: 'minLength:10',
          errorMsg: '用户名长度不能小于10位'
        }]);

        validator.add(this.mm, [{
          strategy: 'minLength:6',
          errorMsg: '密码最小长度不能少于6位'
        }]);

        validator.add(this.sjh, [{
          strategy: 'isMobile',
          errorMsg: '手机号码格式不正确'
        }]);

        const errorMsg = validator.start();
        return errorMsg;
      },

      // 提交代码
      tj() {
        const errorMsg = this.validatorFunc();
        console.log(errorMsg)
        if(errorMsg) {
          alert(errorMsg);
          return false;
        }
        console.log('可以提交了');
      }
    }
  }
  </script>
  ```
