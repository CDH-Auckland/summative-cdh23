import React from "react";

import { useState, useEffect } from "react";

function CommentsCreate(props) {
  const [comment, setComment] = useState("");
  const [user_id, setUser_id] = useState("");
  const [product_id, setProduct_id] = useState(props.product_id);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      const user = JSON.parse(localStorage.getItem("user"));
      setUser_id(user._id);
      console.log(user_id);
    }
  }, []);

  const handleSubmit = () => {
    const updateComment = async () => {
      const requestOptions = {
        method: "POST",
        body: JSON.stringify({
          user_id: user_id,
          product_id: product_id,
          comment: comment,
        }),
        headers: { "Content-Type": "application/json" },
      };
      const response = await fetch('http://localhost:4000/api/comment/', requestOptions);
      const json = await response.json();
      console.log(json);
      //   //   setProductDetails(json);

      // get product_id, name, price,description, img_url1, img_url2, img_url3, img_url4, seller_name
      console.log("Comment updated");
      setComment("");
      // };
      props.refreshComments();
    };

    updateComment();
  }
  return (
    <div className="component comment-create">
      <h2 className="component comment-create-h2">CommentCreate Component</h2>
      <div className="component comment-create-write">
        <label htmlFor="comment">Comment</label>
        <textarea
          className="component comment-create-textarea"
          rows="7"
          cols="70"
          name="comment"
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default CommentsCreate;
