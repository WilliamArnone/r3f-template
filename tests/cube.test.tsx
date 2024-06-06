import { expect, test } from "vitest";
import ReactThreeTestRenderer from "@react-three/test-renderer";
import ClickableCube from "@components/three/ClickableCube";
import { render } from "@testing-library/react";
import CounterLabel from "@/components/dom/CounterLabel";
import useStore from "@stores/useStore";

test("Counter changes changes on click", async () => {
  render(<CounterLabel />);

  const threeRenderer = await ReactThreeTestRenderer.create(<ClickableCube />);
  const cube = threeRenderer.scene.children[0].children[0];

  expect(useStore.getState().counter).toBe(0);

  await threeRenderer.fireEvent(cube, "onPointerDown");
  await threeRenderer.fireEvent(cube, "onPointerUp");

  expect(useStore.getState().counter).toBe(1);
});
