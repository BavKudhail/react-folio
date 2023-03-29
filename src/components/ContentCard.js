import React from "react";
import Card from "react-bootstrap/Card";

const ContentCard = (props) => {
  return (
    <div>
      <form
        className="aboutCard"
        style={{
          fontFamily: "Sofia, sans-serif",
          fontSize: "50px",
        }}
      >
        <Card.Header
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {props.title}
        </Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>{props.content}</p>
          </blockquote>
        </Card.Body>
      </form>
    </div>
  );
};

export default ContentCard;
