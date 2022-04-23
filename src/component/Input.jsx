import React from "react";

export default function Input() {
  return (
    <input
      type="text"
      style={{
        height: "20%",
        width: "250px",
        marginTop: "30px",
        textCombineUpright: "none",
        outline: "none",
        border: "none",
        borderBottom: "1px solid white",
        background: "black",
        color: "white",
      }}
      placeholder="Search"
    />
  );
}
