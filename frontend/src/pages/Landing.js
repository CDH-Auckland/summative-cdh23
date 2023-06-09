import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext"

import Msgbox from "../components/Msgbox"

import DIOLogoR from "../images/DIO_LogoR.png";
import DIOLogoL from "../images/DIO_Logo.png";
import MailIcon from "@mui/icons-material/Mail";
import LockIcon from "@mui/icons-material/Lock";

function Landing() {
  const navigate = useNavigate();
  const { dispatch } = useAuthContext();

  const [error, setError] = useState(null);
  const [isLOading, setIsLoading] = useState(null);
  const [msgbox, setMsgBox] = useState(false);

  const [firstName, setsignFirstName] = useState("");
  const [lastName, setsignLastName] = useState("");
  const [email, setsignEmail] = useState("");
  const [password, setsignPassword] = useState("");
  const [confirmPassword, setsignConfirmPassword] = useState("");

  const [logemail, setLogEmail] = useState("");
  const [logpw, setLogPw] = useState("");

  const handleLogin = async (event) => {
    const requestOptions = {
      method: 'POST',
      body: JSON.stringify({ email: logemail, password: logpw }),
      headers: { 'Content-Type': 'application/json' }
    }
    const response = await fetch('http://localhost:4000/api/user/login', requestOptions)
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setIsLoading(false);
      setMsgBox(true);
    } else {
      console.log(json);
      localStorage.setItem('user', JSON.stringify(json))
      dispatch({ type: 'LOGIN', payload: json });
      setIsLoading(false);
      setError(null);
      setMsgBox(false);
      setLogEmail("");
      setLogPw("");
      navigate("/buyandsell");
    }
  };

  const signupHandler = async (e) => {
    if (password === confirmPassword) {
      const requestOptions = {
        method: 'POST',
        body: JSON.stringify({ first_name: firstName, last_name: lastName, email: email, password: password }),
        headers: { 'Content-Type': 'application/json' }
      }
      const response = await fetch('http://localhost:4000/api/user/signup', requestOptions)
      const json = await response.json();

      if (!response.ok) {
        setError(json.error);
        setIsLoading(false);
        setMsgBox(true);
      } else {

        localStorage.setItem('user', JSON.stringify(json))
        dispatch({ type: 'LOGIN', payload: json });
        setIsLoading(false);
        setError(null);
        setMsgBox(false);
        setsignFirstName("");
        setsignLastName("");
        setsignEmail("");
        setsignPassword("");
        setsignConfirmPassword("");
        navigate("/buyandsell");
      }
    } else {
      setsignPassword("");
      setsignConfirmPassword("");
      setError("Password and comfirm password not matched");
      setMsgBox(true);
    }
  };



  return (
    <div className="wrapper">
      <Msgbox view={msgbox} page={"Landing"} msg={error} />
      <div className="landingpage">
        <div className="landingpage__login">
          {/* background */}

          <div className="landingpage__login--contents">
            {/* LOGO */}
            <img
              className="landingpage__login--logo"
              src={DIOLogoL}
              alt="DIO Logo L"
            />
            <h3 className="landingpage__login--h3">
              Welcom back to DIO
              <br /> Buy & sell your DIY's smatly
            </h3>
            {/* <h2 className="landingpage__login--h2"></h2> */}

            {/* Input section */}

            <div className="landingpage__login__input__wrapper">
              <div className="landingpage__login__inputarea">
                <div className="landingpage__login--inputicon">
                  <MailIcon />
                </div>
                <input
                  className="landingpage__login--input-border-bottom"
                  type="email"
                  value={logemail}
                  onChange={(event) => setLogEmail(event.target.value)}
                  placeholder="Email Address / ID"
                />
              </div>

              <div className="landingpage__login__inputarea">
                <input
                  className="landingpage__login--input-border-bottom"
                  type="password"
                  placeholder="Password"
                  value={logpw}
                  onChange={(event) => setLogPw(event.target.value)}
                />
                <div className="landingpage__login--inputicon">
                  <LockIcon />
                </div>
              </div>

              <button
                onClick={handleLogin}
                className="landingpage__login--button"
                type="login"
              >
                LOG IN
              </button>
            </div>
          </div>
        </div>

        <div className="landingpage__signup">
          <div className="landingpage__signup__contents">
            <img
              className="landingpage__signup__DIOLogoR"
              src={DIOLogoR}
              alt="DIO Logo R"
            />
            <h3>
              Create an account by filling the form below to buy & sell your
              kits
            </h3>

            <div className="landingpage__signup__input">
              <div>
                <input
                  className="landingpage__signup__input-boxdesign"
                  type="text"
                  id="firstName"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setsignFirstName(e.target.value)}
                />
              </div>
              <div>
                <input
                  className="landingpage__signup__input-boxdesign"
                  type="text"
                  id="lastName"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setsignLastName(e.target.value)}
                />
              </div>
              <div>
                <input
                  className="landingpage__signup__input-boxdesign"
                  type="email"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setsignEmail(e.target.value)}
                />
              </div>
              <div>
                <input
                  className="landingpage__signup__input-boxdesign"
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setsignPassword(e.target.value)}
                />
              </div>
              <div>
                <input
                  className="landingpage__signup__input-boxdesign"
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setsignConfirmPassword(e.target.value)}
                />
              </div>
              <button
                className="landingpage__signup__button"
                type="submit"
                onClick={signupHandler}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
      {msgbox && <div className="error">{error}</div>}
    </div>
  );
}

export default Landing;
