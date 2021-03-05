import React, { useRef, useEffect, useState } from 'react';
import { Layout } from 'antd';
import Menu from '@/components/menu';
import { fabric } from 'fabric';
import { CanvasContent } from '@/styles';
const { Sider, Content } = Layout;

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
        height: 800,
        width: 1000,
        backgroundColor: '#ccc',
        selectionBorderColor: 'red', // 选择区域的边框颜色
        selectionColor: '#ccc', // 选择区域块颜色
        stopContextMenu: true, // 禁用鼠标右键是否可以输出上下文菜单
      });

      if (rect.current) {
        cx.add(rect.current);
      }

      if (left >= 1) {
        rect.current.animate(
          {
            left: 200,
          },
          {
            onChange: cx.renderAll.bind(cx),
            duration: 1000,
            easing: fabric.util.ease.easeOutBounce,
            onComplete() {
              setLeft(0);
            },
          },
        );
      }

      if (left === 400) {
        rect.current.animate('left', 0, {
          onChange: cx.renderAll.bind(cx),
          duration: 1000,
          easing: fabric.util.ease.easeOutBounce,
          onComplete() {
            setLeft(0);
          },
        });
      }

      if (top >= 1) {
        rect.current.animate(
          {
            top: 200,
          },
          {
            onChange: cx.renderAll.bind(cx),
            duration: 1000,
            easing: fabric.util.ease.easeOutBounce,
            onComplete() {
              setTop(0);
            },
          },
        );
      }
      if (top === 200) {
        rect.current.animate(
          {
            top: 0,
          },
          {
            onChange: cx.renderAll.bind(cx),
            duration: 1000,
            easing: fabric.util.ease.easeOutBounce,
            onComplete() {
              setTop(0);
            },
          },
        );
      }
    }
  }, [canvas, rect, left, top]);

  return (
    <CanvasContent>
      <Layout className='layout'>
        <Sider className='sider'>
          <Menu />
        </Sider>
        <Layout>
          <Content className='content'>
            <canvas ref={canvas} />
          </Content>
        </Layout>
      </Layout>
    </CanvasContent>
    // <CanvasContent>
    //   <Menu />
    //   <CanvasMain>
    //     <h4>改变形状：</h4>
    //     <Select defaultValue='lucy' style={{ width: 120, height: 40 }} onChange={handleChange}>
    //       <Option value='jack'>Jack</Option>
    //       <Option value='lucy'>Lucy</Option>
    //       <Option value='Yiminghe'>yiminghe</Option>
    //     </Select>
    //     <canvas ref={canvas} />
    //   </CanvasMain>

    //   <StateButton>
    //     <Button onClick={() => setLeft(1)}>向右移动</Button>
    //     <Button onClick={() => setLeft(400)}>向左移动</Button>
    //     <Button onClick={() => setTop(200)}>向上移动</Button>
    //     <Button onClick={() => setTop(1)}>向下移动</Button>
    //   </StateButton>
    // </CanvasContent>
  );
};

export default Home;
