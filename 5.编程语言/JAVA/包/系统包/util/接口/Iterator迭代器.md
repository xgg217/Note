# Iterator

在Java中，Iterator接口提供了一种用于遍历集合元素的统一方式。通过实现Iterator接口，我们可以对集合中的元素进行迭代访问，而不需要了解集合的具体实现方式。
‍
方法

boolean hasNext()​: 如果仍有元素可以迭代，则返回true，否则返回false。
E next()​: 返回迭代的下一个元素。
void remove()​: 从迭代器指向的集合中移除迭代器最后返回的元素（可选操作）。


  ```java
  import java.util.ArrayList;
  import java.util.Iterator;
  import java.util.List;
  ​
  public class Main {
     public static void main(String[] args) {
         List<String> names = new ArrayList<>();
         names.add("Alice");
         names.add("Bob");
         names.add("Charlie");
  ​
         // 获取Iterator对象并进行迭代
         Iterator<String> iterator = names.iterator();
         while (iterator.hasNext()) {
             String name = iterator.next();
             System.out.println(name);
         }
     }
  }

  ```
