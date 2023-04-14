import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import UploadImg from "../components/UploadImg";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import Header from "../components/Header";

function Sellingitem() {
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


  const [upload, setUpload] = useState(false);
  const [msg, setMsg] = useState(null);
  const [isLOading, setIsLoading] = useState(null);
  const [errorMsgState, setErrorMsgState] = useState(false);
  const [msgState, setMsgState] = useState(false);

  const [inputs, SetInputs] = useState({
    user_id: "user",
    category: "",
    type: "",
    title: "",
    description: "",
    price: "",
    imgUrl1: "",
    imgUrl2: "",
    imgUrl3: "",
    imgUrl4: "",
  });
  const [file1, setFile1] = useState();
  const [limit, setLimit] = useState(0);
  const categoryData = [
    "Category1",
    "Category2",
    "Category3",
    "Category4",
    "Category5",
    "Category6",
  ];
  const typeData = ["DIY Kit", "Ready to use", "Download"];


  const CreateNewSellItem = async () => {

    console.log("images", inputs.imgUrl1, inputs.imgUrl2, inputs.imgUrl3, inputs.imgUrl4);
    const formData = new FormData();
    formData.append("images", inputs.imgUrl1);
    formData.append("images", inputs.imgUrl2);
    formData.append("images", inputs.imgUrl3);
    formData.append("images", inputs.imgUrl4);
    formData.append("user_id", user_id);
    formData.append("name", inputs.title);
    formData.append("category", inputs.category);
    formData.append("type", inputs.type);
    formData.append("description", inputs.description);
    formData.append("price", inputs.price);
    console.log("formData", formData);

    const requestOptions = {
      method: 'POST',
      body: formData,
      // headers: { 'Content-Type': 'application/json' }
    }
    const response = await fetch('http://localhost:4000/api/items/', requestOptions)
    const json = await response.json();
    console.log(json);

    if (!response.ok) {
      setMsg(json.error);
      setErrorMsgState(true);
      setIsLoading(false);
      setMsgState(false);
    } else {

      setMsg(json.msg);
      setMsgState(true);
      setIsLoading(false);
      setErrorMsgState(false);
      navigate("/buyandsell");
    }

  };







  const backNavigation = () => {
    navigate("/buyandsell");
  };

  const submitClickHandler = () => {
    CreateNewSellItem();

    // navigate("/buyandsell");
  };

  const selectChange = (e: SelectChangeEvent<String>, child: React.ReactNode) => {
    SetInputs((inputs) => ({
      ...inputs,
      [e.target.name]: e.target.value,
    }));
    console.log(e.target.name + " ---- " + e.target.value);
  };

  const priceHandleChange = (e) => {
    SetInputs((inputs) => ({
      ...inputs,
      price: e.target.value,
    }));
    console.log(e.target.value);
  };

  const titleHandleChange = (e) => {
    SetInputs((inputs) => ({
      ...inputs,
      title: e.target.value,
    }));
    console.log(e.target.value);
  };

  const decHandleChange = (e) => {
    if (e.target.value.length <= 300) {
      SetInputs((inputs) => ({
        ...inputs,
        description: e.target.value,
      }));
      setLimit(e.target.value.length);
    }
    console.log(e.target.value.length);
  };

  const imgFile = (img_file, img_id) => {

    console.log(img_file.name, img_id);

    SetInputs((inputs) => ({
      ...inputs,
      [img_id]: img_file,
    }));
  };

  return (
    <div className="wrapper">
      <Header title={"Selling Items"} backNavigation={backNavigation} />
      <div className="wrapper__sub">
        <div className="sellingitem__titleblock paddingtop__small">
          <h3>Update your selling information</h3>
          <div className="sellingitem__titleblock__icon">
            <Inventory2OutlinedIcon />
          </div>
        </div>
        <div className="paddinginline__small paddingtop__small">
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut ero labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco poriti
            laboris nisi ut aliquip ex ea commodo consequat.
          </h3>
        </div>
        <div className="sellingitem__inputblocks paddingtop__small">
          <FormControl
            sx={{ m: 1, minWidth: 210 }}
            className="sellingitem__formctrl"
          >
            <InputLabel htmlFor="category-select">Select Category</InputLabel>
            <Select
              name="category"
              id="category-select"
              value={inputs.category}
              label="Select Category"
              onChange={selectChange}
            >
              {categoryData.map((category, index) => {
                return (
                  <MenuItem key={index} value={category}>
                    {category}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <FormControl
            sx={{ m: 1, minWidth: 290 }}
            className="sellingitem__formctrl"
          >
            <InputLabel htmlFor="type-select">Select Type</InputLabel>
            <Select
              name="type"
              id="type-select"
              value={inputs.type}
              label="Select Type"
              onChange={selectChange}
            >
              {typeData.map((type, index) => {
                return (
                  <MenuItem key={index} value={type}>
                    {type}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <div className="sellingitem__divaddtitle paddingtop__small">
            <input
              required
              className="sellingitem__inputadditem"
              type="text"
              id="price"
              value={inputs.price}
              onChange={priceHandleChange}
            />
            <label htmlFor="title">Price(NZD$)</label>
          </div>
          <div className="sellingitem__divaddtitle paddingtop__small">
            <input
              required
              className="sellingitem__inputadditem"
              type="text"
              id="title"
              value={inputs.title}
              onChange={titleHandleChange}
            />
            <label htmlFor="title">Add Title</label>
          </div>
          <div className="sellingitem__divdescription paddingtop__small">
            <h5>Add Description</h5>
            <textarea
              required
              className="sellingitem__inputdesc"
              id="title"
              placeholder="Add your items description"
              rows={5}
              cols={80}
              value={inputs.description}
              onChange={decHandleChange}
            />
            <span
              className={
                limit < 300
                  ? "sellingitem__descriptionLimit"
                  : "sellingitem__descriptionLimit sellingitem__descriptionLimit--red"
              }
            >
              {limit}/300
            </span>
          </div>
          <div className="sellingitem__addimage">
            <UploadImg key={1} id={"imgUrl1"} imgFile={imgFile} />
            <UploadImg key={2} id={"imgUrl2"} imgFile={imgFile} />
            <UploadImg key={3} id={"imgUrl3"} imgFile={imgFile} />
            <UploadImg key={4} id={"imgUrl4"} imgFile={imgFile} />
          </div>
          {msgState && <div className="msg">{msg}</div>}
          {errorMsgState && <div className="error">{msg}</div>}
          <button className="button" onClick={submitClickHandler}>
            SUBMIT
          </button>
          <button className="button button--invert" onClick={backNavigation}>
            CANCEL
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sellingitem;
