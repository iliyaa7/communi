import React from 'react';
import { useEffect, useState } from 'react';
import "../../imported-styles/SideBar.scss";
import './App.css'
import Login from '../Login/Login'
import Dashboard from '../Dashboard/Dashboard';
import { Switch, Route, Redirect } from 'react-router';
import { useHistory } from "react-router-dom";
import UserPhoneService from '../../services/usersService'
import ProtectedRoute from '../ProtectedRout/ProtectedRoute';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

function App() {
  const [userData, setUserData] = useState({})
  const [isThemeModeDark, setIsThemeModeDark] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isSubmitedSuccesfuly, setIsSubmitedSuccesfuly] = useState(false);
  const history = useHistory();

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  const lightTheme = createTheme({
    palette: {
      mode: 'light',
    },
  });

  function handleThemeChange() {
    setIsThemeModeDark(!isThemeModeDark)
  }

  function handleSubmitLogin(phoneNumber) {
    try{
      setUserData(UserPhoneService.signin(phoneNumber));
      setIsLoggedIn(true);
      setIsSubmitedSuccesfuly(true);
      history.push('/');

    } catch (err) {
      console.log(err.message);
    } finally {
      setTimeout(() => {
        setIsSubmitedSuccesfuly(false);
      }, "1000")
    }
    // add  here api call + history push to the wanted route
  }

  function handleLogout() {
    setIsLoggedIn(false);
  }

  return (
    <>
    <ThemeProvider theme={isThemeModeDark ? darkTheme : lightTheme}>
      <Switch>
          <ProtectedRoute exact path='/' isLoggedIn={isLoggedIn} >
            <Dashboard isThemeModeDark={isThemeModeDark} handleThemeChange={handleThemeChange}/>
          </ProtectedRoute>
          <Route path={'/login'}>
            {
              isLoggedIn ?
              <Redirect to="/" /> :
              <Login handleSubmitLogin={handleSubmitLogin} isSubmitedSuccesfuly={isSubmitedSuccesfuly}/>
            }
          </Route>
        </Switch>
    </ThemeProvider>
    </>
  );
}

export default App;

