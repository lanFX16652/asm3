import { NavLink, useNavigate } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "react-bootstrap/esm/Container";
import { selectUser } from "../../store/userSlice";
import { Menu, Popover, Space } from "antd";
import { useLogout } from "../../apis/logout";

function MainNavigation() {
  const navigate = useNavigate();
  const user = useSelector(selectUser)
  const [logout] = useLogout()

  return (
    <Container>
      <nav className={classes.navbar}>
        <ul>
          <li>
            <NavLink
              onClick={() => navigate("/")}
              to='/'
              className={(navData) => {
                return (navData.isActive ? classes.active : "")
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/shoppage'
              className={(navData) => {

                return (navData.isActive ? classes.active : "")
              }}
            >
              Shop
            </NavLink>
          </li>
        </ul>

        <h1>BOUTIQUE</h1>

        <Space  >
          <NavLink
            to='/checkout'
            className={(navData) => {

              return (navData.isActive ? classes.active : "")
            }}
          >
            Cart
          </NavLink>
          {

            user ? (
              <Popover trigger='click' content={
                < Menu items={
                  [
                    {
                      label: 'History',
                      onClick: () => navigate('/history')
                    },
                    {
                      label: 'Log out',
                      onClick: logout
                    },
                  ]} />
              } >
                {user.fullname}
              </Popover>
            ) : (
              <NavLink
                to='/login'
                className={(navData) => {
                  return (navData.isActive ? classes.active : "")
                }}
              >
                Login
              </NavLink>
            )}
        </Space>
      </nav>
    </Container >
  );
}
export default MainNavigation;

{
  /*!isLoggedIn && (
            <li>
              <a
                onClick={() => navigate("/loginpage")}
                className={(navData) =>
                  navData.isActive ? classes.active : ""
                }
              >
                Login
              </a>
            </li>
          )}

          {isLoggedIn && (
            <li>
              {" "}
              <a onClick={userLogout}>{logindata[0].name} (Logout)</a>
            </li>
          )*/
}
