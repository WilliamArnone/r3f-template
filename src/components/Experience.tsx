import { OrbitControls } from "@react-three/drei";
import ClickableCube from "./three/ClickableCube";

export default function Experience() {
  return (
    <>
      <OrbitControls />
      <ClickableCube />
    </>
  );
}
