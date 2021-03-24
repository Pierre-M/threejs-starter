import { Mesh, MeshStandardMaterial, PlaneGeometry } from "three";

const floor = new Mesh(
  new PlaneGeometry(10, 10),
  new MeshStandardMaterial({
    color: "#777777",
    metalness: 0.3,
    roughness: 0.4,
  })
);

floor.receiveShadow = true;
floor.rotation.x = -Math.PI * 0.5;

export default () => floor;
