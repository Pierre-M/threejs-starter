import { PerspectiveCamera } from "three";

export default (aspectRatio: number) => {
  const camera = new PerspectiveCamera(75, aspectRatio, 0.1, 100);

  camera.position.x = 1;
  camera.position.y = 1;
  camera.position.z = 2;

  return camera;
};
