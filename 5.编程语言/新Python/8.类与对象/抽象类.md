# 抽象类（Abstract Base Class）

抽象类是**不能被实例化**的类，用于定义子类**必须实现**的接口。Python 通过 `abc` 模块提供抽象类的支持。

```python
from abc import ABC, abstractmethod

class Animal(ABC):  # 继承 ABC，表示这是一个抽象类
    @abstractmethod
    def speak(self):
        """子类必须实现这个方法"""
        pass

# animal = Animal()  # TypeError: 不能实例化抽象类

class Dog(Animal):
    def speak(self):  # 必须实现抽象方法
        print("Woof!")

dog = Dog()
dog.speak()  # Woof!
```

> 在vscode设置中，打开`python.analysis.typeCheckingMode`开关

## 定义抽象类

使用 `abc` 模块中的 `ABC` 类和 `@abstractmethod` 装饰器：

```python
from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self):
        """计算面积"""
        pass

    @abstractmethod
    def perimeter(self):
        """计算周长"""
        pass

    def describe(self):
        """普通方法，子类可直接使用"""
        print(f"这是一个图形，面积: {self.area()}, 周长: {self.perimeter()}")
```

**要点：**

- 继承 `ABC` 表示这是一个抽象类
- `@abstractmethod` 标记的方法**必须**在子类中实现
- 抽象类可以包含普通方法（有默认实现）
- 抽象类**不能**被实例化

---

## 抽象属性

除了抽象方法，还可以定义抽象属性：

```python
from abc import ABC, abstractmethod

class Employee(ABC):
    @property
    @abstractmethod
    def salary(self):
        """子类必须实现 salary 属性"""
        pass

class FullTimeEmployee(Employee):
    def __init__(self, monthly_salary):
        self._monthly_salary = monthly_salary

    @property
    def salary(self):
        return self._monthly_salary

emp = FullTimeEmployee(10000)
print(emp.salary)  # 10000
```

**注意：** `@property` 和 `@abstractmethod` 的顺序**不能颠倒**。

---

## 子类必须实现所有抽象方法

如果子类没有实现所有抽象方法，它仍然是抽象类，不能被实例化：

```python
class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def area(self):
        return self.width * self.height

    # 忘记实现 perimeter 方法

# rect = Rectangle(3, 4)  # TypeError: 不能实例化抽象类 Rectangle
```

---

## 实际应用场景

抽象类常用于定义**插件接口**或**框架扩展点**：

```python
from abc import ABC, abstractmethod

class DataSource(ABC):
    """数据源抽象基类，所有数据源必须实现这些接口"""

    @abstractmethod
    def connect(self):
        pass

    @abstractmethod
    def read(self):
        pass

    @abstractmethod
    def close(self):
        pass

class MySQLSource(DataSource):
    def connect(self):
        print("连接 MySQL")

    def read(self):
        return "MySQL 数据"

    def close(self):
        print("关闭 MySQL 连接")

class MongoDBSource(DataSource):
    def connect(self):
        print("连接 MongoDB")

    def read(self):
        return "MongoDB 数据"

    def close(self):
        print("关闭 MongoDB 连接")


def process_data(source: DataSource):
    """统一处理数据，不关心具体数据源"""
    source.connect()
    data = source.read()
    print(f"读取到: {data}")
    source.close()

# 使用不同的数据源
process_data(MySQLSource())
process_data(MongoDBSource())
```

---

## 作业（使用AI）

### 一、实现抽象缓存类

编写一个抽象基类 `Cache`，定义缓存的基本接口，然后实现 `MemoryCache` 和 `FileCache`：

```python
from abc import ABC, abstractmethod

class Cache(ABC):
    @abstractmethod
    def get(self, key):
        pass

    @abstractmethod
    def set(self, key, value):
        pass

    @abstractmethod
    def delete(self, key):
        pass

# 实现 MemoryCache（使用字典存储）
# 实现 FileCache（使用文件存储）
```

### 二、实现抽象序列类

编写一个抽象基类 `Sequence`，然后实现 `ListSequence` 和 `LinkedListSequence`：

```python
from abc import ABC, abstractmethod

class Sequence(ABC):
    @abstractmethod
    def append(self, item):
        pass

    @abstractmethod
    def get(self, index):
        pass

    @abstractmethod
    def length(self):
        pass

    @abstractmethod
    def __iter__(self):
        pass

    def is_empty(self):
        return self.length() == 0

# 实现 ListSequence（基于 Python 列表）
# 实现 LinkedListSequence（基于链表）
```

### 三、思考题

下面代码的输出是什么？为什么？

```python
from abc import ABC, abstractmethod

class A(ABC):
    @abstractmethod
    def foo(self):
        pass

    def bar(self):
        print("A.bar")

class B(A):
    def foo(self):
        print("B.foo")

class C(B):
    pass

c = C()
c.foo()
c.bar()
```

如果改成下面的代码，会发生什么？

```python
class D(A):
    pass

d = D()
```
