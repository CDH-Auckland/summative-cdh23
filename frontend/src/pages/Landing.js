import React, { useState } from "react";
import DIOLogoR from "../images/DIO_LogoR.png";
import background from "../images/BG_L_R.jpg";

function Landing() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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
            className="landingpage__login_bg_r"
            style={{
              backgroundImage: `url(${background})`,
              height: "960px",
              width: "1080px",
            }}
          >
            <img className="DIOLogoR" src={DIOLogoR} alt="DIO Logo R" />
            <h2>
              Create an account by filling the form below to buy & sell your
              kits
            </h2>

            <form className="landingpage__signup_input" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="firstName"></label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="lastName"></label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="email"></label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password"></label>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="confirmPassword"></label>
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <button className="landingpage__signup_button" type="submit">
                <h2>Sign Up</h2>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
