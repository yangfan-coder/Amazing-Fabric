import { fabric } from 'fabric';

// interface Parameter {
//   height: number;
//   width: number;
//   left: number;
//   top: number;
//   fill: string;
// }

const Rect = ({ height = 100, width = 100, left = 0, top = 0, fill = 'red' }) => {
  return new fabric.Rect({
    height,
    width,
    left,
    top,
    fill,
  });
};

// const Rect = new fabric.Rect({
//   height: 100,
//   width: 100,
//   left: 100,
//   top: 100,
//   fill: 'red',
// });

export default Rect;
