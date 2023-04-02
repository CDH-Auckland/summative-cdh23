import React, { useState } from "react";

import DIOLogoL from "../images/DIO_Logo.png";
import MailIcon from "@mui/icons-material/Mail";
import LockIcon from "@mui/icons-material/Lock";

function Landing() {
  const [logemail, setLogEmail] = useState("");
  const [logpw, setLogPw] = useState("");

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
      </div>

      {/* DAVE */}
      <div className="landingpage__signup"></div>
    </div>
  );
}

export default Landing;
