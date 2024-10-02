import { useRef } from "react";
import { easing } from "maath";
import { useFrame } from "@react-three/fiber";

const HackerCamera = ({ children, isMobile }) => {
  const groupRef = useRef(null);

  useFrame((state, delta) => {
    easing.damp3(state.camera.position, [0, 0, 20], 0.25, delta);
    if (!isMobile) {
      if (groupRef != null) {
        easing.dampE(groupRef.current.rotation, [-state.pointer.y / 3, state.pointer.x / 5, 0], 0.25, delta);

      }
    }
  })


  return (
    <group ref={groupRef}>{children}</group>
  )

}

export default HackerCamera;
