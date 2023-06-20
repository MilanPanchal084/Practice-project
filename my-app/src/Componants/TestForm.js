import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function TestForm(props) {
  const [text, setText] = useState("dhsaiohaiosho bduiagb os dsib");

  const handleClick = () => {
    let newTxt = text.toUpperCase();
    setText(newTxt);
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const tolower = () =>{
    let newTxt = text.toLowerCase();
    setText(newTxt);
  }
  const copyText = () => {
    navigator.clipboard.writeText(text);
  }
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            type="password"
            className="form-control"
            rows={7}
            id="exampleInputPassword1"
            value={text}
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-primary" onClick={handleClick}>
          convert to upper
        </button>
        <button className="btn btn-primary mx-2" onClick={() => setText("")}>
          Clear text
        </button>
        <button className="btn btn-primary mx-2" onClick={tolower}>
          convert to lower
        </button>
        <button className="btn btn-primary mx-2" onClick={copyText}>
          Copy to clipboard
        </button>
      </div>
      <div className="container">
        <h2>Your text summary</h2>
        <p>{text.replace(/\s/g, "").length} characters wihout spaces</p>
        <p>{text.split(" ").length} words</p>
        <p>{text.length} characters wih spaces</p>
      </div>
    </>
  );
}
