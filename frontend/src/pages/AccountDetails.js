import React, { useState } from "react";
// import AssignmentIcon from "@mui/icons-material/Assignment";
import PersonSharpIcon from "@mui/icons-material/PersonSharp";
import HomeIcon from "@mui/icons-material/Home";
import Header from "../components/Header";

function AccountDetails() {
  const [firstName, setAccountFirstName] = useState("");
  const [lastName, setAccountLastName] = useState("");
  const [email, setAccountEmail] = useState("");
  const [password, setAccountPassword] = useState("");
  const [confirmPassword, setAccountConfirmPassword] = useState("");

  const [Addres1, setAddressAddres1] = useState("");
  const [Address2, setAddressAddress2] = useState("");
  const [Surburb, setAddressSurburb] = useState("");
  const [City, setAddressCity] = useState("");
  const [PostCode, setAddressPostCode] = useState("");
  const [Phone, setAddressPhone] = useState("");

  const [logemail, setLogEmail] = useState("");
  const [logpw, setLogPw] = useState("");

  const handleLogin = (event) => {
    console.log("Form submitted:", { logemail, logpw });
    setLogEmail("");
    setLogPw("");
  };

  const handleSubmit = (e) => {
    console.log({
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      Addres1,
      Address2,
      Surburb,
      City,
      PostCode,
      Phone,
    });

    setAccountFirstName("");
    setAccountLastName("");
    setAccountEmail("");
    setAccountPassword("");
    setAccountConfirmPassword("");

    setAddressAddres1("");
    setAddressAddress2("");
    setAddressSurburb("");
    setAddressCity("");
    setAddressPostCode("");
    setAddressPhone("");
  };

  return (
    <div className="wrapper">
      <Header title={"Account Details"} />
      <div className="wrapper__sub">
        <div className="Account__title">
          <h3>Account Details</h3>
          <div className="product__icon__top">
            <PersonSharpIcon fontSize="large" />
          </div>
        </div>

        <div className="Accoundetails__Account__input" onSubmit={handleSubmit}>
          <div>
            <input
              className="Accoundetails__Account__input-boxdesign"
              type="text"
              id="firstName"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setAccountFirstName(e.target.value)}
            />
          </div>
          <div>
            <input
              className="Accoundetails__Account__input-boxdesign"
              type="text"
              id="lastName"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setAccountLastName(e.target.value)}
            />
          </div>
          <div>
            <input
              className="Accoundetails__Account__input-boxdesign"
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setAccountEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              className="Accoundetails__Account__input-boxdesign"
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setAccountPassword(e.target.value)}
            />
          </div>
          <div>
            <input
              className="Accoundetails__Account__input-boxdesign"
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setAccountConfirmPassword(e.target.value)}
            />
          </div>
        </div>

        <div className="Address__title">
          <h3>Address Details</h3>
          <div className="product__icon__top">
            <HomeIcon fontSize="large" />
          </div>
        </div>

        <div className="Accoundetails__Address__input" onSubmit={handleSubmit}>
          <div>
            <input
              className="Accoundetails__Address__input-boxdesign"
              type="text"
              id="Address1"
              placeholder="Address 1"
              value={Addres1}
              onChange={(e) => setAddressAddres1(e.target.value)}
            />
          </div>
          <div>
            <input
              className="Accoundetails__Address__input-boxdesign"
              type="text"
              id="Address2"
              placeholder="Address 2"
              value={Address2}
              onChange={(e) => setAddressAddress2(e.target.value)}
            />
          </div>
          <div>
            <input
              className="Accoundetails__Address__input-boxdesign"
              type="text"
              id="Surburb"
              placeholder="Surburb"
              value={Surburb}
              onChange={(e) => setAddressSurburb(e.target.value)}
            />
          </div>
          <div>
            <input
              className="Accoundetails__Address__input-boxdesign"
              type="text"
              id="City"
              placeholder="City"
              value={City}
              onChange={(e) => setAddressCity(e.target.value)}
            />
          </div>
          <div>
            <input
              className="Accoundetails__Address__input-boxdesign"
              type="text"
              id="PostCode"
              placeholder="Post Code"
              value={PostCode}
              onChange={(e) => setAddressPostCode(e.target.value)}
            />
          </div>
          <input
            className="Accoundetails__Address__input-boxdesign"
            type="text"
            id="Phone"
            placeholder="Phone"
            value={Phone}
            onChange={(e) => setAddressPhone(e.target.value)}
          />
        </div>
      </div>
      <button className="Accoundetails__save__button" onClick={handleSubmit}>
        SAVE
      </button>
      <button className="Accoundetails__delete__button" onClick={handleSubmit}>
        DELETE
      </button>
      {/* <button
        className="Accoundetails__save__button"
        type="save"
        onClick={handleSubmit}
      >
        SAVE
      </button>

      <button
        className="Accoundetails__delete__button"
        type="delete"
        onClick={handleSubmit}
      >
        DELETE
      </button> */}
    </div>
  );
}

export default AccountDetails;
