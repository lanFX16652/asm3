import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { LocalStorageService } from "../../services";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, setUser } from "../../store/userSlice";
import { getCart, resetCart } from "../../store/cartSlice";
import { getOrder, resetOrder } from "../../store/orderSlice";

const AuthWrapper = () => {
  const userLocalStorage = LocalStorageService.load("user");
  const userRedux = useSelector(selectUser);
  const dispatch = useDispatch();

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
  }, [userRedux, userLocalStorage, dispatch]);

  return <Outlet />;
};

export default AuthWrapper;
