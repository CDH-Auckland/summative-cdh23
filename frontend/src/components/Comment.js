import React from 'react'

function Comment({ comment }) {

    return (
        <div className="component comment-view">
            <h2>Comment Component</h2>
            <div className="comment__body">
                <p>{comment.comment}</p>
                <div className="comment__details">
                    <p>By: {comment.email}</p>
                    {/* <p>At: {comment.createdAt}</p> */}
                </div>
            </div>
        </div>
    );

}

export default Comment