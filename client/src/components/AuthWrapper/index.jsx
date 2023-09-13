import React, { useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import { LocalStorageService } from "../../services";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, setUser } from "../../store/userSlice";
import { getCart, resetCart } from "../../store/cartSlice";
import { getOrder, resetOrder } from "../../store/orderSlice";
import io from "socket.io-client";

const AuthWrapper = () => {
  const userLocalStorage = LocalStorageService.load("user");
  const userRedux = useSelector(selectUser);
  const dispatch = useDispatch();

  const socket = useRef(null);

  useEffect(() => {
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

    if (userRedux) {
      socket.current = io("ws://localhost:5000", {
        query: {
          userId: userRedux._id,
        },
      }).on("connection", () => {
        console.log("connected");
      });
    }
  }, [userRedux, userLocalStorage]);

  return <Outlet />;
};

export default AuthWrapper;
