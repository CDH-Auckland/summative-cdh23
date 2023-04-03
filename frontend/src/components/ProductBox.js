import React from "react";

function ProductBox(props) {
  const handleEdit = () => {
    console.log(`Editing product ${props.id}`);
    props.listitemClickEvent(props.id);
  };

  return (
    <div className="productBox">
      <div className="productBox_left">
        <img src={props.imageUrl} alt={props.name} />
      </div>
      <div className="productBox_right">
        <div className="productBox_infopart">
          <div className="productBox_name">{props.name}</div>
          <div className="productBox_author">{props.author}</div>
        </div>
        <button className="button" onClick={handleEdit}>
          EDIT
        </button>
      </div>
    </div>
  );
}

export default ProductBox;
