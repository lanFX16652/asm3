import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { LocalStorageService } from "../../services";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, setUser } from "../../store/userSlice";
import { getCart, resetCart } from "../../store/cartSlice";
import { getOrder, resetOrder } from "../../store/orderSlice";
import { io } from "socket.io-client";
import { setSocket } from "../../store/socketSlice";

const AuthWrapper = () => {
  const userLocalStorage = LocalStorageService.load("user");
  const userRedux = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const socket = io("ws://localhost:5000");
    dispatch(setSocket(socket));

    if (!userRedux) {
      dispatch(setUser(userLocalStorage));
    }

    if (userLocalStorage) {
      dispatch(getCart());
      dispatch(getOrder());
    } else {
      dispatch(resetCart());
      dispatch(resetOrder());
    }

    return () => {
      socket.disconnect();
    };
  }, [userRedux, userLocalStorage, dispatch]);

  return <Outlet />;
};

export default AuthWrapper;
