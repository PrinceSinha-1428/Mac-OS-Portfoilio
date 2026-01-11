import { INITIAL_Z_INDEX, WINDOW_CONFIG } from "@constants";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export type WindowKey = keyof typeof WINDOW_CONFIG | string;

type WindowItem = {
  isOpen: boolean;
  zIndex: number;
  data: unknown | null;
};

type WindowState = {
  windows: Record<WindowKey, WindowItem>;
  nextZIndex: number;

  openWindow: (windowkey: WindowKey, data?: unknown | null) => void;
  closeWindow: (windowkey: WindowKey) => void;
  focusWindow: (windowkey: WindowKey) => void;
};


const useWindowStore = create<WindowState>()(immer((set) =>  ({

   windows: WINDOW_CONFIG,
   nextZIndex: INITIAL_Z_INDEX + 1,

   openWindow: (windowkey, data = null) => set((state) => {
      const win = state.windows[windowkey];
      if(!win) return;
      win.isOpen = true;
      win.zIndex = state.nextZIndex;
      win.data = data ?? win.data;
      state.nextZIndex++;
   }),

   closeWindow: (windowkey) => set((state) => {
      const win = state.windows[windowkey];
      if(!win) return;
      win.isOpen = false;
      win.zIndex = INITIAL_Z_INDEX;
      win.data = null;
   }),
   
   focusWindow: (windowkey) => set((state) => {
      const win = state.windows[windowkey];
      if(!win) return;
      win.zIndex = state.nextZIndex++;

   }),
})));

export default useWindowStore;