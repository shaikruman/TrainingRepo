import React from "react";

export default function firstC() {
  var sno = 100;
  const Handler = () => {
    alert("clicked me wow");
    alert(sno);
  };
  return (
    <div>
      <h1>This is {sno}</h1>
      <input type="text" value={sno}></input>
      <input type="button" value="click me" onClick={Handler}></input>
    </div>
  );
}
