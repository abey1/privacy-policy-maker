import React, { useState } from "react";
import "./card.scss";
const Card = ({ title, rollNo, content }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="card_container">
      <div
        className="header"
        onClick={() => {
          setExpanded(!expanded);
        }}
      >
        <div className="title">
          {rollNo}. {title}
        </div>
        <div className="icon">
          {expanded ? (
            <i
              class="fa-solid fa-minus rotate_right"
              onClick={() => {
                setExpanded(!expanded);
              }}
            ></i>
          ) : (
            <i
              class="fa-solid fa-plus rotate_left"
              onClick={() => {
                setExpanded(!expanded);
              }}
            ></i>
          )}
        </div>
      </div>
      <div
        className={`content_holder content_collapse ${
          expanded ? "content_expand" : ""
        }`}
      >
        {content}
      </div>
    </div>
  );
};

export default Card;
