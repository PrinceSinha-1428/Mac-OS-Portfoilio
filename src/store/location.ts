import { locations } from "@constants";
import type { FolderNode, LocationNode } from "@types";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";



interface LocationState {
   activeLocation: LocationNode | FolderNode | null;
   setActiveLocation: (location: LocationNode| FolderNode | null) => void;
}

const DEFAULT_LOCATION: LocationNode = locations.work;


const useLocation = create<LocationState>()(immer((set) => ({

   activeLocation: DEFAULT_LOCATION,
   setActiveLocation: (location = null) => set((state) => {
      state.activeLocation = location;
   }),
   resetActiveLocation: () => set((state) => {
      state.activeLocation = DEFAULT_LOCATION;
   }),
})));

export default useLocation;
