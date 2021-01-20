import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../../actions';
import "./register.scss";
import aplaudo from '../../assets/logo.png';
import Search from '../../components/Search';

const ForgetPassword = () => {

  const instance = axios.create({
    baseURL: 'https://aplaudoapi.azurewebsites.net',
    timeout: 1000,
    headers: {
      "Content-type": "application/json;charset=UTF-8"
    }
  });
  const [inputs, setInputs] = useState({
    EmailAddress: '',
    Password: '',
    ConfirmPassword: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const { EmailAddress, Password, ConfirmPassword } = inputs;
  const loggingIn = useSelector(state => state.authentication.loggingIn);
  const dispatch = useDispatch();
  const location = useLocation();

  // reset login status
  useEffect(() => {
    dispatch(userActions.logout());
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs(inputs => ({ ...inputs, [name]: value }));
  }

  // const testObj = { EmailAddress: "Rashaali2@gmail.com", Password: "4444" }

  const putData = async (u) => {
    console.log(u);
    const res = await instance.put("https://aplaudoapi.azurewebsites.net/api/artists/changepassword", u);
    console.log(res.data.json);
    console.log(res.data);
    res.then(
      (response) => { console.log(response.json()) },
      (error) => { console.log(error) }
    );
  }

  function handleSubmit(e) {
    e.preventDefault();

    setSubmitted(true);
    if (EmailAddress && Password && Password === ConfirmPassword) {
      // get return url from location state or default to home page
      const { from } = location.state || { from: { pathname: "/" } };
      dispatch(userActions.login(EmailAddress, Password, from));

      // https://aplaudoapi.azurewebsites.net/api/artists/changepassword

      putData({ EmailAddress, Password });

    }
  }

  return (
    <div>
      <div className="main-container">
        <div className="left-container">
          <div className="logo-container">
            <img src={aplaudo} alt="Logo" className="logo" />
          </div>
          <div className="search-component">
            <Search />
          </div>
        </div>
        <div className="auth-inner">
          <form className="container" name="form" onSubmit={handleSubmit}>
            <h4 className="text">Welcome to Aplaudo</h4>
            <div className="form-group">
              <label htmlFor="EmailAddress" />
              <input
                type="email"
                name="EmailAddress"
                className={'form-control email text-fields' + (submitted && !EmailAddress ? ' is-invalid' : '')}
                value={EmailAddress}
                placeholder="Email address"
                onChange={handleChange}
              />
              {submitted && !EmailAddress &&
                <div className="invalid-feedback">Email is required</div>
              }
            </div>
            <div className="form-group">
              <label htmlFor="Password" />
              <input
                type="password"
                name="Password"
                className={"form-control password text-fields" + (submitted && !Password ? " is-invalid" : "")}
                value={Password}
                placeholder="Your password"
                onChange={handleChange}
              />
              {submitted && !Password &&
                <div className="invalid-feedback">Password is required</div>
              }
            </div>

            <div className="form-group">
              <label htmlFor="ConfirmPassword" />
              <input
                type="password"
                name="ConfirmPassword"
                className={"form-control password text-fields" + (submitted && !ConfirmPassword && ConfirmPassword !== Password ? " is-invalid" : "")}
                value={ConfirmPassword}
                placeholder="Confirm password"
                onChange={handleChange}
              />
              {submitted && !Password &&
                <div className="invalid-feedback">Passwords must match to be confirmed.</div>
              }
            </div>

            <div className="form-group">
              <input type="submit" className="btn btn-primary btn-custom" />
              <Link to="/signup" className="btn btn-link fgpw">Register</Link>
            </div>
          </form>
        </div>
      </div>
    </div>

  );
};
export default ForgetPassword;