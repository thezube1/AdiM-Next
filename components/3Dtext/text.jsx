import React, { useRef } from "react";
import * as THREE from "three";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
import Shrikhand from "./Shrikhand.json";
import useWindowSize from "../../utils/useWindowSize";

const Text = (props) => {
  const Text1 = (props) => {
    const mesh = useRef();

    const font = new THREE.FontLoader().parse(Shrikhand);

    const textOptions = {
      font,
      size: 5,
      height: 1,
    };

    return (
      <mesh {...props} ref={mesh}>
        <textGeometry attach="geometry" args={["Adi", textOptions]} />
        <meshStandardMaterial color="rgb(255, 183, 41)" />
      </mesh>
    );
  };

  const width = useWindowSize();

  return (
    <Canvas style={{ width: "100%", height: "100%" }}>
      <ambientLight />
      <pointLight position={[20, 20, 20]} />
      <Text1 position={[-6.5, -1, 0]} />

      <OrbitControls
        enableZoom={false}
        minDistance={10}
        enablePan={false}
        autoRotate={true}
        autoRotateSpeed={2}
        enableRotate={width > 700 ? true : false}
      />
    </Canvas>
  );
};

export default Text;
