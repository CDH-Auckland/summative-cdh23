import React from "react";

function ProductBox({ product }) {
  const handleEdit = () => {
    console.log(`Editing product ${product.id}`);
  };

  return (
    <div className="productBox">
      <div className="productBox_left">
        <img src={product.imageUrl} alt={product.name} />
      </div>
      <div className="productBox_right">
        <div className="productBox_infopart">
          <div className="productBox_name">{product.name}</div>
          <div className="productBox_author">{product.author}</div>
        </div>
        <button className="productBox_editButton" onClick={handleEdit}>
          EDIT
        </button>
      </div>
    </div>
  );
}

export default ProductBox;
