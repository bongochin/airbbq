import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";

import Home from './components/Home'
import Header from './components/Header'
import Browse from './components/Browse'
import SearchPage from './components/SearchPage'

import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      {/* <Header isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/login" >
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path='/' exact>
            <Browse />
            <Home />
          </Route>
        </Switch> */}
        <Header />
        <Switch >

          <Route path='/search'>
            <SearchPage />
          </Route>

          {/* <Route path='/browse'>
            <BrowsePage />
          </Route> */}

          <Route path='/' exact>
            <Browse />
            <Home />
          </Route>
        </Switch>
      {/* )} */}
    </>
  );
}

export default App;
