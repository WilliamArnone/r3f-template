import { create } from "zustand";

interface MainStore {
  counter: number;
  incrementCounter: () => void;
}

const useStore = create<MainStore>((set) => ({
  counter: 0,
  incrementCounter: () => {
    set((state) => ({ counter: state.counter + 1 }));
  },
}));

export default useStore;
