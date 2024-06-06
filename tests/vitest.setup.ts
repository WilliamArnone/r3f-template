import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach, vi } from "vitest";

vi.mock("zustand"); // to make it works like Jest (auto-mocking)
vi.mock("react-i18next", () => ({
  useTranslation: () => {
    return {
      t: (str: string) => str,
      i18n: {
        changeLanguage: () => new Promise(() => undefined),
      },
    };
  },
  initReactI18next: {
    type: "3rdParty",
    init: () => undefined,
  },
}));
afterEach(() => {
  cleanup();
});
