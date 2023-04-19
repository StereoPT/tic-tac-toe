import { Socket } from "socket.io-client";
import { create } from "zustand";

interface StoreState {
  socket: Socket | null;
  setSocket: (newSocket: Socket | null) => void;
}

const useSocketStore = create<StoreState>((set) => {
  return {
    socket: null,
    setSocket: (newSocket) => set((state) => ({ socket: newSocket })),
  };
});

export default useSocketStore;
