import React from "react";

import img_not from "../images/img_not.png"

function ProductBox(props) {

  const handleDelete = () => {
    console.log(`Delete product ${props.id}`);
    props.listitemClickEvent(props.id);
  };

  console.log("img url1", props.imgUrl);

  return (
    <div className="productBox">
      <div className="productBox_left">
        {props.img ? (
          <img src={`http://localhost:4000/items-image/${props.img}`} alt={props.name} />
        ) : (
          <img src={img_not} alt={props.name} />
        )}

      </div>
      <div className="productBox_right">
        <div className="productBox_infopart">
          <div className="productBox_name">{props.name}</div>
          <div className="productBox_author">{`NZD$${props.price}`}</div>
          <div className="productBox_divdescription ">
            {props.description}
          </div>
        </div>
        <button className="button" onClick={handleDelete}>
          DELETE
        </button>
      </div>
    </div>
  );
}

export default ProductBox;
