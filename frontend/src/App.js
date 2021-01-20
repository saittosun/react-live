import "bootstrap/dist/css/bootstrap.min.css";
import 'react-bootstrap-country-select/dist/react-bootstrap-country-select.css';
import "./App.scss";

import React, { useEffect } from "react";
import { Router, Switch, Redirect, Route } from "react-router-dom";
// import { Route } from 'react-router';
import { useDispatch, useSelector } from "react-redux";

import Navbar from "./containers/Navbar/Navbar";
import signin from "./containers/register/SignIn";
import profile from "./containers/profile/profile";
import signup from "./containers/register/ArtistSignUp";
import Footer from "./containers/Footer/Footer";
import concertInfo from "./containers/Carousel/ConcertInfo/ConcertInfo";
import ConcertContainer from "./containers/Concert/ConcertContainer";
import ForgetPassword from './containers/register/ForgetPassword';
import videoenvironment from './containers/VideoEnvironment/videoEnvironment';

import { history } from "./helpers";
import { alertActions } from "./actions";
import { PrivateRoute } from "./components";
import RegisterHomePage from "./containers/register/RegisterHomePage";
// import { LoginPage } from '../LoginPage';
// import { RegisterPage } from '../RegisterPage';

function App() {
  const alert = useSelector((state) => state.alert);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location, action) => {
      // clear alert on location change
      dispatch(alertActions.clear());
    });
  }, []);
  return (
    <div className="App">
      <div className="col-md-8 offset-md-2">
        {alert.message && (
          <div className={`alert ${alert.type}`}>{alert.message}</div>
        )}
      </div>

      <Router history={history}>
        <Navbar />
        <Switch>
          <PrivateRoute exact path="/" component={RegisterHomePage} />
          <Route path="/signin" component={signin} />
          <Route path="/signup" component={signup} />
          <Route path="/profile" component={profile} />
          <Route path="/concert" component={ConcertContainer} />
          <Route path="/changepassword" component={ForgetPassword} />
          {/* <Route path="/concertInfo" component={concertInfo} /> */}
          {/* <Route path="/concert" component={ConcertForm} /> */}
          {/* <Route path="/concertInfo" component={concertInfo} /> */}
          <Route path="/detail/:id" component={concertInfo} />
          <Route path="/videoenvironment" component={videoenvironment} />

          <Redirect from="*" to="/" />
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
