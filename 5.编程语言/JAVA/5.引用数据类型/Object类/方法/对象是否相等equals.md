# equals 方法

## equals

+ 是 Object 类中的方法，只能判断引用类型

  ```java
  // 源码
  public boolean equals(Object obj) {
      return (this == obj);  // 默认就是比较引用
  }
  ```

+ 默认判断的是地址是否相等，子类（例如：String、Integer）中往往重写了该方法，用于判断内容是否相等

  ```java
  // String 重写了该方法
  String s1 = new String("hello");
  String s2 = new String("hello");
  System.out.println(s1.equals(s2)); // true，内容相同
  System.out.println(s1 == s2);      // false，对象不同
  ```

  ```java
  // Integer 重写了该方法
  Integer i1 = new Integer(1000);
  Integer i2 = new Integer(1000);
  System.out.println(i1.equals(i2)); // true
  System.out.println(i1 == i2);      // false
  ```

## 模拟重写 equals 方法

+ 模拟重写

  ```java
  class Per {
      private String name;
      private int age;
      private char gender;

      public Per(String name, int age, char gender) {
          this.name = name;
          this.age = age;
          this.gender = gender;
      }

      // 重写 equals 方法
      public boolean equals(Object obj) {
          // 是否是同一个对象
          if(this == obj) {
              return true;
          }

          // 类型判断
          if(obj instanceof Per) {
              // 向下转型，需要获取到 obj 的各个属性的值
              Per p = (Per)obj;
              boolean b1 = this.name.equals(p.name);
              boolean b2 = this.age == p.age;
              boolean b3 = this.gender == p.gender;
              return b1 && b2 && b3;
          }

          return false;
      }
  }

  Per per = new Per("小刚刚", 18, '男');
  Per per2 = new Per("小刚刚", 18, '男');

  System.out.println(per.equals(per2)); // true
  ```
