import { Object3D, Scene } from "three";

const scene = new Scene();

export default () => {
  return {
    scene,
    add: (...obj: Object3D[]) => scene.add(...obj),
  };
};
