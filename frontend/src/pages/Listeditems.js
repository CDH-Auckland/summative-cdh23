import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import ConfirmNotification from '../components/ConfirmNotification';

import Header from "../components/Header";
import ProductBox from "../components/ProductBox"; // assuming ProductBox.js is in the same directory as Listeditems.js
import Statusmenu from "../components/Statusmenu";

function Listeditems() {
  const navigate = useNavigate();
  const [fetchData, SetFetchData] = useState(false);
  const [user_id, setUser_id] = useState();

  useEffect(() => {
    if (localStorage.getItem('user')) {
      const user = JSON.parse(localStorage.getItem('user'));
      setUser_id(user._id);
      console.log(user_id);
      SetFetchData(true);
    } else {
      navigate("/")
    }
  }, []);

  console.log("testing user inf", user_id)


  const [cartCount, setCartCount] = useState(3);
  const [productArray, setProductArray] = useState(null);

  const [msg, setMsg] = useState("");
  const [dilogeOpen, setDilogeOpen] = useState(false);
  const [isLOading, setIsLoading] = useState(null);
  const [errorMsgState, setErrorMsgState] = useState(false);

  // Fetch all list of products
  const getAccountDetails = async () => {
    const requestOptions = {
      method: "GET",
    };
    const response = await fetch(
      `http://localhost:4000/api/listed/${user_id}`,
      requestOptions
    );
    const data = await response.json();
    console.log(data);
    if (!response.ok) {
      setMsg(data.error);
      setDilogeOpen(true);
      setErrorMsgState(true);
      setIsLoading(false);
    } else {
      setProductArray(data);
      setMsg(data.msg);
      setDilogeOpen(false);
      setErrorMsgState(false);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    console.log("inside api request");
    if (fetchData) {
      getAccountDetails();
    }
  }, [fetchData]);




  const backNavigation = () => {

    // navigate("/browseitems");
  }

  //Delete selecte listing API 
  const deleteAccount = async (id) => {
    const requestOptions = {
      method: "DELETE",
    };
    const response = await fetch(
      `http://localhost:4000/api/listed/${id}`,
      requestOptions
    );
    const data = await response.json();
    console.log(data);
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
    }
    getAccountDetails();
  };

  const listitemClickEvent = (id) => {
    deleteAccount(id);
  };
  const hamburgerClick = (e) => {
    console.log(e);
  };

  // var itemElements = '';
  // if (productArray === undefined) {
  //   itemElements = () => {
  //     return <div> No items</div>
  //   }
  // } else {
  const itemElements = productArray?.map((product, index) => {
    console.log("product", product);
    return (
      <ProductBox
        key={index}
        id={product._id}
        img={product.imgUrl1}
        name={product.name}
        price={product.price}
        description={product.description}
        listitemClickEvent={listitemClickEvent}
      />
    );
  });


  const dilogCloseHandler = (e) => {
    console.log("Diloge closed")
    setDilogeOpen(false);
  }



  return (
    <div className="wrapper">
      <Header
        title={"View Listed selling items"}
        backNavigation={backNavigation}
      />
      <div className="wrapper__sub">
        <ConfirmNotification openDilog={dilogeOpen} msgError={errorMsgState} msg={msg} dilogCloseHandler={dilogCloseHandler} />
        <Statusmenu
          username={"John"}
          hamburgerClick={hamburgerClick}
          cartCount={cartCount}
        />
        <div className="listeditemsPage">
          <div className="listeditemsPage_h3section paddingtop__small">
            <h3 className="listeditemsPage_h3-blue">
              Edit / Delete listed items
            </h3>
          </div>
          <div className="productList">
            {itemElements}
          </div>
        </div>
        {/* {msgState && <div className="msg">{msg}</div>}
        {errorMsgState && <div className="error">{msg}</div>} */}
      </div>
    </div>
  );
}

export default Listeditems;
