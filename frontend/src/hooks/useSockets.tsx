import useSocketStore from "@/store/socketStore";
import { useEffect } from "react";
import { Socket, io } from "socket.io-client";

const useSockets = () => {
  const { socket, setSocket } = useSocketStore((state) => state);

  useEffect(() => {
    if (socket !== null) return;

    const newSocket: Socket = io("http://localhost:1337", {
      transports: ["polling"],
    });

    newSocket.on("connect", () => {
      setSocket(newSocket);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { socket };
};

export default useSockets;
