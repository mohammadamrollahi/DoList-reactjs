import React, { useState } from "react";

export default function DoList(props) {
  const [inputvalue, setinputvalue] = useState("");
  const [listofvalues, setlistofvalues] = useState([]);
  const addHandler = () => {
    const obj={
      value:inputvalue,
      id:Date.now()
    }
    setlistofvalues([...listofvalues, obj]);
  };
  const changeHandler = (event) => {
    setinputvalue(event.target.value);
  };
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-evanly" }}>
        <input value={inputvalue} type={"text"} onChange={changeHandler} />

        <button onClick={addHandler} style={{ margin: "0 0.5rem" }}>
          Add
        </button>
      </div>

      <ol>
        {listofvalues.map((item) => (
          
          <li style={{ display: "flex", justifyContent: "space-between" }}>
            <input
              style={{ margin: "0 0.5rem 0 0 ", alignSelf: "center" }}
              type="checkbox"
            />
            <span style={{ margin: "0 0.5rem" }}>{item.value}</span>

            <span style={{ margin: "0 0.5rem", alignSelf: "center" }}>
              <button>Delete</button>
            </span>
          </li>
        ))}
      </ol>
    </>
  );
}
  