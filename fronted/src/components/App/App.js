import React from "react";
import { useEffect, useState } from "react";
import "../../imported-styles/SideBar.scss";
import "./App.css";
import Login from "../Login/Login";
import Dashboard from "../Dashboard/Dashboard";
import { Routes, Route, Navigate, useNavigate } from "react-router";
import UserPhoneService from "../../services/usersService";
import ProtectedRoute from "../ProtectedRout/ProtectedRoute";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import DashBoardView from "../DashBoardView/DashBoardView";
import BasicTable from "../Table/Table";
import BasicEditingGrid from "../Table/Table1";

function App() {
  const [userData, setUserData] = useState({});
  const [isThemeModeDark, setIsThemeModeDark] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSubmitedSuccesfuly, setIsSubmitedSuccesfuly] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) return;
    setIsLoggedIn(true);
    const user = UserPhoneService.getUser(localStorage.getItem("token"));
    setUserData(user);
  }, []);

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const lightTheme = createTheme({
    palette: {
      mode: "light",
    },
  });

  function handleThemeChange() {
    setIsThemeModeDark(!isThemeModeDark);
  }

  function handleSubmitLogin(phoneNumber) {
    try {
      const user = UserPhoneService.signin(phoneNumber);
      setUserData(user);
      localStorage.setItem("token", user.token);
      setIsLoggedIn(true);
      setIsSubmitedSuccesfuly(true);
      navigate(`/admin/${user.name}`);
      // window.history.pushState({}, undefined, `/admin/${user.name}`);
    } catch (err) {
      console.log(err.message);
    } finally {
      setTimeout(() => {
        setIsSubmitedSuccesfuly(false);
      }, "1000");
    }
    // add  here api call + history push to the wanted route
  }
  function handleLogout() {
    setIsLoggedIn(false);
    localStorage.removeItem("token");
  }

  return (
    <>
      <ThemeProvider theme={isThemeModeDark ? darkTheme : lightTheme}>
        <Routes>
          <Route
            path={"/"}
            element={
              isLoggedIn ? (
                <Navigate to={`/admin/${userData.name}`} />
              ) : (
                <Login
                  handleSubmitLogin={handleSubmitLogin}
                  isSubmitedSuccesfuly={isSubmitedSuccesfuly}
                />
              )
            }
          />
          <Route element={<ProtectedRoute isLoggedIn={isLoggedIn} />}>
            <Route
              path={`/admin/:userId`}
              params
              element={
                <Dashboard
                  isThemeModeDark={isThemeModeDark}
                  handleThemeChange={handleThemeChange}
                  handleLogout={handleLogout}
                  user={userData}
                />
              }
            >
              <Route path="dashboard" element={<DashBoardView />} />
              <Route path="table/:tableId" element={<BasicEditingGrid />} />
            </Route>
          </Route>
          {/* <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>No page matching this url</p>
              </main>
            }
          /> */}
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
