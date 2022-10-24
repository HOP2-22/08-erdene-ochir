import React from "react";
import "../styles/ListStyle.css";
export const List = () => (
    <div>Hello</div>
);
export const Comment = (props) => {
    const { commentText } = props;
    return <div className="comment">{commentText}</div>;
};
export default List;