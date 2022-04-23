import React from "react";

export default function Button(props) {
  return (
    <button style={{ background: props.bgcolor }} className={props.className}>
      {props.text}
    </button>
  );
}
