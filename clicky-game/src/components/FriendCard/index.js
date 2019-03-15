import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card">
        <img className="card-img" alt={props.name} src={props.image} />
    </div>
  );
}

export default FriendCard;
