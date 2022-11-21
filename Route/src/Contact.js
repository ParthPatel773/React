import React from "react";
import { useParams } from "react-router-dom";

function Contact() {
  let { myname } = useParams();
  return (
    <div>
      <h1>Contact</h1>
      <h2>Param is : {myname} </h2>
    </div>
  );
}

export default Contact;
