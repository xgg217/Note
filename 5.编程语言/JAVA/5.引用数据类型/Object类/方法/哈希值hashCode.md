# hashCode

## 概述

+ 提高具有哈希结构的容器的效率
+ 如果两个引用都指向同一个对象，则哈希值肯定相同
+ 如果两个引用都指向不同一个对象，则哈希值肯定不相同

  ```java
  class Per {}

  Per per = Per();
  Per per2 = Per();

  System.out.println(per.hashCode()); // 793589513
  System.out.println(per2.hashCode()); // 1313922862

  // 与 per 哈希值相同
  Per per3 = per; // 793589513
  ```
