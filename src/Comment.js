import React from "react";
import faker from "faker";

const Comment = (props) => {
    console.log(props)
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={faker.image.image()} />
            </a>
            <div className="content">
                <a href="/" className="author">
                    {props.item.author}
                </a>
                <div className="metadata">
                    <span className="date">
                        {props.item.date}
                    </span>
                </div>
                <div className="text">
                    {props.item.comment}
                </div>
            </div>
        </div>
    );
};

export default Comment;