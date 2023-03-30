import React, { useState } from "react";
import DIOLogoR from "../images/DIO_LogoR.png";
import background from "../images/BG_L_R.jpg";

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
  };

  return (
    <div className="wrapper">
      <div className="landingpage">
        <div className="landingpage__login"> </div>
        <div className="landingpage__signup">
          <div
            className="landingpage__signup__bgr"
            style={{
              backgroundImage: `url(${background})`,
              height: "1080px",
            }}
          >
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

              <div
                className="landingpage__signup__input"
                onSubmit={handleSubmit}
              >
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
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
