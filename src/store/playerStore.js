import { create } from "zustand";

export const usePlayerStore = create((set) => ({
  isPlaying: false,
  currentMusic: { playlist: null, song: null, song: [] },
  volume: 1,
  setVolume: (volume) => set({ volume }),
  setIsPlaying: (isPlaying) => set({ isPlaying }),
  setCurrentMusic: (currentMusic) => set({ currentMusic }),
}));

//Crea un estado global, esto se creo para precionar
// el boton de play y se cambie el estado y
//se pueda reproducir la cancion desde cualquier lugar.
