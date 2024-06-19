import io from 'socket.io-client';
import { useEffect } from 'react';
import { useGlobalStore } from "@/stores/global";

const socket = io("http://localhost:5000/");


const Socket = () => {
    const { setIsRefresh, isRefresh } = useGlobalStore()
    // useEffect(() => {
        socket.on('message', (message) => {
            // setMessages(prevMessages => [...prevMessages, message]);
            setIsRefresh(!isRefresh)
            console.log(message)
        });
        // return () => {
        //     socket.disconnect();
        // };
    // });

    return <></>;
};

export default Socket;
