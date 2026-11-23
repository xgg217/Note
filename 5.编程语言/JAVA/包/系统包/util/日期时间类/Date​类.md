# Date​

## 构造方法

+ Date()​: 创建一个表示当前日期和时间的Date对象。
+ Date(long date)​: 根据指定的毫秒数创建一个Date对象，该毫秒数表示自1970年1月1日00:00:00 GMT以来的毫秒数

## 方法

+ getTime()​: 返回自1970年1月1日00:00:00 GMT以来的毫秒数
+ toString()​: 将Date对象转换为String类型
+ before(Date when)​: 比较两个日期，如果当前日期早于参数日期，则返回true
+ after(Date when)​: 比较两个日期，如果当前日期晚于参数日期，则返回true

## 示例

+ 示例

  ```java
  import java.util.Date;

  public class Main {
    public static void main(String[] args) {
        // 创建表示当前日期和时间的Date对象
        Date currentDate = new Date();
        System.out.println("当前日期和时间：" + currentDate);

        // 创建一个指定日期和时间的Date对象
        Date specificDate = new Date(1630454400000L); // 对应2022年9月2日12:00:00
        System.out.println("指定日期和时间：" + specificDate);

        // 判断日期先后
        if (currentDate.after(specificDate)) {
            System.out.println("当前日期晚于指定日期");
        } else {
            System.out.println("当前日期早于指定日期");
        }
    }
  }
  ```

