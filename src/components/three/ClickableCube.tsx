import useStore from "@stores/useStore";
import { a, useSpring } from "@react-spring/three";
import { ThreeEvent } from "@react-three/fiber";
import { useControls } from "leva";
import { useCallback, useRef } from "react";

export default function ClickableCube() {
  const incrementCounter = useStore((state) => state.incrementCounter);
  const interactionRef = useRef(false);

  const { animationScale } = useControls({
    animationScale: { value: 1.2, min: 1, max: 3 },
  });

  const [spring, springApi] = useSpring(() => ({
    scale: 1,
  }));

  const pointerDown = useCallback(() => (interactionRef.current = true), []);
  const pointerLeave = useCallback(() => (interactionRef.current = false), []);

  const pointerUp = useCallback(
    (e: ThreeEvent<PointerEvent>) => {
      e.stopPropagation();

      if (interactionRef.current) {
        void springApi.start({
          from: { scale: animationScale },
          to: { scale: 1 },
        });

        incrementCounter();
      }

      interactionRef.current = false;
    },
    [springApi, incrementCounter, animationScale],
  );

  return (
    <a.group scale={spring.scale}>
      <mesh
        onPointerDown={pointerDown}
        onPointerUp={pointerUp}
        onPointerLeave={pointerLeave}
      >
        <boxGeometry args={[3, 3, 3]} />
        <meshNormalMaterial />
      </mesh>
    </a.group>
  );
}
