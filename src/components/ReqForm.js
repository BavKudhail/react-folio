import React, { useRef, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const ReqForm = () => {
  const [alertMessage, setAlertMessage] = useState("");
  const name = useRef();
  const email = useRef();

  const handleClick = () => {
    const nameValue = name.current.value;
    const emailValue = email.current.value;

    // checking if the values are filled in
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(emailValue)) {
      setAlertMessage("Please enter a valid email address.");
      return;
    }
    if (!nameValue || !emailValue) {
      setAlertMessage("Please fill out all fields.");
      return;
    }
    // saving values to Local Storage
    if (nameValue) {
      localStorage.setItem("nameValue", nameValue);
    }

    if (emailValue) {
      localStorage.setItem("emailValue", emailValue);
    }
    name.current.value = "";
    email.current.value = "";
    setAlertMessage("");
  };

  return (
    <div className="eventForm flex">
      <Card
        className="reqF"
        style={{
          width: "30rem",
          fontFamily: "Sofia, sans-serif",
          padding: "60px",
        }}
      >
        <Card.Body className="cardBody text-center">
          <Card.Title>Get in touch by leaving your details below</Card.Title>
          <Card.Text>What's your name?</Card.Text>
          <input ref={name} className="nameSub" placeholder="Name"></input>
          <Card.Text>Enter your email address below</Card.Text>
          <input
            ref={email}
            className="mailSub"
            placeholder="Enter your email here"
          ></input>
          <Card.Text>Thank you... 🫶</Card.Text>
          <Button onClick={handleClick} variant="dark">
            Submit
          </Button>
          {alertMessage && <div>{alertMessage}</div>}
        </Card.Body>
      </Card>
    </div>
  );
};

export default ReqForm;
