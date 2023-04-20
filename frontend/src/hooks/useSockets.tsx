import { useEffect, useState } from "react";
import { Socket, io } from "socket.io-client";

const useSockets = () => {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const newSocket: Socket = io("http://localhost:1337", {
      transports: ["polling"],
    });

    newSocket.on("connect", () => {
      setSocket(newSocket);
    });

    return () => {
      newSocket.disconnect();
      setSocket(null);
    };
  }, []);

  return { socket };
};

export default useSockets;
