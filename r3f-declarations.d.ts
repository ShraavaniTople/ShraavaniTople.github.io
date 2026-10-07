import type {
  Object3DNode,
  BufferGeometryNode,
  MaterialNode,
} from "@react-three/fiber";
import type * as THREE from "three";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      mesh: Object3DNode<THREE.Mesh, typeof THREE.Mesh>;
      group: Object3DNode<THREE.Group, typeof THREE.Group>;
      sphereGeometry: BufferGeometryNode<
        THREE.SphereGeometry,
        typeof THREE.SphereGeometry
      >;
      torusGeometry: BufferGeometryNode<
        THREE.TorusGeometry,
        typeof THREE.TorusGeometry
      >;
      tubeGeometry: BufferGeometryNode<
        THREE.TubeGeometry,
        typeof THREE.TubeGeometry
      >;
      meshBasicMaterial: MaterialNode<
        THREE.MeshBasicMaterial,
        typeof THREE.MeshBasicMaterial
      >;
    }
  }
}
