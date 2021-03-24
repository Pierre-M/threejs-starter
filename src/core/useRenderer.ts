import { Clock, PerspectiveCamera, Scene, WebGLRenderer } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import useWindow from "./useWindow";

type FrameHandler = (elapsedTime?: number, deltaTime?: number) => void;
type Tick = (handler?: FrameHandler) => void;

const updateRendererSize = (
  renderer,
  camera,
  sizes: { width: number; height: number }
) => {
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
};

export default (scene: Scene, camera: PerspectiveCamera): Tick => {
  const { resizeHandler, sizes } = useWindow();
  const canvas = document.querySelector<HTMLCanvasElement>("canvas.webgl");
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;

  const renderer = new WebGLRenderer({
    canvas: canvas,
  });

  resizeHandler((sizes) => {
    updateRendererSize(renderer, camera, sizes);
  });

  updateRendererSize(renderer, camera, sizes);

  const clock = new Clock();
  let oldElapsedTime = 0;

  const tick = (handler?: FrameHandler) => {
    const elapsedTime = clock.getElapsedTime();
    const deltaTime = elapsedTime - oldElapsedTime;
    oldElapsedTime = elapsedTime;

    controls.update();

    if (handler) handler(elapsedTime, deltaTime);

    renderer.render(scene, camera);

    window.requestAnimationFrame(() => tick(handler));
  };

  scene.add(camera);

  return tick;
};
