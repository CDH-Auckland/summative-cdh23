import React, { useState } from "react";
import DIOLogoL from "../images/DIO_Logo.png";
import backgroundImgL from "../images/BG_L_L.jpg";

function Landing() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleLogin = (event) => {
    event.preventDefault(); // prevent the default form submission behavior

    // Do something with the form data, such as send it to a server
    console.log("Form submitted:", { name, email });

    // Clear the form inputs after submission
    setName("");
    setEmail("");
  };

  return (
    <div className="wrapper">
      <div className="landingpage">
        <div className="landingpage__login">
          {/* background */}
          <div
            className="landingpage__login--bg_l"
            style={{
              backgroundImage: `url(${backgroundImgL})`,
              height: "1080px",
            }}
          >
            <div className="landingpage__login--contents">
              {/* LOGO */}
              <img
                className="landingpage__login--logo"
                src={DIOLogoL}
                alt="DIO Logo L"
              />
              <h2 className="landingpage__login--h2">Welcom back to DIO</h2>
              <h2 className="landingpage__login--h2Regular">
                Buy & sell your DIY's smatly
              </h2>

              {/* Input section */}

              <form onLogin={handleLogin}>
                <label>
                  <input
                    className="landingpage__login--input-border-bottom"
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Jhon Doe"
                  />
                </label>
                <br />
                <label>
                  <input
                    className="landingpage__login--input-border-bottom"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="jhondoe@mail.com"
                  />
                </label>
                <br />
                <button className="landingpage__login--button" type="login">
                  LOG IN
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* DAVE */}
        <div className="landingpage__signup"></div>
      </div>
    </div>
  );
}

export default Landing;
