# Comparator

java.util.Comparator​ 接口是一个用于定义对象比较规则的接口。它允许开发者自定义对象比较逻辑，这在排序集合或者对对象进行排序操作时非常有用。Comparator​ 接口提供了一种灵活的比较机制，使得可以对任何对象进行排序，而不仅仅是实现了特定比较方法的对象。
‍
方法


reversed()​: 返回与当前比较器相反的比较器（逆序排列）。


thenComparing()​: 返回一个复合比较器，用于对两个对象进行多重比较。


nullsFirst()​: 返回一个可将null元素排在非null元素之前的比较器。


nullsLast()​: 返回一个可将null元素排在非null元素之后的比较器。


compare(T o1, T o2) - 比较两个对象 o1​ 和 o2​。返回值是一个整数，它表示第一个参数相对于第二个参数是小于、等于还是大于：
如果 o1​ 小于 o2​，返回负整数；
如果 o1​ 等于 o2​，返回零；
如果 o1​ 大于 o2​，返回正整数。

  ```java
  import java.util.ArrayList;
  import java.util.Collections;
  import java.util.Comparator;
  import java.util.List;
  ​
  class Student {
     private int id;
     private String name;
  ​
     public Student(int id, String name) {
         this.id = id;
         this.name = name;
     }
  ​
     public int getId() {
         return id;
     }
  ​
     public String getName() {
         return name;
     }
  }
  ​
  public class Main {
     public static void main(String[] args) {
         List<Student> studentList = new ArrayList<>();
         studentList.add(new Student(1, "Alice"));
         studentList.add(new Student(2, "Bob"));
         studentList.add(new Student(3, "Charlie"));
  ​
         // 使用Comparator进行排序
         Collections.sort(studentList, Comparator.comparing(Student::getName));
   
         // 输出排序后的结果
         for (Student student : studentList) {
             System.out.println("ID: " + student.getId() + ", Name: " + student.getName());
         }
     }
  }

  ```
