import React, { useEffect, useState, useContext, createContext } from 'react';
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, setUser } from "../../store/userSlice.js";
import io from 'socket.io-client'

const SocketContext = createContext(null)

const AuthWrapper = () => {
    const userLocalStorage = JSON.parse(localStorage.getItem("user"));
    const userRedux = useSelector(selectUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [socket, setSocket] = useState(null)

    useEffect(() => {
        if (!userRedux) {
            dispatch(setUser(userLocalStorage))
        }

        if (userRedux && !socket) {
            const socketInstance = io("ws://localhost:5000", {
                query: {
                    userId: userRedux._id
                }
            })

            setSocket(socketInstance)
        }
    }, [userRedux])

    useEffect(() => {
        if (!userLocalStorage) {
            navigate("/login");
        }
    }, [userLocalStorage])


    return <SocketContext.Provider value={socket} >
        <Outlet />
    </SocketContext.Provider>;
}

export const useSocket = () => {
    const socket = useContext(SocketContext)
    return socket
}

export default AuthWrapper