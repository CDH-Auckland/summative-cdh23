import React, { useEffect, useState } from "react";
// import AssignmentIcon from "@mui/icons-material/Assignment";
import PersonSharpIcon from "@mui/icons-material/PersonSharp";
import HomeIcon from "@mui/icons-material/Home";
import Header from "../components/Header";

const handleSubmit = (e) => {};

var updateToken = true;

const signupHandler = async (e) => {
  if (checked) {
    
    if (password !== confirmPassword) {
      setAccountPassword("");
      setAccountConfirmPassword("");
      setMsg("Password and comfirm password not matched");
      setErrorMsgState(true);
      setMsgState(false);
      setIsLoading(false);
      updateToken = false;
    }
  }

  if (updateToken) {
    const requestOptions = {

      method: "PUT",

      body: JSON.stringify({
        user_id: user_id,
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
      }),

      headers: { "Content-Type": "application/json" },
    };

    const response = await fetch(
      "http://localhost:4000/api/user/account",
      requestOptions
    );

    const data = await response.json();

    if (!response.ok) {
      setMsg(data.error);
      setErrorMsgState(true);
      setMsgState(false);
      setIsLoading(false);

    } else {
      setMsg(data.msg);
      setMsgState(true);
      setErrorMsgState(false);
      setIsLoading(false);
      navigate("/");
    }

    setAccountFirstName("");
    setAccountLastName("");
    setAccountEmail("");
    setAccountPassword("");
    setAccountConfirmPassword("");
  }
};

signupHandler();

function AccountDetails() {
  const [msg, setMsg] = useState("");
  const [isLOading, setIsLoading] = useState(null);
  const [errorMsgState, setErrorMsgState] = useState(false);
  const [msgState, setMsgState] = useState(false);

  const [accountArray, setAccountArray] = useState([]);
  const [firstName, setAccountFirstName] = useState([]);
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

  const user_id = "64373945be3bc0b81f1e5cd4";

  //Api get account details on page loading

  useEffect(() => {
    console.log("inside api request");
    const getAccountDetails = async () => {
      const requestOptions = {
        method: "GET",
      };
      const response = await fetch(
        `http://localhost:4000/api/user/account/${user_id}`,
        requestOptions
      );
      const data = await response.json();
      console.log("api responce", data);
      const { _id } = data;
      console.log("id", _id);
      setAccountFirstName(data.first_name);
      setAccountLastName(data.last_name);
      setAccountEmail(data.email);

      if (!response.ok) {
        setMsg(data.error);
        setErrorMsgState(true);
        setMsgState(false);
        setIsLoading(false);
      } else {
        setMsg(data.msg);
        setMsgState(true);
        setErrorMsgState(false);
        setIsLoading(false);
      }
    };

    getAccountDetails();
  }, []);

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
            <h4>Change password</h4>
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
        <button className="Accoundetails__save__button" onClick={handleSubmit}>
          SAVE
        </button>
        <button
          className="Accoundetails__delete__button"
          onClick={handleSubmit}
        >
          DELETE
        </button>
      </div>
    </div>
  );
}

export default AccountDetails;
