import React, { useState } from "react";
import DIOLogoR from "../images/DIO_LogoR.png";
import background from "../images/BG_L_R.jpg";
import DIOLogoL from "../images/DIO_Logo.png";
import backgroundImgL from "../images/BG_L_L.jpg";
import MailIcon from "@mui/icons-material/Mail";
import LockIcon from "@mui/icons-material/Lock";

function Landing() {
  const [firstName, setsignFirstName] = useState("");
  const [lastName, setsignLastName] = useState("");
  const [email, setsignEmail] = useState("");
  const [password, setsignPassword] = useState("");
  const [confirmPassword, setsignConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ firstName, lastName, email, password, confirmPassword });
    // do something with the form data, like send it to a server
  const [logemail, setLogEmail] = useState("");
  const [logpw, setLogPw] = useState("");
  }

   
            


  const handleLogin = (event) => {
    event.preventDefault(); // prevent the default form submission behavior

    // Do something with the form data, such as send it to a server
    console.log("Form submitted:", { logemail, logpw });

    // Clear the form inputs after submission
    setLogEmail("");
    setLogPw("");

  };

  return (
    <div className="wrapper">
      <div className="landingpage">
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

            <div className="landingpage__signup__input" onSubmit={handleSubmit}>
              <div>
                {/* <label htmlFor="firstName"></label> */}
                <input
                  type="text"
                  id="firstName"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setsignFirstName(e.target.value)}
                />
              </div>
              <div>
                {/* <label htmlFor="lastName"></label> */}
                <input
                  type="text"
                  id="lastName"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setsignLastName(e.target.value)}
                />
              </div>
              <div>
                {/* <label htmlFor="email"></label> */}
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setsignEmail(e.target.value)}
                />
              </div>
              <div>
                {/* <label htmlFor="password"></label> */}
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setsignPassword(e.target.value)}
                />
              </div>
              <div>
                {/* <label htmlFor="confirmPassword"></label> */}
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setsignConfirmPassword(e.target.value)}
                />
              </div>
              <button className="landingpage__signup__button" type="submit">
                <h2>Sign Up</h2>
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
                  type="text"
                  value={logpw}
                  onChange={(event) => setLogPw(event.target.value)}
                  placeholder="Password"
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
      </div
    </div>
  );
}

export default Landing;
