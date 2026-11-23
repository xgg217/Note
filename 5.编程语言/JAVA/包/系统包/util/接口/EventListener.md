# EventListener

## 概述

+ 在Java中，EventListener接口是用于实现事件监听器的接口，用于处理各种类型的事件。通过实现EventListener接口，可以创建自定义的事件监听器，用于监听和响应特定类型的事件。
‍
方法
EventListener​ 接口本身不定义任何方法，但是它有很多子接口，这些子接口定义了事件处理方法。例如：

ActionListener​：用于处理动作事件，如按钮点击。
ChangeListener​：用于监听 ChangeEvent​，当事件源的状态发生变化时触发。
MouseListener​：用于处理鼠标事件，如鼠标点击、移动等。
MouseMotionListener​：用于处理鼠标移动和拖动事件。
KeyListener​：用于处理键盘事件，如按键和释放

  ```java
  import java.awt.event.MouseEvent;
  import java.awt.event.MouseListener;
  ​
  public class MyMouseListener implements MouseListener {
     @Override
     public void mouseClicked(MouseEvent e) {
         System.out.println("Mouse Clicked at: (" + e.getX() + ", " + e.getY() + ")");
     }
  ​
     @Override
     public void mousePressed(MouseEvent e) {
         // 实现鼠标按下时的处理逻辑
     }
  ​
     @Override
     public void mouseReleased(MouseEvent e) {
         // 实现鼠标释放时的处理逻辑
     }
  ​
     @Override
     public void mouseEntered(MouseEvent e) {
         // 实现鼠标进入组件时的处理逻辑
     }
  ​
     @Override
     public void mouseExited(MouseEvent e) {
         // 实现鼠标退出组件时的处理逻辑
     }
  }

  ```

