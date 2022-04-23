import React from "react";
import Input from "./Input";
export default function Search(props) {
  return (
    <div>
      <Input />
      <img
        src="images/search-icon.svg"
        width="15px"
        height="15px"
        style={{ marginLeft: "-15px" }}
      />
    </div>
  );
}
