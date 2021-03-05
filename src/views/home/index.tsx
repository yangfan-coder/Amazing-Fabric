import React, { useRef, useEffect, useState } from 'react';
import { Button } from 'antd';
import { fabric } from 'fabric';
import { StateButton, CanvasContent } from '@/styles';

const Home = () => {
  const canvas = useRef(null);
  const rect = useRef<any>({});
  const [left, setLeft] = useState<number>(0);
  const [top, setTop] = useState<number>(0);

  // 初始化一个矩形
  rect.current = new fabric.Rect({
    height: 50,
    width: 50,
    left,
    top,
    fill: 'red',
  });

  useEffect(() => {
    if (canvas.current) {
      // # http://fabricjs.com/docs/fabric.Canvas.html
      const cx = new fabric.Canvas(canvas.current, {
        height: 300,
        width: 1000,
        backgroundColor: '#ccc',
        selectionBorderColor: 'red', // 选择区域的边框颜色
        selectionColor: '#ccc', // 选择区域块颜色
        stopContextMenu: true, // 禁用鼠标右键是否可以输出上下文菜单
      });

      if (rect.current) {
        cx.add(rect.current);
      }

      if (left > 1) {
        rect.current.set({ left, top });
      }
      cx.renderAll();
    }
  }, [canvas, rect, left, top]);

  return (
    <CanvasContent>
      <canvas ref={canvas} />
      <StateButton>
        <Button onClick={() => setLeft((val) => val + 10)}>向左移动</Button>
        <Button onClick={() => setLeft((val) => val - 10)}>向右移动</Button>
        <Button onClick={() => setTop((val) => val - 10)}>向上移动</Button>
        <Button onClick={() => setTop((val) => val + 10)}>向下移动</Button>
      </StateButton>
    </CanvasContent>
  );
};

export default Home;
