import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// import AssignmentIcon from "@mui/icons-material/Assignment";
import ConfirmNotification from '../components/ConfirmNotification';
import PersonSharpIcon from "@mui/icons-material/PersonSharp";
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

  const navigate = useNavigate();
  const [user_id, setUser_id] = useState();
  useEffect(() => {
    if (localStorage.getItem('user')) {
      const user = JSON.parse(localStorage.getItem('user'));
      setUser_id(user._id);
      console.log(user_id);
    } else {
      navigate("/")
    }
  }, []);

  console.log("testing user inf", user_id)

  const [msg, setMsg] = useState("");
  const [dilogeOpen, setDilogeOpen] = useState(false);
  const [isLOading, setIsLoading] = useState(null);
  const [errorMsgState, setErrorMsgState] = useState(false);

  const [firstName, setAccountFirstName] = useState([]);
  const [lastName, setAccountLastName] = useState("");
  const [email, setAccountEmail] = useState("");
  const [password, setAccountPassword] = useState("");
  const [confirmPassword, setAccountConfirmPassword] = useState("");

  const [checked, setChecked] = React.useState(false);



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

      if (!response.ok) {
        setMsg(data.error);
        setDilogeOpen(true);
        setErrorMsgState(true);
        setIsLoading(false);
      } else {
        setAccountFirstName(data[0].first_name);
        setAccountLastName(data[0].last_name);
        setAccountEmail(data[0].email);
        setMsg(data.msg);
        setDilogeOpen(false);
        setErrorMsgState(false);
        setIsLoading(false);
      }
    };

    getAccountDetails();
  }, [user_id]);



  const handleSubmit = (e) => {

    var updateToken = true;
    const signupHandler = async (e) => {

      if (checked) {
        if (password !== confirmPassword) {
          setAccountPassword("");
          setAccountConfirmPassword("");
          setMsg("Password and comfirm password not matched");
          setDilogeOpen(true);
          setErrorMsgState(true);
          setIsLoading(false);
          updateToken = false;
        }
        if (password === "") {
          setAccountPassword("");
          setAccountConfirmPassword("");
          setMsg("Enter new password");
          setDilogeOpen(true);
          setErrorMsgState(true);
          setIsLoading(false);
          updateToken = false;
        }
      }

      if (updateToken) {
        const requestOptions = {
          method: 'PUT',
          body: JSON.stringify({ user_id: user_id, first_name: firstName, last_name: lastName, email: email, password: password }),
          headers: { 'Content-Type': 'application/json' }
        }

        const response = await fetch('http://localhost:4000/api/user/account', requestOptions)
        const data = await response.json();

        if (!response.ok) {
          setMsg(data.error);
          setDilogeOpen(true);
          setErrorMsgState(true);
          setIsLoading(false);
        } else {
          setMsg(data.msg);
          setDilogeOpen(true);
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



  };

  const handleDelete = (e) => {

  }

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const dilogCloseHandler = (e) => {
    console.log("Diloge closed")
    setDilogeOpen(false);

  }

  return (
    <div className="wrapper">
      <Header title={"Account Details"} />
      <div className="wrapper__sub">
        <ConfirmNotification openDilog={dilogeOpen} msgError={errorMsgState} msg={msg} dilogCloseHandler={dilogCloseHandler} />

        <div className="Account__title">
          <h3>Account Details</h3>
          <div className="product__icon__top">
            <PersonSharpIcon fontSize="large" />
          </div>
        </div>

        <div className="Accoundetails__Account__input" >
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

          <div className=" paddingtop__small">
            <h4>Change password</h4>

            <input
              type="checkbox"
              checked={checked}
              onChange={handleChange}
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
        {/* {msgState && <div className="msg">{msg}</div>}
        {errorMsgState && <div className="error">{msg}</div>} */}
        <button className="Accoundetails__save__button" onClick={handleSubmit}>
          SAVE
        </button>
        <button
          className="Accoundetails__delete__button"
          onClick={handleDelete}
        >
          DELETE
        </button>
      </div>
    </div>
  );
}

export default AccountDetails;
