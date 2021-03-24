interface Size {
  width: number;
  height: number;
}

type ResizeHandler = (size: Size) => void;

const sizes: Size = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const resizeHandler = (handler: ResizeHandler) => {
  window.addEventListener("resize", () => {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;
    handler(sizes);
  });
};

export default (): {
  readonly sizes: Size;
  resizeHandler: (h: ResizeHandler) => void;
} => {
  return {
    sizes,
    resizeHandler,
  };
};
