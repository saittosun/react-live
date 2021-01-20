import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../../actions';
import "./register.scss";
import aplaudo from '../../assets/logo.png';
import Search from '../../components/Search';

import BootstrapCarousel from '../Carousel/Carousel';
import About from '../About/About';



const Register = () => {
  const [inputs, setInputs] = useState({
    EmailAddress: '',
    Password: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const { EmailAddress, Password } = inputs;
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

  const postData = async (x) => {
    // const res = await axios.post("/api/artists", testObj)
    const res = await axios.post("https://aplaudoapi.azurewebsites.net/api/artists/userlogin", x)

    console.log(res.data);
    res.then(
      (response) => { console.log(response.json()) },
      (error) => { console.log(error) }
    );
  }

  function handleSubmit(e) {
    e.preventDefault();

    setSubmitted(true);
    if (EmailAddress && Password) {
      // get return url from location state or default to home page
      const { from } = location.state || { from: { pathname: "/" } };
      dispatch(userActions.login(EmailAddress, Password, from));
    }
    postData({ EmailAddress, Password });
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
            <p className="fgpw">
              <Link to="/changepassword" className="btn btn-link fgpw">Forgot your password?</Link>
            </p>
            <div className="form-group">
              <button className="btn btn-primary btn-custom">
                {loggingIn && <span className="spinner-border spinner-border-sm mr-1"></span>}
                          Login
                      </button>
              <Link to="/signup" className="btn btn-link fgpw">Register</Link>
            </div>
          </form>
        </div>
      </div>
      <div className="contanier">
        <BootstrapCarousel />
      </div>
      <div className="contanier">
        <About />
      </div>
    </div>

  );
};
export default Register;